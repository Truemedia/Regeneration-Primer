/* 
* @file Geo class
* @author Wade Penistone (Truemedia)
* @overview Class for building threejs objects and instances from GEOJSON
* @copyright Wade Penistone 2014
* @license MIT license ({@link http://opensource.org/licenses/MIT| See here})
* Git repo: {@link http://www.github.com/Truemedia/Regeneration-Primer| Regeneration Primer github repository}
* Author links: {@link http://youtube.com/MCOMediaCityOnline| YouTube} and {@link http://github.com/Truemedia| Github}
*/
define(['three'], function(THREE)
{
	geo =
	{
		x_values: [],
		y_values: [],
		z_values: [],
		threegeo: [],

		/**
		 * Draw GeoJSON
		 * Iterates through the latitude and longitude values, converts the values to XYZ coordinates, 
		 * and draws the geoJSON geometries.
		 * 
		 * Credits to original author jdomingu (https://github.com/jdomingu/ThreeGeoJSON)
		 * This is simply an improved and modularized adaptation of their work
		 *
		 * @param json - geojson object
		*/
		drawThreeGeo: function(json, radius, shape, options)
		{
    		var json_geom = this.createGeometryArray(json); 
		    //An array to hold the feature geometries.
		    var convertCoordinates = this.getConversionFunctionName(shape); 
		    //Whether you want to convert to spherical or planar coordinates.
		    var coordinate_array = []; 
		    //Re-usable array to hold coordinate values. This is necessary so that you can add 
		    //interpolated coordinates. Otherwise, lines go through the sphere instead of wrapping around.
		    
		    for (var geom_num = 0; geom_num < json_geom.length; geom_num++) {
		                
		        if (json_geom[geom_num].type == 'Point') {
		            convertCoordinates(json_geom[geom_num].coordinates, radius);            
		            this.drawParticle(this.y_values[0], this.z_values[0], this.x_values[0], options);
		            
		        } else if (json_geom[geom_num].type == 'MultiPoint') {
		            for (var point_num = 0; point_num < json_geom[geom_num].coordinates.length; point_num++) {
		                convertCoordinates(json_geom[geom_num].coordinates[point_num], radius);           
		                this.drawParticle(this.y_values[0], this.z_values[0], this.x_values[0], options);                
		            }
		            
		        } else if (json_geom[geom_num].type == 'LineString') {            
		            coordinate_array = this.createCoordinateArray(json_geom[geom_num].coordinates);
		            
		            for (var point_num = 0; point_num < coordinate_array.length; point_num++) {
		                convertCoordinates(coordinate_array[point_num], radius); 
		            }             
		            this.drawLine(this.y_values, this.z_values, this.x_values, options);
		            
		        } else if (json_geom[geom_num].type == 'Polygon') {                        
		            for (var segment_num = 0; segment_num < json_geom[geom_num].coordinates.length; segment_num++) {
		                coordinate_array = this.createCoordinateArray(json_geom[geom_num].coordinates[segment_num]);           
		                
		                for (var point_num = 0; point_num < coordinate_array.length; point_num++) {
		                    convertCoordinates(coordinate_array[point_num], radius); 
		                }
		                this.drawLine(this.y_values, this.z_values, this.x_values, options);
		            }                            
		            
		        } else if (json_geom[geom_num].type == 'MultiLineString') {
		            for (var segment_num = 0; segment_num < json_geom[geom_num].coordinates.length; segment_num++) {
		                coordinate_array = this.createCoordinateArray(json_geom[geom_num].coordinates[segment_num]);           
		                
		                for (var point_num = 0; point_num < coordinate_array.length; point_num++) {
		                    convertCoordinates(coordinate_array[point_num], radius); 
		                }
		                this.drawLine(this.y_values, this.z_values, this.x_values, options);
		            }             
		            
		        } else if (json_geom[geom_num].type == 'MultiPolygon') {
		            for (var polygon_num = 0; polygon_num < json_geom[geom_num].coordinates.length; polygon_num++) {
		                for (var segment_num = 0; segment_num < json_geom[geom_num].coordinates[polygon_num].length; segment_num++) {
		                    coordinate_array = this.createCoordinateArray(json_geom[geom_num].coordinates[polygon_num][segment_num]);           
		                    
		                    for (var point_num = 0; point_num < coordinate_array.length; point_num++) {
		                        convertCoordinates(coordinate_array[point_num], radius); 
		                    }
		                    this.drawLine(this.y_values, this.z_values, this.x_values, options);
		                }
		            }
		        } else {
		            throw new Error('The geoJSON is not valid.');
		        }        
		    }

		    return this.threegeo; 
		},       

		createGeometryArray: function(json)
		{
		    var geometry_array = [];
		    
		    if (json.type == 'Feature') {
		        geometry_array.push(json.geometry);        
		    } else if (json.type == 'FeatureCollection') {
		        for (var feature_num = 0; feature_num < json.features.length; feature_num++) { 
		            geometry_array.push(json.features[feature_num].geometry);            
		        }
		    } else if (json.type == 'GeometryCollection') {
		        for (var geom_num = 0; geom_num < json.geometries.length; geom_num++) { 
		            geometry_array.push(json.geometries[geom_num]);
		        }
		    } else {
		        throw new Error('The geoJSON is not valid.');
		    }    
		    //alert(geometry_array.length);
		    return geometry_array;
		},

		getConversionFunctionName: function(shape)
		{
		    var conversionFunctionName;
		    
		    if (shape == 'sphere') {
		        conversionFunctionName = this.convertToSphereCoords;
		    } else if (shape == 'plane') {
		        conversionFunctionName = this.convertToPlaneCoords;
		    } else {
		        throw new Error('The shape that you specified is not valid.');
		    }
		    return conversionFunctionName;
		},

		createCoordinateArray: function(feature)
		{
		    //Loop through the coordinates and figure out if the points need interpolation.
		    var temp_array = [];
		    var interpolation_array = [];
		    
		        for (var point_num = 0; point_num < feature.length; point_num++) {
		            var point1 = feature[point_num];
		            var point2 = feature[point_num - 1];
		            
		            if (point_num > 0) {                               
		                if (this.needsInterpolation(point2, point1)) {                    
		                    interpolation_array = [point2, point1];
		                    interpolation_array = this.interpolatePoints(interpolation_array);
		                    
		                    for (var inter_point_num = 0; inter_point_num < interpolation_array.length; inter_point_num++) {
		                        temp_array.push(interpolation_array[inter_point_num]);
		                    }                    
		                } else {
		                    temp_array.push(point1); 
		                } 
		            } else {
		                temp_array.push(point1);
		            } 
		        }
		    return temp_array;
		},

		needsInterpolation: function(point2, point1)
		{
		    //If the distance between two latitude and longitude values is 
		    //greater than five degrees, return true.
		    var lon1 = point1[0];
		    var lat1 = point1[1];
		    var lon2 = point2[0];
		    var lat2 = point2[1];
		    var lon_distance = Math.abs(lon1 - lon2);
		    var lat_distance = Math.abs(lat1 - lat2);
		    
		    if (lon_distance > 5 || lat_distance > 5) {
		        return true;
		    } else {
		        return false;
		    }
		},

		interpolatePoints: function(interpolation_array)
		{
		    //This function is recursive. It will continue to add midpoints to the 
		    //interpolation array until needsInterpolation() returns false.
		    var temp_array = [];
		    var point1, point2;
		    
		    for (var point_num = 0; point_num < interpolation_array.length-1; point_num++) {
		        point1 = interpolation_array[point_num];
		        point2 = interpolation_array[point_num + 1];
		        
		        if (this.needsInterpolation(point2, point1)) {
		            temp_array.push(point1);
		            temp_array.push(this.getMidpoint(point1, point2));          
		        } else {
		            temp_array.push(point1);
		        }
		    }
		    
		    temp_array.push(interpolation_array[interpolation_array.length-1]);
		    
		    if (temp_array.length > interpolation_array.length) { 
		        temp_array = this.interpolatePoints(temp_array);
		    } else { 
		        return temp_array;
		    }
		    return temp_array;    
		},

		getMidpoint: function(point1, point2)
		{    
		    var midpoint_lon = (point1[0] + point2[0]) / 2;
		    var midpoint_lat = (point1[1] + point2[1]) / 2;
		    var midpoint = [midpoint_lon, midpoint_lat]; 
		    
		    return midpoint;
		},

		convertToSphereCoords: function(coordinates_array, sphere_radius)
		{
		    var lon = coordinates_array[0];
		    var lat = coordinates_array[1];

		    geo.x_values.push(Math.cos(lat * Math.PI/180) * Math.cos(lon * Math.PI/180) * sphere_radius);
		    geo.y_values.push(Math.cos(lat * Math.PI/180) * Math.sin(lon * Math.PI/180) * sphere_radius);
		    geo.z_values.push(Math.sin(lat * Math.PI/180) * sphere_radius);    
		},

		convertToPlaneCoords: function(coordinates_array, radius)
		{
		    var lon = coordinates_array[0];
		    var lat = coordinates_array[1];
		        
		    geo.z_values.push((lat/180) * radius);
		    geo.y_values.push((lon/180) * radius);    
		},

		drawParticle: function(x, y, z, options)
		{
		    var particle_geom = new THREE.Geometry();
		    particle_geom.vertices.push(new THREE.Vector3(x, y, z));
		    
		    var particle_material = new THREE.ParticleSystemMaterial(options);
		    
		    var particle = new THREE.ParticleSystem(particle_geom, particle_material);
		    this.clearArrays();

		    this.threegeo.push(particle);  
		},

		drawLine: function(x_values, y_values, z_values, options)
		{
		    var line_geom = new THREE.Geometry();
		    this.createVertexForEachPoint(line_geom, x_values, y_values, z_values);
		                
		    var line_material = new THREE.LineBasicMaterial(options);
		    var line = new THREE.Line(line_geom, line_material);
		    
		    this.clearArrays();
		    this.threegeo.push(line);
		},

		createVertexForEachPoint: function(object_geometry, values_axis1, values_axis2, values_axis3)
		{
		    for (var i = 0; i < values_axis1.length; i++) {
		        object_geometry.vertices.push(new THREE.Vector3(values_axis1[i],
		                values_axis2[i], values_axis3[i]));
		    }
		},

		clearArrays: function()
		{
		    this.x_values.length = 0;
		    this.y_values.length = 0;
		    this.z_values.length = 0;    
		}
	};

	return geo;
});
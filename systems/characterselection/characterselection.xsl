<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet>
	<xsl:template match="/">
	<div id="character_selection">
		<xsl:for-each select="selectionWindows/selectionWindow">
		<div class="character_selection_row">
			<xsl:for-each select="player">
			<div>
				<xsl:attribute name="class">character_container</xsl:attribute>
				<xsl:attribute name="style">border: 5px solid <xsl:value-of select="characterColourScheme"/>;</xsl:attribute>
				<button>
					<xsl:attribute name="class">char_select ui-state-default ui-corner-all</xsl:attribute>
					<xsl:attribute name="value"><xsl:value-of select="@identifierReference"/></xsl:attribute>
					<span class="ui-icon ui-icon-closethick"></span>Choose this character
				</button>
				<div>
					<xsl:attribute name="style">border: 1px solid <xsl:value-of select="characterColourScheme"/>; position: relative; margin: 8px;</xsl:attribute>
				<img>
					<xsl:attribute name="src">multimedia/default-contentpack/images/characters/(<xsl:value-of select="identifierCamelCase"/>)_DefaultPose.png</xsl:attribute> 
				</img>
				<h5 class="character_name_attribute">
					<span>
					<xsl:attribute name="style">color: <xsl:value-of select="characterColourScheme"/>;</xsl:attribute>
					Name: </span><span><xsl:value-of select="name"/></span>
				</h5>
				<h5 class="character_occupation_attribute">
					<span>
					<xsl:attribute name="style">color: black; background-color: yellow; border: 1px solid white; padding: 2px; margin: 0; border-top-left-radius: 25px; border-bottom-left-radius: 25px;</xsl:attribute>
					Occupation: </span><span style="padding: 2px; margin: 0; background-color: black; border: 1px solid white; border-top-right-radius: 25px; border-bottom-right-radius: 25px;">
						<img>
							<xsl:attribute name="src">multimedia/default-contentpack/images/characters/(<xsl:value-of select="@identifierReference"/>)_mini.png</xsl:attribute>
						</img>
						<xsl:value-of select="occupation"/>
					</span>
				</h5>
				<div class="character_about_attribute">
					<div class="horizontal_paperline">Extra info here later</div>
					<div class="portrait_paperlines">
					<span>
					<xsl:attribute name="style">color: seagreen; padding: 0; margin: 0; border-radius: 5px; background-color: limegreen;</xsl:attribute>
					About: </span> 
					<span style="color: black;">
						<xsl:value-of select="about"/>
					</span>
					</div>
				</div>
				</div>
			</div>
		</div>
		</xsl:for-each>
	</div>
	</xsl:template>
</xsl:stylesheet>
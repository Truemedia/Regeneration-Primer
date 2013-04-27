<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<!-- Debugging panels (implemented as jQueryUI Tabs) -->
		<div id="debug_panels">
			<ul>
				<li><a href="#panel-1">Score</a></li>
				<li><a href="#panel-2">Mouse</a></li>
			</ul>
			<div id="panel-1">
				<div id="score_debug_panel">
					<button>
						<xsl:attribute name="id">self_incrementer</xsl:attribute>
						<xsl:attribute name="class">score_submit ui-state-default ui-corner-all</xsl:attribute>
						<xsl:attribute name="value">1</xsl:attribute>
						<span class="ui-icon ui-icon-plusthick"></span> Give yourself 10 points
					</button>
					<button>
						<xsl:attribute name="id">points_incrementer</xsl:attribute>
						<xsl:attribute name="class">ui-state-default ui-corner-all</xsl:attribute>
						<span class="ui-icon ui-icon-plusthick"></span> Give everyone 10 points
					</button>
				</div>
			</div>
			<div id="panel-2">
				<div id="mouse_debug_panel">
					<dl>
						<dt id="mouse_x_label">Mouse X Position:</dt>
						<dd id="mouse_x_coords">Hover over canvas to see this change</dd>
						<dt id="mouse_y_label">Mouse Y Position:</dt>
						<dd id="mouse_y_coords">Hover over canvas to see this change</dd>
					</dl>
					<span id="mouse_clipboard_label">Mouse coords clipboard (Press Z to save current mouse coords)</span>
					<span id="saved_mouse_coords"></span>
				</div>
			</div>
		</div>
		<!-- /Debugging panels -->
	</xsl:template>
</xsl:stylesheet>
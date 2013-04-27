<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<div>
			<!-- Stats -->
			<span id="my_points">
				<span style="font-weight: bold; font-size: 1em; padding-left: 5px;">Points: </span><span id="my_score"></span>
			</span>
			<!-- /Stats -->
			
			<!-- Main buttons -->
			<button id="debug_toggle" title="Click to show or hide debugging tools (Developers only)" class="ui-state-default ui-corner-all">
				<span class="ui-icon ui-icon-wrench"></span>
			</button> <label for="debug_toggle" class="toggle_text">Enable/Disable Debugging</label>
			<button id="audio_toggle" title="Click to mute or unmute the background music" class="ui-state-default ui-corner-all">
				<span class="ui-icon ui-icon-volume-off"></span>
			</button> <label for="audio_toggle" class="toggle_text">Mute/unmute background music</label>
			<button id="controls_tooltip" title="Hover to view controls" class="ui-state-default ui-corner-all">
				<span class="ui-icon ui-icon-help"></span>
			</button> <label for="controls_tooltip" class="toggle_text">Controls</label>
			<!-- /Main buttons -->
			<button id="header_toggle" title="Click to hide or show the header" class="ui-state-default ui-corner-all">
				<span class="ui-icon ui-icon-arrowthickstop-1-n"></span>
			</button> <label for="header_toggle" class="toggle_text">Hide header</label>
		</div>
	</xsl:template>
</xsl:stylesheet>
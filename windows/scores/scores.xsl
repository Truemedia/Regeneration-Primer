<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<xsl:for-each select="scores/player">
			<div class="score_container">
				<input>
					<xsl:attribute name="class">player_object</xsl:attribute>
					<xsl:attribute name="type">hidden</xsl:attribute>
					<xsl:attribute name="value"><xsl:value-of select="@identifierReference"/></xsl:attribute>
				</input>
				<dl class="player_info">
					<dt class="player_overview">
						<span class="player_maininfo player_number">Player <xsl:value-of select="@playerNumber"/></span>
						<span class="player_maininfo player_name"><xsl:value-of select="nameAndOccupation"/></span>
					</dt>
					<dd class="player_score">
						<div style="display: inline-block;">
							<!-- Player icon and colored score -->
							<img>
								<xsl:attribute name="style">padding: 0; margin: 0;</xsl:attribute>
								<xsl:attribute name="src">multimedia/default-contentpack/images/characters/(<xsl:value-of select="@identifierReference"/>)_mini.png</xsl:attribute>
							</img><!--
							--><span>
								<xsl:attribute name="id"><xsl:value-of select="@identifierReference"/>_score_color</xsl:attribute>
								<xsl:attribute name="class">score <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
								500
							</span>
						</div>
						<button>
							<xsl:attribute name="id"><xsl:value-of select="@identifierReference"/>_score_submit</xsl:attribute> 
							<xsl:attribute name="class">score_submit ui-state-default ui-corner-all <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
							<xsl:attribute name="value"><xsl:value-of select="@playerNumber"/></xsl:attribute>
							<span class="ui-icon ui-icon-plusthick"></span> 10 points
						</button>
					</dd>
				</dl>
			</div>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
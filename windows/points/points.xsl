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
							<span data-bind="with: score">
								<!-- Player icon and colored score -->
								<img>
									<xsl:attribute name="style">padding: 0; margin: 0;</xsl:attribute>
									<xsl:attribute name="src">multimedia/default-contentpack/images/characters/(<xsl:value-of select="@identifierReference"/>)_mini.png</xsl:attribute>
								</img>
								<span>
									<xsl:attribute name="data-bind">text: sp</xsl:attribute>
									<xsl:attribute name="id"><xsl:value-of select="@identifierReference"/>_score_color</xsl:attribute>
									<xsl:attribute name="class">score <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
								</span>
							</div>
							<span data-bind="with: health">
							<div class='player_health' data-bind='progress: hp'></div>
							<div class='player_health_stats'>
								HP: (<span class='player_health_unit' data-bind='text: hp'></span>/100)
							</div>
							</div>
						</div>
						<div class="score_debug_buttons">
							<span data-bind="with: score">
								<button>
									<xsl:attribute name="data-bind">click: decrementScore</xsl:attribute>
									<xsl:attribute name="class">score_debug_button score_submit ui-state-default ui-corner-all <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
									<xsl:attribute name="value"><xsl:value-of select="@playerNumber"/></xsl:attribute>
									<span class="ui-icon ui-icon-minusthick"></span> 10 points
								</button>
								<button>
									<xsl:attribute name="data-bind">click: incrementScore</xsl:attribute>
									<xsl:attribute name="class">score_debug_button score_submit ui-state-default ui-corner-all <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
									<xsl:attribute name="value"><xsl:value-of select="@playerNumber"/></xsl:attribute>
									<span class="ui-icon ui-icon-plusthick"></span> 10 points
								</button>
								<!-- Used to make sure data is fed to #my_score -->
								<div data-bind="singleton: sp"></div>
							</span>
							<span data-bind="with: health">
							<button> 
								<xsl:attribute name="class">health_reduce score_debug_button ui-state-default ui-corner-all <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
								<xsl:attribute name="value"><xsl:value-of select="@playerNumber"/></xsl:attribute>
								<xsl:attribute name="data-bind">click: decrementHealth</xsl:attribute>
								<span class="ui-icon ui-icon-minusthick"></span> 4 HP
							</button>
							<button> 
								<xsl:attribute name="class">health_reduce score_debug_button ui-state-default ui-corner-all <xsl:value-of select="@identifierReference"/>-colorscheme</xsl:attribute>
								<xsl:attribute name="value"><xsl:value-of select="@playerNumber"/></xsl:attribute>
								<xsl:attribute name="data-bind">click: incrementHealth</xsl:attribute>
								<span class="ui-icon ui-icon-plusthick"></span> 4 HP
							</button>
							</span>
						</div>
					</dd>
				</dl>
			</div>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
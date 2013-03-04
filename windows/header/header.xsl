<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<xsl:for-each select="gameInfo">
		<h3 id="welcome_notice">
			Welcome to a demo of <span id="game_name"><xsl:for-each select="gameName"><xsl:value-of select="."/></xsl:for-each></span>
			 - 
			<span id="regen_primer_version">(<xsl:for-each select="version"><xsl:value-of select="."/></xsl:for-each>)</span>
		</h3>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
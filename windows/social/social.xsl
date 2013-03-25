<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<a>
			<xsl:attribute name="href">
				https://github.com/<xsl:value-of select="Username"/>/<xsl:value-of select="Reponame"/>
			</xsl:attribute>
			<img>
				<xsl:attribute name="style">
					position: absolute; z-index: 5; top: 0; <xsl:value-of select="Placeto"/>: 0; border: 0; background-color: #<xsl :value-of select="Bgcolorhex" /> 
				</xsl:attribute>
				<xsl:attribute name="src">
					https://s3.amazonaws.com/github/ribbons/forkme_<xsl:value-of select="Placeto" />_<xsl:value-of select="Ribboncolorname" />_<xsl:value-of select="Ribboncolorhex" />.png 
				</xsl:attribute>
				<xsl:attribute name="alt">
					Fork me on GitHub
				</xsl:attribute>
			</img>
		</a>
		<a id="youtube_icon">
			<xsl:attribute name="style">position: absolute; z-index: 4; top: 96px; <xsl:value-of select="Placeto"/>: 45px; border: 0;</xsl:attribute>
			<xsl:attribute name="href">http://youtube.com/<xsl:value-of select="Youtube" /></xsl:attribute>
			<span style="color: white; margin-right: 2px;">You</span>
			<div id="youtube_oval"><span style="color: black;">Tube</span></div>
		</a>
	</xsl:template>
</xsl:stylesheet>
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<div id="poweredby">
			<dl>
			<dt><h3 class="footer_title">Powered by:</h3></dt>
				<dd>
					<ul class="csv">
						<xsl:for-each select="poweredbys/poweredby">
						<li class="core_dependency">
							<h4><xsl:value-of select="@coreDependency"/></h4>
						</li>
						</xsl:for-each>
					</ul>
				</dd>
			</dl>
		</div>
	</xsl:template>
</xsl:stylesheet>
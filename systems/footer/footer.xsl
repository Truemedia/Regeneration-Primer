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
							<h4>
								<a>
								<xsl:attribute name="href"><xsl:value-of select="@website"/></xsl:attribute>
								<xsl:value-of select="@coreDependency"/>
								</a>
							</h4>
							<xsl:for-each select="dependencyPlugins/dependencyPlugin">
							<h5>
								<a>
								<xsl:attribute name="href"><xsl:value-of select="@website"/></xsl:attribute>
								+ <xsl:value-of select="."/>
								</a>
							</h5>
							</xsl:for-each>
						</li>
						</xsl:for-each>
					</ul>
				</dd>
			</dl>
		</div>
		<div id="shortcredits">
			<span>Concept, Design, Development, Graphics, and Soundtrack by <a href="http://github.com/Truemedia">Wade Penistone (Truemedia)</a></span><br />
			<span>Sound effects provided by <a href="http://freesound.org">FreeSound</a></span>
		</div>
	</xsl:template>
</xsl:stylesheet>
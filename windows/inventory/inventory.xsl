<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<div id="inventory_container">
			<xsl:for-each select="inventories">
			<ul class="inventory">
				<xsl:for-each select="inventory/item">
				<li class="inventory_item">
					<h5 class="item_name"><xsl:value-of select="@name"/> (<xsl:value-of select="@type"/>)</h5>
					<xsl:for-each select="subitem">
					<dl class="subitem">
						<dt class="subitem_attribute"><xsl:value-of select="/"/>:</dt>
						<dd class="subitem_value"><xsl:value-of select="@amount"/></dd>
					</dl>
					</xsl:for-each>
					<a href="player_one" class="item_action">Equip</a>
					<a href="#" class="item_action">Discard</a>
					<a href="#" class="item_action">Give to a player</a>
				</li>
				</xsl:for-each>
			</ul>
			</xsl:for-each>
		</div>
	</xsl:template>
</xsl:stylesheet>
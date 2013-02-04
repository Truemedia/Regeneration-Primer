<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
		<div id="inventory_container">
			<xsl:for-each select="inventories">
			<ul class="inventory">
				<xsl:for-each select="inventory/item">
				<li class="inventory_item">
					<h4 class="item_name"><xsl:value-of select="@name"/> (<xsl:value-of select="@type"/>)</h4>
					<div class="item_sprite">
  						<xsl:attribute name="style">background:url("images/items/Guns/<xsl:value-of select="@name"/>.png") 0 0;</xsl:attribute>
					</div>
					<xsl:for-each select="subitem">
					<dl class="subitem">
						<dt class="subitem_attribute"><xsl:value-of select="."/>:</dt>
						<dd class="subitem_value"><xsl:value-of select="@amount"/></dd>
					</dl>
					<ul class="actual_bullet_list">
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
						<li><img src="images/items/Guns/Bullet.png" /></li>
					</ul>
					</xsl:for-each>
					<a href="player_one" class="item_action">Equip</a>
					<a href="#" class="item_action">Discard</a>
					<a href="#" class="item_action">Give to a player</a>
					<a href="#" class="item_tooltip">?</a>
				</li>
				</xsl:for-each>
			</ul>
			</xsl:for-each>
		</div>
	</xsl:template>
</xsl:stylesheet>
<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template match="/">
	<xsl:for-each select="gameInfo">
	<div class="navbar navbar-fixed-top">
   <div class="navbar-inner">
     <div class="container">
       <a data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar">
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
         <span class="icon-bar"></span>
       </a>
       <a class="brand" href="#gameinfo_window" data-toggle="modal"><span><xsl:for-each select="gameName"><xsl:value-of select="."/></xsl:for-each></span></a>
       <div id="main-menu" class="nav-collapse collapse">
        <ul id="main-menu-left" class="nav">
          <li><a href="#about_window" data-toggle="modal">About</a></li>
          <li><a href="#mainmenu_window" data-toggle="modal">Main menu</a></li>
          <li id="preview-menu" class="dropdown">
            <a href="#" data-toggle="dropdown" class="dropdown-toggle">Options <b class="caret"></b></a>
            <ul class="dropdown-menu">
            	<!-- Main buttons -->
              <li>
              	<a href="#" id="debug_toggle" title="Click to show or hide debugging tools (Developers only)">
					<i class="icon-wrench icon-white"></i> Enable/Disable Debugging
				</a>
              </li>
              <li>
              	<a href="#" id="audio_toggle" title="Click to mute or unmute the background music">
					<i class="icon-volume-off icon-white"></i> Mute/unmute background music
				</a>
              </li>
              <li>
              	<a href="#" id="header_toggle" title="Click to hide or show the header">
					<i class="icon-circle-arrow-up icon-white"></i> Hide header
				</a>
			</li>
			<!-- /Main buttons -->
              <li class="divider"></li>
              <li>
              	<a href="#" id="controls_tooltip" title="Hover to view controls">
					<i class="icon-question-sign icon-white"></i> Controls
				</a>
			</li>
              <li>
              	<a href="#theme_window" data-toggle="modal"><i class="icon-eye-open icon-white"></i> Theme</a>
              </li>
            </ul>
            
          </li>
        </ul>
        <ul id="main-menu-right" class="nav pull-right">
          <li><a href="https://github.com/Truemedia/Regeneration-Primer" target="_blank">Github <i class="icon-share-alt"></i></a></li>
          <li><a href="http://www.youtube.com/user/MCOMediaCityOnline" target="_blank">Youtube <i class="icon-share-alt"></i></a></li>
        </ul>
       </div>
     </div>
   </div>
 </div>
 		<h2 id="welcome_notice">
			Welcome to a demo of 
			<span id="regen_primer_version">()</span>
		</h2>
		<div class="devhint" style="color: beige; text-align: center;">
			<span style="color: blue; font-weight: bold;">Developer Hint:</span>
			 Change the name of the game by editing 
			<span style="color: brown">config.json</span> 
			 from your games root directory
		</div>
	</xsl:template>
</xsl:stylesheet>
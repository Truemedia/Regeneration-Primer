<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet>
	<xsl:template name="for.loop">  
	<!-- for loop templates starts here-->  
  
  		<!-- for loop index variable-->  
 		<xsl:param name="i" />  
  
  		<!-- for loop end variable-->  
  		<xsl:param name="count" />  
  
  		<!--begin_: Line_by_Line_Output -->  
  		<xsl:if test="$i <= $count">  
    		<!-- This $i variable gives the increment value -->  
    		<xsl:value-of select="$i"/>  
  		</xsl:if>  
  
  		<!--begin_: RepeatTheLoopUntilFinished-->  
  		<xsl:if test="$i <= $count">  
    		<xsl:call-template name="for.loop">  
      		<xsl:with-param name="i">  
        		<xsl:value-of select="$i + 1"/>  
      		</xsl:with-param>  
      		<xsl:with-param name="count">  
        		<xsl:value-of select="$count"/>  
      		</xsl:with-param>  
    		</xsl:call-template>  
  		</xsl:if>  
	</xsl:template>
</xsl:stylesheet>
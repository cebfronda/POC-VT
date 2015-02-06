<!DOCTYPE html>
<html>
  <head>
  <title>Video Timing POC</title>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <meta content="utf-8" http-equiv="encoding">
  <link type="text/css" rel="stylesheet" href="css/videotiming.css">
  </head>

  <body> 
    <div style = "position:fixed; z-index: 1999999999; background-color: white; width:100%;min-height:110px;">
        <div style = "float:left; width: 800px; height:110px;min-height: 110px;max-height:110px;" >
            <form action="crawl2.php" method="post" id="search_form" class="clearfix">
                 <input type="text" size="40" maxlength="150" name="url" placeholder="Enter URL" id="search_text" />
                 <input type="submit" value="Go" id="search_button" />
            </form>
            <div style = "clear:both">&nbsp;</div>
        </div>
        <div id = "container-stats" style = "float:right; width: 300px; height:70px;min-height: 70px;max-height:70px;margin-right: 10px; padding: 10px; border: solid 3px #fff; background-color: #00FF40; margin-top: 8px;" >
            <B>STATS</B>
            <div id = "stats-container">
            </div>
            <div style = "clear:both">&nbsp;</div>
        </div>
        <div class = "hr-border" style = "top:110px;">&nbsp;</div>
    </div>
    <div id="url-content" style = "position:relative;top:110px;">      
    </div>


  </body>
</html>

<!DOCTYPE html>
<html>
  <head>
  <title>Video Timing POC</title>
  <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
  <meta content="utf-8" http-equiv="encoding">
  <link type="text/css" rel="stylesheet" href="css/videotiming.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script>
  $(document).ready(function(){
    $("#search_button").click(function(){
      var value = $("#search_text").val();
      var crawl = 'crawl.php';
      url ={'url':value}
      $.post(crawl,url, function(response,status,xhr){
            $("#url-content").html(response); 
      });
        $("#container-stats").show();
        $("#masthead-positioner").css('top', "110px");
        setTimeout(getStats("movie_player"), 10000);
    });
      
    $("#url-content").change(function(){
        $("#container-stats").show();
        $("#masthead-positioner").css('top', "110px");
        setTimeout(getStats("movie_player"), 10000);
    });
    $("#container-stats").hide();
  });  
      
      
    function getCoordinates(elementid){
        var element = document.getElementById(elementid);
        console.log(elementid);
        console.log(element);
        if(element != null){
            var attr = element.getBoundingClientRect();
            return attr;
        }else{
            return "Error";
        }

    }
      
    function getStats(el){
        var attr = getCoordinates(el);
        console.log(attr);
        if(attr == "Error"){
            stats = "Loading Error Youtube video";
        }else{
            stats = "Video Size : "+attr.width+"px x "+attr.height+"px<br>";
            stats += "Coordinates(x,y) : "+attr.x+" , "+attr.y+"<br>";
            stats += "Visibility : ";
        }
        $("#stats-container").html(stats);
    }
      
  </script>
  
  </head>

  <body> 
    <div style = "position:fixed; z-index: 1999999999; background-color: white; width:100%;min-height:110px;">
        <div style = "float:left; width: 800px; height:110px;min-height: 110px;max-height:110px;" >
            <form action="" method="post" id="search_form" class="clearfix">
                 <input type="text" size="40" maxlength="150" name="search_text" placeholder="Enter URL" id="search_text" />
                 <input type="button" name="search" value="Go" id="search_button" />
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

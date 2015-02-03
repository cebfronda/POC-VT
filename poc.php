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
	console.log($("#masthead-positioner").css('top', "120px")); 
      });    
    });
    
  });  
  </script>
  
  </head>

  <body> 
    <form action="" method="post" id="search_form" class="clearfix">
	     <input type="text" size="40" maxlength="150" name="search_text" placeholder="Enter URL" id="search_text" />
	     <input type="button" name="search" value="Go" id="search_button" />
    </form>
    <div class = "hr-border">&nbsp;</div>
    <div id="url-content" style = "position:fixed;">      
    </div>


  </body>
</html>

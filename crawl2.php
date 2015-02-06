<script type = "text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<?php 
	include('functions.php');
	$url = "https://www.youtube.com/watch?v=51FtenRFYos";
	echo $url = $_POST['url'];
	$content = crawl($url);
	if($content['content'] > 0){
		echo "Error Loading $url";
	}else{
		echo $content['content'];
	}
?>
<script type = "text/javascript">
    $(document).ready(function(){
        $("#container-stats").show();
        setTimeout(getStats("movie_player"), 10000);
        //getStats("movie_player");
        $(window).scroll(function(){
            getStats("movie_player");
        });
    });
    
    function getCoordinates(elementid){
        var element = document.getElementById(elementid);
        if(element != null){
            var attr = element.getBoundingClientRect();
            return attr;
        }else{
            return "Error";
        }

    }
      
    function getStats(el){
        var attr = getCoordinates(el);
        if(attr == "Error"){
            stats = "Loading Error Youtube video";
        }else{
            stats = "Video Size : "+attr.width+"px x "+attr.height+"px<br>";
            stats += "Coordinates(x,y) : "+attr.top+" , "+attr.bottom+"<br>";
            var visibility = getVisibility(el);
            stats += "Visibility : "+visibility+"%";
        }
        $("#stats-container").html(stats);
    }
    
    function getVisibility(elem){
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $("#"+elem).offset().top;
        var elemBottom = elemTop + $("#"+elem).height();
        if(elemTop >= docViewTop && elemBottom <= docViewBottom){
            return 100;
        }else if((elemBottom <  docViewTop)){
            return 0;
        }else{
            var viewportHeight = $(window).height(),
            scrollTop = $(window).scrollTop(),
            elementOffsetTop = elemTop,
            elementHeight = $("#"+elem).height();
            
            var distance = (scrollTop + viewportHeight) - elementOffsetTop;
            var percentage = distance / ((viewportHeight + elementHeight) / 100);
            percentage = Math.round(percentage);
            return percentage;
        }
        //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function getPercentage(el){
    
    }
</script>
<div id = "container-stats" style = "width: 300px; height: 100px; min-height: 100px; max-height: 100px; margin-right: 10px; padding: 10px; border: 3px solid rgb(255, 255, 255); background-color: #F4FA58; margin-top: 8px;z-index:99999999999999; top: 0; position:fixed; right: 0" >
            <B>STATS</B>
            <div id = "stats-container">
            </div>
            <div style = "clear:both">&nbsp;</div>
        </div>

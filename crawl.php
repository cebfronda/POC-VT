<script type = "text/javascript">
    $(document).ready(function(){
        $("#container-stats").show();
        $("#masthead-positioner").css('top', "110px");
        setTimeout(getStats("movie_player"), 10000);
        //getStats("movie_player");
        
    });
</script>
<?php 
	include('functions.php');
	$url = "https://www.youtube.com/watch?v=51FtenRFYos";
	$url = $_POST['url'];
	$content = crawl($url);
	
	if($content['content'] > 0){
		echo "Error Loading $url";
	}else{
		echo $content['content'];
	}
?>

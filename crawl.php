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

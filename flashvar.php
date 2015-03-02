<?php 
    function dump($data){
        echo "<pre>";
        print_r($data);
        echo "<pre>";
    }
    $element = 'width="100%" height="100%" name="movie_player" id="movie_player" tabindex="0" type="application/x-shockwave-flash" src="https://s.ytimg.com/yts/swfbin/player-vflMzoht1/watch_as3.swf" allowfullscreen="true" allowscriptaccess="always" bgcolor="#000000" flashvars="cr=PH&amp;fexp=905657%2C907263%2C927622%2C934601%2C9406905%2C9407444%2C943917%2C945067%2C947225%2C947240%2C948124%2C951703%2C952302%2C952605%2C952612%2C952620%2C952901%2C955204%2C955301%2C957201%2C959701&amp;host_language=en-GB&amp;enablejsapi=1&amp;autoplay=0&amp;hl=en_GB&amp;ssl=1&amp;playerapiid=player_uid_468319820_1"';
    
    $attributes = explode(" ", $element);
    dump($attributes);
?>
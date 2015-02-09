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
            stats = "<b>Video Size</b><br>"+attr.width+"px x "+attr.height+"px<br>";
            stats += "<b>Coordinates(x,y)</b><br> "+attr.top+" , "+attr.bottom+"<br>";
            var visibility = getVisibility(el);
            stats += "<b>Visibility </b><br>"+visibility+"%";
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
            console.log($("#"+elem));
            var distance = $("#"+elem).height() - (docViewTop - elemTop );
            var percent = (distance/$("#"+elem).height())*100;
            percentage = percent.toFixed(2);
            return percentage;
        }
        //return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    function getPercentage(el){
    
    }

$(document).ready(function(){
        $("#container-stats").show();
        setTimeout(getStats("movie_player"), 10000);
        //getStats("movie_player");
        $(window).scroll(function(){
            getStats("movie_player");
        });
    });
    

document.write('<div id = "container-stats" style = "width: 300px; height: 100px; min-height: 100px; max-height: 100px; margin-right: 10px; padding: 10px; border: 3px solid rgb(255, 255, 255); background-color: #F4FA58; margin-top: 8px;z-index:99999999999999; top: 0; position:fixed; right: 0" >');
document.write('<B>STATS</B>');
document.write('<div id = "stats-container">');
document.write('</div>');
document.write('<div style = "clear:both">&nbsp;</div>');
document.write('</div>');

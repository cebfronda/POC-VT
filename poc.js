function createElement(){
    var div = document.createElement('div');
    div.id = "stats-container";
    div.style["width"] = "300px";
    div.style["margin-right"] = "10px"; 
    div.style["padding"] = "10px"; 
    div.style["background-color"] = "#F4FA58"; 
    div.style["margin-top"] = "8px";
    div.style["z-index"] = "99999999999999"; 
    div.style["top"] = "0"; 
    div.style["position"] = "fixed"; 
    div.style["right"] = "0";
    
    var youtubeBodyContainer = document.getElementById("body-container");
    youtubeBodyContainer.appendChild(div);
    document.getElementById("stats-container").innerHTML = "<div id = 'page-url-container' style = 'display:none;'></div><div id = 'ad-detection' style = 'text-align:center'>Script Initialize and Loaded</div><div id = 'ad-detection-stat'></div><br>";
}


function updateURL(){
    document.getElementById("page-url-container").innerHTML = window.location.href;
}

function AddMainVideoPlayingStatus() {
    var VideoAdsContainer = document.createElement('div');
    VideoAdsContainer.id = "MainVideoPlayingStatus";
    VideoAdsContainer.style["background-color"] = "blue";
    VideoAdsContainer.style["color"] = "white";
    VideoAdsContainer.style["padding"] = "4px";
    VideoAdsContainer.style["text-align"] = "center";
    VideoAdsContainer.style["font-weight"] = "bold";
    VideoAdsContainer.textContent = "Main Video Playing";
    VideoAdsMainContainer = document.getElementById("stats-container");
    VideoAdsMainContainer.appendChild(VideoAdsContainer);
}

function getStats(){
    var el = "html5-video-container";
    var videosrc = checkVideoContent();
    var onrecord = document.getElementById("page-url-container").innerHTML;
    var playing = window.location.href;
    if(videosrc != ""){
        var div = document.getElementById("stats-container");
        div.style["display"] = "block";
        var VideoAds = AdUnitDetection();
        var VideoAdsDetectionStat;
        var VideoAd = document.getElementById("ad-detection");
        if(VideoAds){
            updateURL();
            VideoAdsDetectionStat = "Video Ads Detected";
            VideoAd.style["background-color"] = "green";
            VideoAd.style["color"] = "white";
            VideoAd.style["padding"] = "4px";
            VideoAd.style["text-align"] = "center";
            VideoAd.style["font-weight"] = "bold";
            
            var VideoAdS = document.getElementById("ad-detection-stat");
            VideoAdS.style["color"] = "black";
            //Ad Video Stats
            var VideoAdStats;
            var VideoAdSAttr = getCoordinates(el);
            console.log(VideoAdSAttr);
            VideoAdStats = "<br><table id = 'video-stat-table-container' style = 'width:95%'>";
            
            // Size
            var w = VideoAdSAttr.width;
            var h = VideoAdSAttr.height;
            VideoAdStats += "<tr><td colspan = 2><center><b>Video Size</b></center></td></tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Width</td>";
            VideoAdStats += "<td><b>"+w.toFixed(2)+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Height</td>";
            VideoAdStats += "<td><b>"+h.toFixed(2)+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr><td colspan = 2>&nbsp;</td></tr>";
            
            //Position
            var t = VideoAdSAttr.top;
            var b = VideoAdSAttr.bottom;
            var l = VideoAdSAttr.left;
            var r = VideoAdSAttr.right;
            VideoAdStats += "<tr><td colspan = 2><center><b>Video Position</b></center></td></tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Top</td>";
            VideoAdStats += "<td><b>"+t.toFixed(2)+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Bottom</td>";
            VideoAdStats += "<td><b>"+b.toFixed(2)+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Left</td>";
            VideoAdStats += "<td><b>"+l.toFixed(2)+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Right</td>";
            VideoAdStats += "<td><b>"+r.toFixed(2)+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr><td colspan = 2>&nbsp;</td></tr>";
            
            //Other Details
            var visibility = getVisibility(el);
            VideoAdStats += "<tr><td colspan = 2><center><b>Other Details</b></center></td></tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Video Duration</td>";
            VideoAdStats += "<td><b>"+getVideoDuration()+"</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Video Autoplay</td>";
            VideoAdStats += "<td><b>"+getVideoAutoPlay()+"</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Visibility</td>";
            VideoAdStats += "<td><b>"+visibility+" %</b></td>";
            VideoAdStats += "</tr>";
            
            var time = getCurrentTime();
            time = time.toFixed(time);
            if(time > 2){ 
                VideoAdStats += "<tr><td colspan = 2>&nbsp;</td></tr>";
                VideoAdStats += "<tr>";
                VideoAdStats += "<td><b>Viewable for 2 seconds</b></td>";
                VideoAdStats += "</tr>";
            }
            
            VideoAdStats += "</table><br>";           
            document.getElementById("ad-detection-stat").innerHTML = VideoAdStats;
            document.getElementById("ad-detection").innerHTML = VideoAdsDetectionStat;
            
            if(visibility > 50){
                viewability(true);
            }else{
                viewability(false);
            }
        }else{
            if(onrecord != playing){
                updateURL();
                var div = document.getElementById("stats-container");
                div.style["background-color"] = "#0099FF";
                div.style["color"] = "black";
                
                VideoAdsDetectionStat = "No Video Ads Detected";
                VideoAd.style["background-color"] = "#0099FF";
                VideoAd.style["color"] = "black";
                VideoAd.style["padding"] = "4px";
                VideoAd.style["text-align"] = "center";
                VideoAd.style["font-weight"] = "bold";
                document.getElementById("ad-detection-stat").innerHTML = "";
                document.getElementById("ad-detection").innerHTML = VideoAdsDetectionStat;
                var element = document.getElementById("MainVideoPlayingStatus");
                if(element != null){
                    element.outerHTML = "";
                    delete element;
                }
            }else if(document.getElementById("ad-detection").innerHTML == "Video Ads Detected"){
                var statusCheck = document.getElementById("MainVideoPlayingStatus");
                if(statusCheck == null){
                    AddMainVideoPlayingStatus();
                }
            }
            
        }
        
    }else{
        var div = document.getElementById("stats-container");
        div.style["display"] = "none";
    }
    
}

function getCoordinates(elementid){
    var element = document.getElementsByClassName(elementid)[0];
    if(element != null){
        var attr = element.getBoundingClientRect();
        return attr;
    }else{
        return "Error";
    }
}
                                                                
function getVisibility(element){
    var docViewTop = window.pageYOffset;
    var docViewBottom = docViewTop + window.screen.availHeight;
    var el = document.getElementsByClassName(element)[0]; 
    var elemTop = el.offsetTop;
    var elemBottom = elemTop + el.offsetHeight;
    if(elemTop >= docViewTop && elemBottom <= docViewBottom){
        return 100;
    }else if((elemBottom <  docViewTop)){
        return 0;
    }else{
        var distance = el.offsetHeight - (docViewTop - elemTop );
        var percent = (distance/el.offsetHeight)*100;
        percentage = percent.toFixed(2);
        return percentage;
    }
}

function checkVideoContent(){
    var vid = document.getElementsByTagName("video")[0].src;
    return vid;
}

function getVideoDuration(){
    var vid = document.getElementsByTagName("video")[0];
    return x(vid.duration);
}

function getVideoAutoPlay(){
    var vid = document.getElementsByTagName("video")[0];
    return vid.autoplay;
}

function x(T, Z, M){
    f=Math.round;h=T/3600;m=h%1*60;s=m%1*60;
    r = "";
    if(f(h) < 10){
        r = "0"+f(h);
    }
    r += ":"
    if(f(~~m)<10){
        r += "0"+f(~~m);
    }else{
        r += f(~~m);
    }
    r += ":"
    if(f(s)<10){
         r += "0"+f(s);
    }else{
         r += f(s)
    }
    return r;
}

function AdUnitDetection(){
    var adsContainer = document.getElementsByClassName("videoAdUi")[0];
    if(adsContainer == undefined || adsContainer == null){
        return false;
    }else{
        return true;
    }
}

function viewability(viewable){
    var div = document.getElementById("stats-container");
    if(viewable == true){
        div.style["background-color"] = "#32CD32";
        div.style["color"] = "white"; 
    }else{
        div.style["background-color"] = "#FFCC33";
        div.style["color"] = "white";
    
    }
}

function startPOC(){
    var statContainer = document.getElementById("stats-container");
    if(statContainer == null){
        createElement();
    }
    getStats();
    
}

function getCurrentTime(){
  var vid = document.getElementsByTagName("video")[0];
  return vid.currentTime;
}

startPOC();

var video = document.getElementsByTagName("video")[0];
/*

for (i = 0; i < videos.length; i++) {
videos = document.getElementsByClassName("yt-lockup-dismissable");
    videos[i].addEventListener("click", getStats);
}*/
video.addEventListener("timeupdate", startPOC);
window.addEventListener("scroll", startPOC)                                                                        
//video.addEventListener("loadstart", getStats);

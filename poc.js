function createElement(){
    var div = document.createElement('div');
    div.id = "stats-container";
    div.style["width"] = "300px";
    div.style["margin-right"] = "10px"; 
    div.style["padding"] = "10px"; 
    div.style["border"] = "3px solid rgb(255, 255, 255)"; 
    div.style["background-color"] = "#F4FA58"; 
    div.style["margin-top"] = "8px";
    div.style["z-index"] = "99999999999999"; 
    div.style["top"] = "0"; 
    div.style["position"] = "fixed"; 
    div.style["right"] = "0";
    
    var youtubeBodyContainer = document.getElementById("body-container");
    youtubeBodyContainer.appendChild(div);
    document.getElementById("stats-container").innerHTML = "<div id = 'ad-detection'></div><div id = 'ad-detection-stat'></div><br>";
}

function getStats(){
    var el = "html5-video-container";
    var videosrc = checkVideoContent();
    if(videosrc != ""){
        var VideoAds = AdUnitDetection();
        var VideoAdsDetectionStat;
        var VideoAd = document.getElementById("ad-detection");
        if(VideoAds){
            VideoAdsDetectionStat = "Video Ads Detected";
            VideoAd.style["background-color"] = "green";
            VideoAd.style["color"] = "white";
            VideoAd.style["padding"] = "4px";
            VideoAd.style["text-align"] = "center";
            VideoAd.style["font-weight"] = "bold";
            
            var VideoAdS = document.getElementById("ad-detection-stat");
            VideoAdS.style["color"] = "green";
            //Ad Video Stats
            var VideoAdStats;
            var VideoAdSAttr = getCoordinates(el);
            console.log(VideoAdSAttr);
            VideoAdStats = "<br><table style = 'width:95%'>";
            
            // Size
            VideoAdStats += "<tr><td colspan = 2><center><b>Video Size</b></center></td></tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Width</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.width+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Height</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.height+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr><td colspan = 2>&nbsp;</td></tr>";
            
            //Position
            VideoAdStats += "<tr><td colspan = 2><center><b>Video Position</b></center></td></tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Top</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.top+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Bottom</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.bottom+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Left</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.left+"px</b><td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Right</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.right+"px</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr><td colspan = 2>&nbsp;</td></tr>";
            
            //Other Details
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
            VideoAdStats += "<td>Coordinates</td>";
            VideoAdStats += "<td><b>"+VideoAdSAttr.top+" , "+VideoAdSAttr.bottom+"</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "<tr>";
            VideoAdStats += "<td>Visibility</td>";
            VideoAdStats += "<td><b>"+getVisibility(el)+" %</b></td>";
            VideoAdStats += "</tr>";
            VideoAdStats += "</table><br>";           
            document.getElementById("ad-detection-stat").innerHTML = VideoAdStats;
            
        }else{
            VideoAdsDetectionStat = "No Video Ads Detected";
            VideoAd.style["background-color"] = "red";
            VideoAd.style["color"] = "white";
            VideoAd.style["padding"] = "4px";
            VideoAd.style["text-align"] = "center";
            VideoAd.style["font-weight"] = "bold";
            document.getElementById("ad-detection-stat").innerHTML = "";
        }
        document.getElementById("ad-detection").innerHTML = VideoAdsDetectionStat;
    }else{
        //document.getElementById("stats-container").innerHTML = "";
        //document.getElementById("stats-container").style.visibility = "hidden";
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
    var docViewTop = window.screen.availTop;
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

function startPOC(){
    var statContainer = document.getElementById("stats-container");
    if(statContainer == null){
        createElement();
    }
    console.log('Restarted');
    getStats();
    
}
startPOC();
videos = document.getElementsByClassName("yt-lockup-dismissable");
window.addEventListener("scroll", startPOC);
for (i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", getStats);
}
var video = document.getElementsByTagName("video")[0];
//video.addEventListener("loadstart", getStats);

let map = (document.getElementsByClassName("map"))[0];
map.onmouseover  = function (event) {
    let target = event.target;
    if(target.nodeName  == "path"){
        target.fill = "#342422";
    }
};
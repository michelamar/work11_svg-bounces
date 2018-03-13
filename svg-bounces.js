var svg = document.getElementById("svg_id");

var b1 = document.getElementById("clear");

var intervalID;

var clear = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var clear_total = function(){
    // pressing clear stops any new circles from moving - works as intended
    stop();
    clear();
};

var stop = function(){
    clearInterval(intervalID);
};

var create_circle = function(e){
	circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	circle.setAttribute("cx", e.offsetX);
	circle.setAttribute("cy", e.offsetY);
	circle.setAttribute("r", 30);
    circle.setAttribute("xmove", Math.round(Math.random()) * 2 - 1);
    circle.setAttribute("ymove", Math.round(Math.random()) * 2 - 1);
	circle.setAttribute("fill", "lightsteelblue");
	svg.appendChild(circle);
};

var move_circles = function(){
    for (var i = 0; i < svg.children.length; i++){
        var circle = svg.children[i];
        // getAttribute() returns a string, must convert to int
        var cx = parseInt(circle.getAttribute("cx"));
        var cy = parseInt(circle.getAttribute("cy"));
        var xmove = parseInt(circle.getAttribute("xmove"));
        var ymove = parseInt(circle.getAttribute("ymove"));
        
        if (cx <= 30 || cx >= 470){
            circle.setAttribute("xmove", xmove * -1);
            xmove = xmove * -1;
        };
        if (cy <= 30 || cy >= 470){
            circle.setAttribute("ymove", ymove * -1);
            ymove = ymove * -1;
        };
        
        circle.setAttribute("cx", cx + xmove);
        circle.setAttribute("cy", cy + ymove);
    };
};

intervalID = setInterval(move_circles, 10);
svg.addEventListener("click", create_circle);
b1.addEventListener("click", clear_total);

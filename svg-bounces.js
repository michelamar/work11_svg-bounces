var svg = document.getElementById("svg_id");

var b1 = document.getElementById("clear");

var intervalID;

var clear = function(){
    while (svg.lastChild) {
    	svg.removeChild(svg.lastChild);
    }
};

var clear_total = function(){
    stop();
    clear();
};

var stop = function(){
    clearInterval(intervalID);
};

var dvd_move = function(){
    stop()
    var xmove = 1;
    var ymove = 1;
    x = 0;
    y = 100;
    var draw = function(){
	clear();
	rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	rect.setAttribute("x", x);
	rect.setAttribute("y", y);
	rect.setAttribute("width", 50);
	rect.setAttribute("height", 30);
	rect.setAttribute("fill", "lightsteelblue");
	svg.appendChild(rect);
	x = x + xmove;
	y = y + ymove;
	if (x <= 0 || x+50 >= 500){
	    xmove = xmove * -1;
	}
	if (y <= 0 || y+30 >= 500){
	    ymove = ymove * -1;
	}
    };
    intervalID = setInterval(draw, 30);
    draw();
};

svg.addEventListener("click", dvd_move);
b1.addEventListener("click", clear_total);

/**************wheel menu stuff------------------------------****/
window.onload = function () {

var wheel = new wheelnav("wheelDiv");
//This is the place for code snippets from the documentation -> http://wheelnavjs.softwaretailoring.net/documentation.html
var piemenu = new wheelnav('piemenu');
piemenu.sliceInitPathFunction = piemenu.slicePathFunction;
piemenu.initPercent = 0.1;
piemenu.wheelRadius = piemenu.wheelRadius * 0.83;
piemenu.createWheel();

//Insert generated JavaScript code from here -> http://pmg.softwaretailoring.net

for (var i=0; i<piemenu.navItems.length; i++) {
    piemenu.navItems[i].navSlice.mouseover(function () {
        show(this.id);
    });
}   
};

//wheel nav
function show(e){
    var items = document.getElementsByClassName("major");  
    for (var i=0; i<items.length; i++) {
        console.log(items[i].id)
        if (items[i].id == e) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}
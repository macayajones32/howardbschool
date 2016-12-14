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

        };
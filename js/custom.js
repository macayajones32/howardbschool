$(document).ready(function(){'use strict';$(window).scroll(function(){if($(this).scrollTop()>1){$('nav.transparent').addClass("sticky");$('nav.transparent').removeClass("normal");}else{$('nav.transparent').removeClass("sticky");$('nav.transparent').addClass("normal");}});function toggleChevron(e){$(e.target).prev('.panel-heading').find("i.indicator2").toggleClass('fa-plus fa-minus');}
function toggleChevron1(e){$(e.target).prev('.panel-heading').find("i.indicator").toggleClass('fa-angle-down fa-angle-right');}
$('.accordion_arrow').on('hidden.bs.collapse',toggleChevron1);$('.accordion_arrow').on('shown.bs.collapse',toggleChevron1);$('.accordion_plusminus').on('hidden.bs.collapse',toggleChevron);$('.accordion_plusminus').on('shown.bs.collapse',toggleChevron);});

/**************side nav------------------------------****/
    // is the navigation panel open?
        var status = 0;
                /* Set the width of the side navigation to 250px and add a black background color to body */
        function openNav() {
            status = 1;
            $('.side-tabs').css({
                    'right': '0'
                });
            document.getElementById("mySidenav").style.right = "0px";
            document.getElementById("menu").classList.add("open");
            document.getElementById("cover").classList.add("overlay");
        }

        /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
        function closeNav() {
            status = 0;
            document.getElementById("mySidenav").style.right = "-400px";
            //document.getElementById("main").style.marginRight = "0";
            document.getElementById("menu").classList.remove("open");
            document.getElementById("cover").classList.remove("overlay");
            if ($(this).scrollTop() > 300) { //use `this`, not `document`
                $('.side-tabs').css({
                    'right': '-400px'
                });
                $('.little-tab').css({
                    'right': '0'
                });
            }
        }
        
        
        $(window).scroll(function() {
            if (($(this).scrollTop() > 300) && (status == 0)) { //use `this`, not `document`
                $('.side-tabs').css({
                    'right': '-400px'
                });
                $('.little-tab').css({
                    'right': '0'
                });
            } else {
                $('.side-tabs').css({
                    'right': '0'
                });
                $('.little-tab').css({
                    'right': '-200px'
                });
            }
        });

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

         function show(e){
            var items = document.getElementsByClassName("major");  
            for (var i=0; i<items.length; i++) {
                if (items[i] == e) {
                    e.style.display = 'block';
                    //e.fadeIn(1000);
                } else {
                    items[i].style.display = 'none';
                }
            }
        }

        /**************wheel menu stuff------------------------------****/
        /**************Call menus!------------------------------****/
         w3IncludeHTML();
        /**************call menus!------------------------------****/
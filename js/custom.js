$(document).ready(function(){'use strict';$(window).scroll(function(){if($(this).scrollTop()>1){$('nav.transparent').addClass("sticky");$('nav.transparent').removeClass("normal");}else{$('nav.transparent').removeClass("sticky");$('nav.transparent').addClass("normal");}});function toggleChevron(e){$(e.target).prev('.panel-heading').find("i.indicator2").toggleClass('fa-plus fa-minus');}
function toggleChevron1(e){$(e.target).prev('.panel-heading').find("i.indicator").toggleClass('fa-angle-down fa-angle-right');}
$('.accordion_arrow').on('hidden.bs.collapse',toggleChevron1);$('.accordion_arrow').on('shown.bs.collapse',toggleChevron1);$('.accordion_plusminus').on('hidden.bs.collapse',toggleChevron);$('.accordion_plusminus').on('shown.bs.collapse',toggleChevron);});

        /**************side nav------------------------------****/
        // is the navigation panel open?
        var status = 0;

        /* Set the width of the side navigation to 250px and add a black background color to body */
        function openNav(e) {
            status = 1;
            $('.side-tabs').css({
                    'right': '0'
                });
            document.getElementById("mySidenav").style.right = "0px";
            document.getElementById("menu").classList.add("open");
            document.getElementById("cover").classList.add("overlay");
            
            /**** setting which navigation will appear*/
            pre = introspect(); 
            nav = e; //this is the sideNav file we want
            partial = '<a class="closebtn" href="javascript:void(0)" onclick="closeNav()">&times;</a>'
            partial += '<div id="menu-content" w3-include-html="' + pre + 'partials/'+ nav +'.html"></div>'
            document.getElementById("mySidenav").innerHTML = partial
            w3IncludeHTML();
            
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
        
        /* if we have scrolled past a certain amount we want the little corner menu, not the big one*/
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



        //Call menus!
         w3IncludeHTML();

        
        // Page awareness 
        //returns depth of page
        function introspect(){
            var link = document.getElementsByTagName("link")[0].getAttribute("href");
            var count = (link.match(/\.\.\//g) || []).length;
            pre = "";
            for (var i=0; i<count; i++){
                pre += "../"
            } //building context for relative links
            
            return pre;
        }

        function w3IncludeHTML() {
          pre_link = 'href="' + introspect();
          pre_src = 'src="' + introspect();
          pre_action = 'action="' + introspect();
          var z, i, a, file, xhttp;
          z = document.getElementsByTagName("*");
          for (i = 0; i < z.length; i++) {
            if (z[i].getAttribute("w3-include-html")) {
              a = z[i].cloneNode(false);
              file = z[i].getAttribute("w3-include-html");
              xhttp = new XMLHttpRequest();
              xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                  a.removeAttribute("w3-include-html");
                  a.innerHTML = this.responseText.replace(/href="\[pre\]/g, pre_link).replace(/src="\[pre\]/g, pre_src).replace(/action="\[pre\]/g, pre_action);
                  z[i].parentNode.replaceChild(a, z[i]);
                  w3IncludeHTML();
                }
              }      
              xhttp.open("GET", file, true);
              xhttp.send();
              return;
            }
          }
        }

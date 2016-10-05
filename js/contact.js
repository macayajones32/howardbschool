function contact()
{var email=$('#email').val();var subject=$('#subject').val();var message=$('#message').val();var captcha=$('#captcha').val();var captchaA=$('#captcha-answer').val();document.getElementById("contactdiv").style.display="none";var xmlhttp;if(window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(xmlhttp.readyState==4&&xmlhttp.status==200)
{document.getElementById("contactdiv").innerHTML=xmlhttp.responseText;document.getElementById("contactdiv").style.display="inline";}}
xmlhttp.open("GET","js/contact.php?type=login"+"&email="+ email+"&subject="+ subject+"&message="+ message+"&captcha="+ captcha+"&captcha-answer="+ captchaA,true);xmlhttp.send();}
function reloadcaptcha(){$('#reloadcaptcha').load('js/captcha.php');}
reloadcaptcha();document.getElementById('email').onkeydown=function(e)
{if(e.keyCode==13)
{contact();}};document.getElementById('subject').onkeydown=function(e)
{if(e.keyCode==13)
{contact();}};
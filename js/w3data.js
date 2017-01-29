var w3DataObject={};function w3DisplayData(id,data){var htmlObj,htmlTemplate,html,arr=[],a,l,rowClone,x,j,i,ii,cc,repeat,repeatObj,repeatX="";htmlObj=document.getElementById(id);htmlTemplate=w3InitTemplate(id,htmlObj);html=htmlTemplate.cloneNode(!0);arr=w3GetElementsByAttribute(html,"w3-repeat");l=arr.length;for(j=(l-1);j>=0;j-=1){cc=arr[j].getAttribute("w3-repeat").split(" ");if(cc.length==1){repeat=cc[0]}else{repeatX=cc[0];repeat=cc[2]}
arr[j].removeAttribute("w3-repeat");repeatObj=data[repeat];if(repeatObj&&typeof repeatObj=="object"&&repeatObj.length!="undefined"){i=0;for(x in repeatObj){i+=1;rowClone=arr[j];rowClone=w3NeedleInHaystack(rowClone,"element",repeatX,repeatObj[x]);a=rowClone.attributes;for(ii=0;ii<a.length;ii+=1){a[ii].value=w3NeedleInHaystack(a[ii],"attribute",repeatX,repeatObj[x]).value}(i===repeatObj.length)?arr[j].parentNode.replaceChild(rowClone,arr[j]):arr[j].parentNode.insertBefore(rowClone,arr[j])}}else{console.log("w3-repeat must be an array. "+repeat+" is not an array.");continue}}
html=w3NeedleInHaystack(html,"element");htmlObj.parentNode.replaceChild(html,htmlObj);function w3InitTemplate(id,obj){var template;template=obj.cloneNode(!0);if(w3DataObject.hasOwnProperty(id)){return w3DataObject[id]}
w3DataObject[id]=template;return template}
function w3GetElementsByAttribute(x,att){var arr=[],arrCount=-1,i,l,y=x.getElementsByTagName("*"),z=att.toUpperCase();l=y.length;for(i=-1;i<l;i+=1){if(i==-1){y[i]=x}
if(y[i].getAttribute(z)!==null){arrCount+=1;arr[arrCount]=y[i]}}
return arr}
function w3NeedleInHaystack(elmnt,typ,repeatX,x){var value,rowClone,pos1,haystack,pos2,needle=[],needleToReplace,i,cc,r;rowClone=elmnt.cloneNode(!0);pos1=0;while(pos1>-1){haystack=(typ=="attribute")?rowClone.value:rowClone.innerHTML;pos1=haystack.indexOf("{{",pos1);if(pos1===-1){break}
pos2=haystack.indexOf("}}",pos1+1);needleToReplace=haystack.substring(pos1+2,pos2);needle=needleToReplace.split("||");value=undefined;for(i=0;i<needle.length;i+=1){needle[i]=needle[i].replace(/^\s+|\s+$/gm,'');if(x){value=x[needle[i]]}
if(value==undefined&&data){value=data[needle[i]]}
if(value==undefined){cc=needle[i].split(".");if(cc[0]==repeatX){value=x[cc[1]]}}
if(value==undefined){if(needle[i]==repeatX){value=x}}
if(value==undefined){if(needle[i].substr(0,1)=='"'){value=needle[i].replace(/"/g,"")}else if(needle[i].substr(0,1)=="'"){value=needle[i].replace(/'/g,"")}}
if(value!=undefined){break}}
if(value!=undefined){r="{{"+needleToReplace+"}}";if(typ=="attribute"){rowClone.value=rowClone.value.replace(r,value)}else{w3ReplaceHTML(rowClone,r,value)}}
pos1=pos1+1}
return rowClone}
function w3ReplaceHTML(a,r,result){var b,l,i,a,x,y,j,ll,nam;if(a.hasAttributes()){b=a.attributes;l=b.length;for(i=0;i<l;i+=1){if(b[i].value.indexOf(r)>-1){b[i].value=b[i].value.replace(r,result)}}}
x=a.getElementsByTagName("*");l=x.length;a.innerHTML=a.innerHTML.replace(r,result)}}
function w3Http(target,readyfunc,xml,method){var httpObj;if(!method){method="GET"}
if(window.XMLHttpRequest){httpObj=new XMLHttpRequest()}else if(window.ActiveXObject){httpObj=new ActiveXObject("Microsoft.XMLHTTP")}
if(httpObj){if(readyfunc){httpObj.onreadystatechange=readyfunc}
httpObj.open(method,target,!0);httpObj.send(xml)}}(function($){$.fn.shorten=function(settings){var config={showChars:100,ellipsesText:"...",moreText:"more",lessText:"less"};if(settings){$.extend(config,settings)}
$(document).off("click",'.morelink');$(document).on({click:function(){var $this=$(this);if($this.hasClass('less')){$this.removeClass('less');$this.html(config.moreText)}else{$this.addClass('less');$this.html(config.lessText)}
$this.parent().prev().toggle();$this.prev().toggle();return!1}},'.morelink');return this.each(function(){var $this=$(this);if($this.hasClass("shortened"))return;$this.addClass("shortened");var content=$this.html();if(content.length>config.showChars){var c=content.substr(0,config.showChars);var h=content.substr(config.showChars,content.length-config.showChars);var html=c+'<span class="moreellipses">'+config.ellipsesText+' </span><span class="morecontent"><span>'+h+'</span> <a href="#" class="morelink">'+config.moreText+'</a></span>';$this.html(html);$(".morecontent span").hide()}})}})(jQuery)
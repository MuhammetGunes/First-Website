  var sch_arr = document.getElementsByClassName("sch");
  var numof_sch = sch_arr.length;
  var sch_number = 0;
  var a = 0;

  view_sch(sch_number);

  function next_sch() {
    sch_number++;
    view_sch(sch_number); }
 

  function previous_sch() {
    sch_number--;
    view_sch(sch_number);
  }

  function view_sch(img_num) {
    sch_number = img_num;
    if (img_num >= numof_sch) 
      sch_number = 0;
    if (img_num < 0) 
      sch_number = numof_sch - 1;
    for (a = 0; a < numof_sch; a++) {
      sch_arr[a].style.display = "none";
    }
    sch_arr[sch_number].style.display = "block";}


    
  

// var menuAc=document.querySelector("#menuAc");
// var menu=document.querySelector("#menu");
// var kapatBtn=document.querySelector("#kapatBtn");
   
//    menuAc.addEventListener("click",function(){
//       menu.style.left="0vw"; 
//    });
   
//    kapatBtn.addEventListener("click",function(){
//        menu.style.left="-100vw"; 
//    });

 
 
 
 
 
 
 
 /*/*gece modu (function(window, document, undefined) {
    "use strict";
    var nightMode = document.cookie.indexOf("nightMode=true") !== -1;
    var lightMode = document.cookie.indexOf("nightMode=false") !== -1;
    if (nightMode) {
      document.documentElement.className += " night-mode";
    }
    const userPrefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const userPrefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    //Önceden lihtmode seçilmemiş ise
    if (!lightMode) {
      if (userPrefersDark) {
        //Cihaz koyu mod kullanıyor ise
        document.documentElement.className += " night-mode";
      }
    }
  })(window, document);
  (function(window, document, undefined) {
    "use strict";
    var nav = document.querySelector(".theme-mode");
    //HTML .theme-mode class butonu ekle
    nav.innerHTML +=
      '<span id="night-mode"><a role="button" title="nightMode" href="javascript:void(0);">🌓</a></span>';
    var nightMode = document.querySelector("#night-mode");
    nightMode.addEventListener(
      "click",
      function(event) {
        event.preventDefault();
        document.documentElement.classList.toggle("night-mode");
        if (document.documentElement.classList.contains("night-mode")) {
          //nightMode cookie etkinleştir
          return (document.cookie =
            "nightMode=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;");
        }
        //nightMode cookie etkisizleştir
        document.cookie =
          "nightMode=false; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; secure;";
      },
      false
    );
  })(window, document);
 gece modu*/
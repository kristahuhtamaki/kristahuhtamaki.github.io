window.onload = function () {
   
    'use strict';
    var x = null;
    $.getJSON("https://project-353749562509379758.firebaseio.com/.json", function (data) {
    
        x = data;
        slideshow();
    
  
    });
    function slideshow() {
        var saatana = 0;
        function seuraava(n) {
            if (n < 2) {
                n++;
            } else {
                n = 0;
            }
            return n;
        
        } ;
    function edellinen(n){
        if(n>0){
            n--;
        }
        else {
            n=2
        }
        return n
    };
    
  var isActive = true
    function Mytimer() {
        
        
   
 
    $("#news").fadeOut(300,function(){
     $("#news").html("<div class= 'changing-text'> "+
       "<p>" + x[saatana].title+"&nbsp;&nbsp;&nbsp" + x[saatana].date + 
       "</p> <br>" +"<p>" + x[saatana].article + " </p> </div>");
        $("#news").fadeIn();
        

    })
   
};
  
      
        
       
      
    document.getElementById("button").addEventListener("click", function(){
     saatana = seuraava(saatana);
         
       Mytimer();
       isActive = false;
        clearInterval(voivittu);
        $("#button3").html("Jatka");

});
 
               
             document.getElementById("button2").addEventListener("click", function(){
     saatana = edellinen(saatana);
    
         
        Mytimer();
     isActive = false;
        clearInterval(voivittu);
        $("#button3").html("Jatka");

});    
    
    
    $("#button3").click(function(){
        if(isActive){
            isActive = false;
        clearInterval(voivittu);
        $("#button3").html("Jatka");
        }
        else{
            isActive = true;
        voivittu = setInterval(function(){
         saatana = seuraava(saatana);
        Mytimer();
        
        },4000);
             $("#button3").html("Pysäytä");
         
        };

}); 
    
      var voivittu = setInterval(function(){
         saatana = seuraava(saatana);
        Mytimer();
        
        },4000);
        
    }
     }
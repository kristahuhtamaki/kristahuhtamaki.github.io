window.onload = function () {
   
    var x = null;
    $.getJSON("https://project-3800075639156052903.firebaseio.com/", function (data) {
    
        x = data;
        slideshow();
    
  
    });
function slideshow() {
    var index = 0;
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
       "<p>" + x[index].title+"&nbsp;&nbsp;&nbsp" + x[index].date + 
       "</p> <br>" +"<p>" + x[index].article + " </p> </div>");
        $("#news").fadeIn();
        

    })
   
};
  
      
        
       
      
    document.getElementById("button").addEventListener("click", function(){
     index = seuraava(index);
         
       Mytimer();
       isActive = false;
        clearInterval(voivittu);
        $("#button3").html("Jatka");

});
 
               
             document.getElementById("button2").addEventListener("click", function(){
     index = edellinen(index);
    
         
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
         index = seuraava(index);
        Mytimer();
        
        },4000);
             $("#button3").html("Pysäytä");
         
        };

}); 
    
      var voivittu = setInterval(function(){
         index = seuraava(index);
        Mytimer();
        
        },4000);
        
    }
     }
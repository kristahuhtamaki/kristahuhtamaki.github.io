window.onload = function () {
   
    var x = null;
    $.getJSON("https://project-3800075639156052903.firebaseio.com/.json", function (data) {
    
    x = data;
    slideshow();
    
  
    });
    
    function slideshow() {
        var index = 0;
        function next(n) {
            if (n < 2) {
                n++;
            } else {
                n = 0;
            }
            return n;
    
        } ;
        function previous(n){
            if(n>0){
                n--;
            } else {
                n=2
            }
            return n
        };
    
    
        var active = true
    
        function Mytimer() {
            $("#news").fadeOut(350,function(){
                $("#news").html("<div class= 'changing-text'> "+"<p>" + x[index].title+"&nbsp" + x[index].date + "</p> <br>" +"<p>" + x[index].article + " </p> </div>");
                $("#news").fadeIn();
            })  
        };
  
      
        document.getElementById("button").addEventListener("click",     function(){
            index = next(index);
         
            Mytimer();
            active = false;
            clearInterval(interval);
            $("#button3").html("Toista");
        });
     
        document.getElementById("button2").addEventListener("click", function(){
            index = previous(index);
            Mytimer();
            active = false;
            clearInterval(interval);
            $("#button3").html("Toista");
        });    
    
        
    
        $("#button3").click(function(){
            if(active) {
                active = false;
                clearInterval(interval);
                $("#button3").html("Toista");
            } else {
                active = true;
                interval = setInterval(function(){
                    index = next(index);
                    Mytimer();
                },4000);
                $("#button3").html("Pysäytä");
            };

        }); 

        
        var interval = setInterval(function(){
            index = next(index);
            Mytimer();
        
        },4000);
        
    }
}
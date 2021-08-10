function loading(){
    $(document).ready(function(){
        $("#overlay").animate({opacity: 0},"1ms");
    });
}
function fade(){
    alert("hello");
    $(document).ready(function(){
        $("#image").hover(function(){
            $("#overlay").animate({opacity: 0.3});
          },
          function(){
            $("#overlay").animate({opacity: 0});
          });
        $("#button").hover(function(){
          $(this).animate({width: "38%"},"fast");
          $(this).animate({opacity: 0.9},"fast");
        },
        function(){
          $(this).animate({width: "35%"},"fast");
          $(this).animate({opacity: 1}, "fast");
        });
        
    });
}

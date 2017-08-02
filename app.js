$(function() {
   $(".module").click(function(){
       $(".overlay").show();
       return false;
   });
    $(".overlay").click(function(){
        $(".overlay").hide();
    });
}); 
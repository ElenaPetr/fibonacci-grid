function fibonacci(n) {
  var a = 1,
    b = 1;
  for (var i = 2; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}

 $('document').ready(function() {

  var element = $('.fibImg');
 
  for (var i = 0; i < element.length;i++) {

      var size = fibonacci(i)*50;

      $(element[i]).width(size);
      $(element[i]).height(size);
     
var position = $(element[i]).offset();

   if (i%2!=0){

      position.top += $(element[i-1]).height(); 
   }
   else{

      position.left += $(element[i-1]).width();   
   }

   $(element[i]).offset(position);
  }
 });

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
      var index = 1;
      if (element.length>7)
        { index = 0.382353;}
      if (element.length>9)
        { index = 0.1460674;}
      if (element.length>11)
        { index = 0.055794;}


      var size = fibonacci(i)*50*index;
   

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

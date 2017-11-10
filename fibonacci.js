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
   }

  var position2 = $(element[2]).offset(),
      position3 = $(element[3]).offset(),
      position4 = $(element[4]).offset(),
      position5 = $(element[5]).offset(),
      position6 = $(element[6]).offset();
     
          position2.top -= 100;
          position2.left += 50;

          position3.top -= 100;

          position4.top -= 350;
          position4.left += 150;

          position5.top -= 350;

          position6.top -= 1000;
          position6.left += 400;

    $(element[2]).offset(position2);
    $(element[3]).offset(position3);
    $(element[4]).offset(position4);
    $(element[5]).offset(position5);
    $(element[6]).offset(position6);
 
 });

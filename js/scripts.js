var a;
var b;
var c;

$(document).ready(function() {
  getValues = function() {
    a = parseFloat($("input#value1").val());
    b = parseFloat($("input#value2").val());
    c = parseFloat($("input#value3").val());
  }
  $("button#check").click(function() {
    getValues();

    if( ((a+b)<=c) || ((b+c)<=a) || ((c+a)<=b)  ) {
      alert("This is not a triangle.");
    } else{
      if(a===b && b===c)
      {
        alert("This is an equilateral triangle");
      } else if (a===b || b===c || c===a){
        alert("This is an isosceles triangle");
      } else{
        alert("This is a scalene triangle");
      }
    }
  });


});

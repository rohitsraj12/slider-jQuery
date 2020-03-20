$(document).ready(function() {
  //active first child
  $(".slider li:first").addClass("active");

  var change = function() {
    //change class active
    //console.log("hi");
    var currentElement = $(".slider li.active");
    var nextElement = currentElement.next();

    //   nextElement.addClass("active");
    //   currentElement.removeClass("active");
    if (!nextElement.length) {
      nextElement = $(".slider li:first");
      nextElement.addClass("active");
      currentElement.removeClass("active");
    } else {
      nextElement.addClass("active");
      currentElement.removeClass("active");
    }
  };
  setInterval(change, 3000);
});

$(document).ready(function() {
  $("form#day-four").submit(function(event) {
    event.preventDefault();

    var example1 =  parseInt($("input#example1").val());
    var example2 =  parseInt($("input#example2").val());
    var example3 =  parseInt($("input#example3").val());
    var question1 =  parseInt($("input#question1").val());
    var question2 =  parseInt($("input#question2").val());
    var question3 =  parseInt($("input#question3").val());
    var question4 =  parseInt($("input#question4").val());
    var question5 =  parseInt($("input#question5").val());
    var question6 =  parseInt($("input#question6").val());
    var question7 =  parseInt($("input#question7").val());
    var question8 =  parseInt($("input#question8").val());
    var question9 =  parseInt($("input#question9").val());
    var question10 =  parseInt($("input#question10").val());
    var question11 =  parseInt($("input#question11").val());
    var question12 =  parseInt($("input#question12").val());
    var question13 =  parseInt($("input#question13").val());
    var question14 =  parseInt($("input#question14").val());
    var question15 =  parseInt($("input#question15").val());

    var wrong = 0;


    if (example1 != 2) {
      wrong += 1;
    }

    if (example2 != 25) {
      wrong += 1;
    }

    if (example3 != 250 ) {
      wrong += 1;
    }

    if (question1 != 3) {
      wrong += 1;
    }

    if (question2 != 32) {
      wrong += 1;
    }

    if (question3 != 326) {
      wrong += 1;
    }

    if (question4 != 2) {
      wrong += 1;
    }

    if (question5 != 27) {
      wrong += 1;
    }

    if (question6 != 270) {
      wrong += 1;
    }

    if (question7 != 2) {
      wrong += 1;
    }

    if (question8 != 26) {
      wrong += 1;
    }

    if (question9 != 264) {
      wrong += 1;
    }

    if (question10 != 1) {
      wrong += 1;
    }

    if (question11 != 18) {
      wrong += 1;
    }

    if (question12 != 186) {
      wrong += 1;
    }

    if (question13 != 3) {
      wrong += 1;
    }

    if (question14 != 32) {
      wrong += 1;
    }

    if (question15 != 325) {
      wrong += 1;
    }

    var right = 18 - wrong;
    
    $(".score").show();
    $(".wrong-display").text(wrong);
    $(".right-display").text(right);

  });
});

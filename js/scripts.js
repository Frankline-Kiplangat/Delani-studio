$(document).ready(function(){
  $("#design-image").click(function(){
    $("#design-image").slideDown(500).hide(500);
    $("#design").show(500);
  });
  $("#design").click(function(){
    $("#design").slideUp(500);
    $("#design-image").slideDown(500);
  });
});
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown(500).hide(500);
      $("#development").show(500);
    });
    $("#development").click(function(){
      $("#development").slideUp(500);
      $("#development-image").slideDown(500);
    });
  });
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown(500).hide(500);
      $("#product").show(500);
    });
    $("#product").click(function(){
      $("#product").slideUp(500);
      $("#product-image").slideDown(500);
    });
  });
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#overlay").show();
    }).mouseout(function(){
      $("#overlay").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#overlay2").show();
    }).mouseout(function(){
      $("#overlay2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#overlay3").show();
    }).mouseout(function(){
      $("#overlay3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#overlay4").show();
    }).mouseout(function(){
      $("#overlay4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#overlay5").show();
    }).mouseout(function(){
      $("#overlay5").hide();
    });
    $("#work6").mouseover(function(){
      $("#overlay6").show();
    }).mouseout(function(){
      $("#overlay6").hide();
    });
    $("#work7").mouseover(function(){
      $("#overlay7").show();
    }).mouseout(function(){
      $("#overlay7").hide();
    });
    $("#work8").mouseover(function(){
      $("#overlay8").show();
    }).mouseout(function(){
      $("#overlay8").hide();
    });
  });
  $(document).ready(function(){
    $("form#message-form").submit(function(){
      var name = $("input#input1").val();
      if ($("input#input1").val() && $("input#input2").val()){
        alert(name + ",thank you for reaching out to us 😉. We will get back to you soon");
      }
      else {
        alert("Please enter your name and email address!");
      }
      
    });
  
  });
  
// select element && id && class
let header = $("h2");
console.log(header);

let btn = $("button");
console.log(btn);

let firstP = $("#top");
console.log(firstP);

let allP = $(".parag");
console.log(allP);

// events

$(document).ready(function(){
    
// click

$("button").click(function(){
    this.style.color = "red";
    $("#top").css({border:"1px solid red"});
    $(".parag").css({opacity:0.5});
});

});

// mouseenter && mouseleave &&hover

$("h2").mouseenter(function(){
    $(this).hide();
    $(this).css({cursor:"pointer"});
});
$("h2").mouseleave(function(){
    $(this).css({display:"block"})
})

$("button").hover(function(){
    $(this).css({border:"3px solid red"});
})

// on
$(".parag").on("click", function(){
    $(this).hide();
});

//// hide() show()
$("#installation").click(function(){
    $("h4").hide();
})
$("#installation").dblclick(function(){
    $("h4").show();
})

// toggle for being a clickable
$("#bottomBtn").click(function(){
    $("h5").toggle("slow");
})

// fadeIn && fadeOut && fadeToggle && fadeTo
$("#divpart").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
$("#divpart").dblclick(function(){
    $("#div1").fadeOut();
    $("#div2").fadeOut("slow");
    $("#div3").fadeOut(1000);
});
$("#divpart2").click(function(){
    $("#divA").fadeToggle();
    $("#divB").fadeToggle("slow");
    $("#divC").fadeToggle(1000);
});

// slideDown && slideUp && slideTogge

// $("#flip").click(function(){
//     $("#panel").slideDown("slow");
// });
// $("#flip").dblclick(function(){
//     $("#panel").slideUp("slow");
// });
$("#flip").click(function(){
    $("#panel").slideToggle(5000);

    $("#stop").click(function(){
        $("#panel").stop();
    });
});


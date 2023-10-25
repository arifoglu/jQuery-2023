// $(document).ready(function(){
//     alert("jquery loaded");
// }); 

// for select use $ sign

let heading = $("#logo");
//console.log(heading);

let banner = $(".wrapper");
// console.log(banner);

//////////////////////////////////////jquery selectors

// $("#lead-banner p");
// 
// //tag select
// $("h3").css({border:"3px solid blue"});
// 
// // class select
// $(".wrapper").css({border:"3px solid red"});
// 
// // id select
// $("#clients").css({border:"3px solid yellow"});


/////////////////////////////////////jquery filters

// use : sign for filtering

// $("header nav li:first").css({border:"2px solid red"});
// 
// $("header nav li:last").css({border:"2px solid red"});

//// first - last
// $("#contact ul li:first").css({border:"2px solid red"});
// $("#contact ul li:last").css({border:"2px solid red"});

/// even -odd
// $("header nav li:even").css({border:"2px solid blue"});
// $("header nav li:odd").css({border:"2px solid red"});

/// not
// $("section:not('#contact')").css({border:"2px solid green"});

//////////////////////////////////////// DOM

// next()
//$("#contact-methods").next().css({border:"2px solid red"});
//
//// prev()
//$("#social-nav").prev().css({border:"2px solid blue"});
//
//// parent() parents()
//$(".banner-title").parent().css({border:"2px solid blue"});
//
//// children()
//$("#social-nav").children().css({border:"2px solid green"});
//
//// find()
//$("#social-nav").find(".facebook").css({border:"2px solid blue"});

//////////////////////////////////////// chaining

// $("#contact-methods").css({border:"3px solid red"})
// .next().css({border:"3px solid green"})
// .closest("section").css({border:"2px solid blue"});

//////////////////////////////////////// adding
//var tweet = "<div style ='margin:20px 0 ; padding:10px ; background:#eee'> The big fight live: </div>"

// append()
// $("#tweets div").append(tweet);

// prepend()
//$("#tweets div").prepend(tweet);

// before()
//$("#tweets div").before(tweet);

// after()
// $("#tweets div").after(tweet);

// html()
//$("#tweets div").html(tweet);

// text()
// var tweet2 = "this is a text"
// $("#tweets div").text(tweet2);

///////////////////////////////////////// wrapping and unwrapping

// wrap() 
// $("section").wrap("<div>");
// // unwrap
// $("section").unwrap("");
// // wrapALL
// $("section").wrapAll("<div>");

////////////////////////////// removing

// empty() for delete contains
// $(".button").empty();

//remove for delete completely
//$(".button").remove();

//////////////////////////////////////////changing attributes

// removeAttr()
// $(".button").removeAttr("style");

// attr()
// $(".button").attr("style" ,"text-align: center; padding: 10px; background-color: orange;");

////////////////////////////////////////// query CSS 

// $("#social-nav").css("position"); // console.log() result is relative

//$("#social-nav").css("border" ,"1px solid red"); 

///////////////////////////////////////// remove && add class

// remove
// $("header .wrapper").removeClass("wrapper");

// add
// $("header > div").addClass("wrapper");

// toogleClass 
// let button = $("#lead-banner a");
// 
// button[0].onclick = function(){
//     $("#points-of-sale").toggleClass("open");
//     return false;
// }

////////////////////////////////////////// event

// $("#lead-banner").dblclick(function(){
//     alert("double clicked me");
// });

////////////////////////////////////////// window load

// if we put out script tag on top in html file
// syntaxe  // document is ready 
// $(function(){
//     
// }); 

// syntaxe // window is ready 
// $(window).load(function(){
//     
// }); 

/////////////////////////////////////////// 



  


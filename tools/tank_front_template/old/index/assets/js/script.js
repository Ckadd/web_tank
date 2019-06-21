function myFunction(x) {
    x.classList.toggle("change");
}

//scroll change color nav
$(document).on("scroll", function() {
  if($(document).scrollTop()>100) {
    $("#navbar-3").addClass("navbar-3");
    $('#hamber').fadeIn(3000);
  } else {
    $('#hamber').fadeOut("slow");
    $("#navbar-3").removeClass("navbar-3");
  }
});


$(document).ready(function(){
  $("#hamber").click(function(){
      $("#navbar-3").slideToggle("slow");
  });
});


$(document).ready(function(){
    $("#nav5drop1").hover(function(){
        $("#nav5drop1gender").slideToggle("slow");
    });
});


$(document).ready(function(){
  $("#HELP").click(function(){$("#content-HELP").toggle();});
});

$(document).ready(function(){
  $("#BRANDS").click(function(){$("#content-BRANDS").toggle();});
    $("#BRANDS-01").click(function(){$("#content-BRANDS-01").toggle();});
    $("#BRANDS-02").click(function(){$("#content-BRANDS-02").toggle();});
    $("#BRANDS-03").click(function(){$("#content-BRANDS-03").toggle();});
    $("#BRANDS-04").click(function(){$("#content-BRANDS-04").toggle();});
    $("#BRANDS-05").click(function(){$("#content-BRANDS-05").toggle();});
    $("#BRANDS-06").click(function(){$("#content-BRANDS-06").toggle();});
});
$(document).ready(function(){
  $("#JACKETS").click(function(){$("#content-JACKETS").toggle();});
    $("#JACKETS-01").click(function(){$("#content-JACKETS-01").toggle();});
    $("#JACKETS-02").click(function(){$("#content-JACKETS-02").toggle();});
    $("#JACKETS-03").click(function(){$("#content-JACKETS-03").toggle();});
    $("#JACKETS-04").click(function(){$("#content-JACKETS-04").toggle();});
    $("#JACKETS-05").click(function(){$("#content-JACKETS-05").toggle();});
    $("#JACKETS-06").click(function(){$("#content-JACKETS-06").toggle();});
});
$(document).ready(function(){
  $("#CLOTHING").click(function(){$("#content-CLOTHING").toggle();});
    $("#CLOTHING-01").click(function(){$("#content-CLOTHING-01").toggle();});
    $("#CLOTHING-02").click(function(){$("#content-CLOTHING-02").toggle();});
    $("#CLOTHING-03").click(function(){$("#content-CLOTHING-03").toggle();});
    $("#CLOTHING-04").click(function(){$("#content-CLOTHING-04").toggle();});
    $("#CLOTHING-05").click(function(){$("#content-CLOTHING-05").toggle();});
    $("#CLOTHING-06").click(function(){$("#content-CLOTHING-06").toggle();});
});
$(document).ready(function(){
  $("#FOOTWEAR").click(function(){$("#content-FOOTWEAR").toggle();});
    $("#FOOTWEAR-01").click(function(){$("#content-FOOTWEAR-01").toggle();});
    $("#FOOTWEAR-02").click(function(){$("#content-FOOTWEAR-02").toggle();});
    $("#FOOTWEAR-03").click(function(){$("#content-FOOTWEAR-03").toggle();});
    $("#FOOTWEAR-04").click(function(){$("#content-FOOTWEAR-04").toggle();});
    $("#FOOTWEAR-05").click(function(){$("#content-FOOTWEAR-05").toggle();});
    $("#FOOTWEAR-06").click(function(){$("#content-FOOTWEAR-06").toggle();});
});
$(document).ready(function(){
  $("#HIKE").click(function(){$("#content-HIKE").toggle();});
    $("#HIKE-01").click(function(){$("#content-HIKE-01").toggle();});
    $("#HIKE-02").click(function(){$("#content-HIKE-02").toggle();});
    $("#HIKE-03").click(function(){$("#content-HIKE-03").toggle();});
    $("#HIKE-04").click(function(){$("#content-HIKE-04").toggle();});
    $("#HIKE-05").click(function(){$("#content-HIKE-05").toggle();});
    $("#HIKE-06").click(function(){$("#content-HIKE-06").toggle();});
});
$(document).ready(function(){
  $("#CLIMB").click(function(){$("#content-CLIMB").toggle();});
    $("#CLIMB-01").click(function(){$("#content-CLIMB-01").toggle();});
    $("#CLIMB-02").click(function(){$("#content-CLIMB-02").toggle();});
    $("#CLIMB-03").click(function(){$("#content-CLIMB-03").toggle();});
    $("#CLIMB-04").click(function(){$("#content-CLIMB-04").toggle();});
    $("#CLIMB-05").click(function(){$("#content-CLIMB-05").toggle();});
    $("#CLIMB-06").click(function(){$("#content-CLIMB-06").toggle();});
});
$(document).ready(function(){
  $("#BIKE").click(function(){$("#content-BIKE").toggle();});
    $("#BIKE-01").click(function(){$("#content-BIKE-01").toggle();});
    $("#BIKE-02").click(function(){$("#content-BIKE-02").toggle();});
    $("#BIKE-03").click(function(){$("#content-BIKE-03").toggle();});
    $("#BIKE-04").click(function(){$("#content-BIKE-04").toggle();});
    $("#BIKE-05").click(function(){$("#content-BIKE-05").toggle();});
    $("#BIKE-06").click(function(){$("#content-BIKE-06").toggle();});
});
$(document).ready(function(){
  $("#WATER").click(function(){$("#content-WATER").toggle();});
    $("#WATER-01").click(function(){$("#content-WATER-01").toggle();});
    $("#WATER-02").click(function(){$("#content-WATER-02").toggle();});
    $("#WATER-03").click(function(){$("#content-WATER-03").toggle();});
    $("#WATER-04").click(function(){$("#content-WATER-04").toggle();});
    $("#WATER-05").click(function(){$("#content-WATER-05").toggle();});
    $("#WATER-06").click(function(){$("#content-WATER-06").toggle();});
});
$(document).ready(function(){
  $("#MORE").click(function(){$("#content-MORE").toggle();});
    $("#MORE-01").click(function(){$("#content-MORE-01").toggle();});
    $("#MORE-02").click(function(){$("#content-MORE-02").toggle();});
    $("#MORE-03").click(function(){$("#content-MORE-03").toggle();});
    $("#MORE-04").click(function(){$("#content-MORE-04").toggle();});
    $("#MORE-05").click(function(){$("#content-MORE-05").toggle();});
    $("#MORE-06").click(function(){$("#content-MORE-06").toggle();});
});
$(document).ready(function(){
  $("#SALE").click(function(){$("#content-SALE").toggle();});
    $("#SALE-01").click(function(){$("#content-SALE-01").toggle();});
    $("#SALE-02").click(function(){$("#content-SALE-02").toggle();});
    $("#SALE-03").click(function(){$("#content-SALE-03").toggle();});
    $("#SALE-04").click(function(){$("#content-SALE-04").toggle();});
    $("#SALE-05").click(function(){$("#content-SALE-05").toggle();});
    $("#SALE-06").click(function(){$("#content-SALE-06").toggle();});
});



$(document).ready(function(){
    $("#Category").click(function(){
      $("#content-Category").toggle();
    });
});

$(document).ready(function(){
    $("#Gender").click(function(){
      $("#content-Gender").toggle();
    });
});

$(document).ready(function(){
    $("#Brand").click(function(){
      $("#content-Brand").toggle();
    });
});

$(document).ready(function(){
    $("#Features").click(function(){
      $("#content-Features").toggle();
    });
});

$(document).ready(function(){
    $("#JacketL").click(function(){
      $("#content-JacketL").toggle();
    });
});

$(document).ready(function(){
    $("#Size").click(function(){
      $("#content-Size").toggle();
    });
});

$(document).ready(function(){
    $("#Color").click(function(){
      $("#content-Color").toggle();
    });
});

$(document).ready(function(){
    $("#SpecialO").click(function(){
      $("#content-SpecialO").toggle();
    });
});

$(document).ready(function(){
    $("#BestU").click(function(){
      $("#content-BestU").toggle();
    });
});

$(document).ready(function(){
    $("#FitT").click(function(){
      $("#content-FitT").toggle();
    });
});

$(document).ready(function(){
    $("#Insulation").click(function(){
      $("#content-Insulation").toggle();
    });
});

$(document).ready(function(){
    $("#WeightR").click(function(){
      $("#content-WeightR").toggle();
    });
});

$(document).ready(function(){
    $("#Price").click(function(){
      $("#content-Price").toggle();
    });
});

$(document).ready(function(){
    $("#CustyR").click(function(){
      $("#content-CustyR").toggle();
    });
});

$(document).ready(function () {
    $("#sidebarCollapse").click(function() {$("#sidebar").slideToggle("slow");});
});

$(document).ready(function () {
    $("#SortBy").click(function() {$("#SortBy2").slideToggle("slow");});
});

/* Product 01 */
$(document).ready(function () {
  $('#img-01-1').click(function(){$('#change-image-01').attr('src','assets/img/products/01/1.jpg');});
  $('#img-01-2').click(function(){$('#change-image-01').attr('src','assets/img/products/01/2.jpg');});
  $('#img-01-3').click(function(){$('#change-image-01').attr('src','assets/img/products/01/3.jpg');});
  $('#img-01-4').click(function(){$('#change-image-01').attr('src','assets/img/products/01/4.jpg');});
  $('#img-01-5').click(function(){$('#change-image-01').attr('src','assets/img/products/01/5.jpg');});
});

/* Product 02 */
$(document).ready(function () {
  $('#img-02-1').click(function(){$('#change-image-02').attr('src','assets/img/products/02/1.jpg');});
  $('#img-02-2').click(function(){$('#change-image-02').attr('src','assets/img/products/02/2.jpg');});
  $('#img-02-3').click(function(){$('#change-image-02').attr('src','assets/img/products/02/3.jpg');});
  $('#img-02-4').click(function(){$('#change-image-02').attr('src','assets/img/products/02/4.jpg');});
  $('#img-02-5').click(function(){$('#change-image-02').attr('src','assets/img/products/02/5.jpg');});
});

/* Product 03 */
$(document).ready(function () {
  $('#img-03-1').click(function(){$('#change-image-03').attr('src','assets/img/products/03/1.jpg');});
  $('#img-03-2').click(function(){$('#change-image-03').attr('src','assets/img/products/03/2.jpg');});
  $('#img-03-3').click(function(){$('#change-image-03').attr('src','assets/img/products/03/3.jpg');});
  $('#img-03-4').click(function(){$('#change-image-03').attr('src','assets/img/products/03/4.jpg');});
  $('#img-03-5').click(function(){$('#change-image-03').attr('src','assets/img/products/03/5.jpg');});
});

/* Product 04 */
$(document).ready(function () {
  $('#img-04-1').click(function(){$('#change-image-04').attr('src','assets/img/products/04/1.jpg');});
  $('#img-04-2').click(function(){$('#change-image-04').attr('src','assets/img/products/04/2.jpg');});
  $('#img-04-3').click(function(){$('#change-image-04').attr('src','assets/img/products/04/3.jpg');});
  $('#img-04-4').click(function(){$('#change-image-04').attr('src','assets/img/products/04/4.jpg');});
  $('#img-04-5').click(function(){$('#change-image-04').attr('src','assets/img/products/04/5.jpg');});
});

/* Product 05 */
$(document).ready(function () {
  $('#img-05-1').click(function(){$('#change-image-05').attr('src','assets/img/products/05/1.jpg');});
  $('#img-05-2').click(function(){$('#change-image-05').attr('src','assets/img/products/05/2.jpg');});
  $('#img-05-3').click(function(){$('#change-image-05').attr('src','assets/img/products/05/3.jpg');});
  $('#img-05-4').click(function(){$('#change-image-05').attr('src','assets/img/products/05/4.jpg');});
  $('#img-05-5').click(function(){$('#change-image-05').attr('src','assets/img/products/05/5.jpg');});
});

/* Product 06 */
$(document).ready(function () {
  $('#img-06-1').click(function(){$('#change-image-06').attr('src','assets/img/products/06/1.jpg');});
  $('#img-06-2').click(function(){$('#change-image-06').attr('src','assets/img/products/06/2.jpg');});
  $('#img-06-3').click(function(){$('#change-image-06').attr('src','assets/img/products/06/3.jpg');});
});

/* Product 07 */
$(document).ready(function () {
  $('#img-07-1').click(function(){$('#change-image-07').attr('src','assets/img/products/07/1.jpg');});
  $('#img-07-2').click(function(){$('#change-image-07').attr('src','assets/img/products/07/2.jpg');});
  $('#img-07-3').click(function(){$('#change-image-07').attr('src','assets/img/products/07/3.jpg');});
  $('#img-07-4').click(function(){$('#change-image-07').attr('src','assets/img/products/07/4.jpg');});
  $('#img-07-5').click(function(){$('#change-image-07').attr('src','assets/img/products/07/5.jpg');});
});

/* Product 08 */
$(document).ready(function () {
  $('#img-08-1').click(function(){$('#change-image-08').attr('src','assets/img/products/08/1.jpg');});
  $('#img-08-2').click(function(){$('#change-image-08').attr('src','assets/img/products/08/2.jpg');});
  $('#img-08-3').click(function(){$('#change-image-08').attr('src','assets/img/products/08/3.jpg');});
  $('#img-08-4').click(function(){$('#change-image-08').attr('src','assets/img/products/08/4.jpg');});
  $('#img-08-5').click(function(){$('#change-image-08').attr('src','assets/img/products/08/5.jpg');});
});

/* Product 09 */
$(document).ready(function () {
  $('#img-09-1').click(function(){$('#change-image-09').attr('src','assets/img/products/09/1.jpg');});
  $('#img-09-2').click(function(){$('#change-image-09').attr('src','assets/img/products/09/2.jpg');});
  $('#img-09-3').click(function(){$('#change-image-09').attr('src','assets/img/products/09/3.jpg');});
  $('#img-09-4').click(function(){$('#change-image-09').attr('src','assets/img/products/09/4.jpg');});
  $('#img-09-5').click(function(){$('#change-image-09').attr('src','assets/img/products/09/5.jpg');});
});

/* Product 10 */
$(document).ready(function () {
  $('#img-10-1').click(function(){$('#change-image-10').attr('src','assets/img/products/10/1.jpg');});
  $('#img-10-2').click(function(){$('#change-image-10').attr('src','assets/img/products/10/2.jpg');});
  $('#img-10-3').click(function(){$('#change-image-10').attr('src','assets/img/products/10/3.jpg');});
  $('#img-10-4').click(function(){$('#change-image-10').attr('src','assets/img/products/10/4.jpg');});
  $('#img-10-5').click(function(){$('#change-image-10').attr('src','assets/img/products/10/5.jpg');});
});

/* Product 11 */
$(document).ready(function () {
  $('#img-11-1').click(function(){$('#change-image-11').attr('src','assets/img/products/11/1.jpg');});
  $('#img-11-2').click(function(){$('#change-image-11').attr('src','assets/img/products/11/2.jpg');});
  $('#img-11-3').click(function(){$('#change-image-11').attr('src','assets/img/products/11/3.jpg');});
});

/* Product 12 */
$(document).ready(function () {
  $('#img-12-1').click(function(){$('#change-image-12').attr('src','assets/img/products/12/1.jpg');});
  $('#img-12-2').click(function(){$('#change-image-12').attr('src','assets/img/products/12/2.jpg');});
  $('#img-12-3').click(function(){$('#change-image-12').attr('src','assets/img/products/12/3.jpg');});
  $('#img-12-4').click(function(){$('#change-image-12').attr('src','assets/img/products/12/4.jpg');});
  $('#img-12-5').click(function(){$('#change-image-12').attr('src','assets/img/products/12/5.jpg');});
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function relocate_home()
{
     location.href = "Shop-search-result.html";
} 

$(document).ready(function() {
   $("#sort").DataTable({
      columnDefs : [
    { type : 'date', targets : [3] }
],  
   });
});





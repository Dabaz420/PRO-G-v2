$(function(){
  if ( $(window).width() > 768) {
  //Desktop
  console.log('Grand écran');
  $("#haut").addClass('animate__fadeInLeft');
  console.log('fadeInLeft Added');
  $("#bas").addClass('animate__fadeInRight');
  console.log('fadeInRight Added');
  }
  else {
  //Mobile
  console.log('Petit écran');
  $("#haut").addClass('animate__fadeInDown');
  console.log('fadeInDown Added');
  $("#bas").addClass('animate__fadeInUp');
  console.log('fadeInUpAdded');
  }
});
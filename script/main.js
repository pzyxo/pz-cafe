$(document).ready(function(){
    $('.header').height($(window).height());
})

$('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
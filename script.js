//document changes
$(document).ready(function (){
//adding a listen to the save button when clicked
$('.saveBtn').on('click', function() {

  var value = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');

  //save checks on the local storage
  localStorage.setItem(time, value);

  //notifiys the item was saved
  $('.notification').removeclass('show');

  //removes 'show' after the time duration
  setTimeout(function () {
    $('.notfication').removeclass('show');
    }, 5000);
});




});
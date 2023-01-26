//document changes
$(document).ready(function () {
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

// adding a hour function with regular hours along with a loop if time has been moved
function hourUpdater() {
  var currentHour = dayjs().hour();
  $('.time-block').each(function () {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);

    if(blockHour < currentHour) {
      $(this).addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } else {
      $(this).removeClass('past)')
      $(this).removeClass('present')
      $(this).addClass('future')
    }
  });
}
hourUpdater();

// times for updates
setInterval(hourUpdater, 15000);

//storage load from saved data
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

$('#currentDay').text(dayjs("03-14-2023").format("dddd, MMMM D, YYYY"));

});
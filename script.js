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

// adding a hour function with regular hours along with a loop if time has been moved
function hourUpdater() {
  var currentHour = dayjs().hour();
  $('time-block').each(function () {
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


});
'use strict';

$('.tab').on('click', function() {
  if ($(this).attr('class') === 'tab') {
    // Change active tab
    $('.tab.active').removeClass('active');
    $(this).addClass('active');

    // Show selected content
    $('.content.show').removeClass('show');
    $(`${$(this).attr('href')}`).addClass('show');
    return;
  } else {
    return;
  }
})

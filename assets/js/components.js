$(function() {
  $('.usa-accordion').on('click', 'p', function() {
   $(this).parent().removeClass('hidden')
    .siblings().addClass('hidden');
  });
});

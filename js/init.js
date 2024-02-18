$(document).ready(function () {
  $('.carousel').carousel();
  $(".dropdown-trigger").dropdown();
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    onCycleTo: true
  });

  setInterval(function () {
    instances[0].next();
  }, 3000);
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    toolbarEnabled: true
  });
});

// Or with jQuery

$('.fixed-action-btn').floatingActionButton({
  toolbarEnabled: true
});

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $('select').formSelect();
});

var instance = M.Tabs.init(el, options);

// Or with jQuery

$(document).ready(function () {
  $('.tabs').tabs();
});


$(document).ready(function () {
  $('.carousel').carousel();
  $('.carousel').carousel('numVisible', 5);
});


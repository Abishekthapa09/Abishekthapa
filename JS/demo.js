/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

// This can be used to set the Particles Effects. Check README for more details!
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#66e5e3',
    lineColor: 'rgb(138, 230, 211)'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);


/*
// jQuery plugin example:
$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#66e5e3',
    lineColor: 'rgb(138, 230, 211)'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/

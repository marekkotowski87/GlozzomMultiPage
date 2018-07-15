//Get the current year for copyright
$('#year').text(new Date().getFullYear());

//configure slider
$('.carousel').carousel({
    interval: 6000, 
    pause: 'hover'
});

$('#c-1').on('click', function() {
    $(this).addClass('active');
    $('#c-2').removeClass('active');
    $('#content-1').show();
    $('#content-2').hide();
})

$('#c-2').on('click', function() {
    $(this).addClass('active');
    $('#c-1').removeClass('active');
    $('#content-2').show();
    $('#content-1').hide();
})

$('.carousel').carousel({
    interval: 2500
})
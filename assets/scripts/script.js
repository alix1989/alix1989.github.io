$(() => {
    $('#lang').on('click', function() {
        $('#ita').addClass('myHidden');
        $('#eng').removeClass('myHidden');
        $('#lang').addClass('myHidden');
        $('#langIta').removeClass('myHidden');
    });
    $('#langIta').on('click', function() {
        $('#eng').addClass('myHidden');
        $('#ita').removeClass('myHidden');
        $('#langIta').addClass('myHidden');
        $('#lang').removeClass('myHidden');
    });

    $('.carousel').carousel('cycle')
})
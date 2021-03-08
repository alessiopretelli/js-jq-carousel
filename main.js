$(document).ready(function() {

    $('.nav i').css('cursor', 'pointer');

    $('.prev').click(

        function() {
            prevImg();
        }

    )

    $('.next').click(

        function() {
            nextImg();
        }

    );

    $('.nav i').click(

        function() {
            changeI($(this).index());
        }

    )

});

$(document).keydown(function(k){

    if (k.keyCode == 37) { 
        prevImg();
    }

    if (k.keyCode == 39) {
        nextImg();
    }

});

function prevImg() {
    var img = $('img.active');
    var i = $('i.active');

    img.removeClass('active');
    i.removeClass('active');

    if(img.hasClass('first')) {
        $('img.last').addClass('active');
        $('i.last').addClass('active');
    } else {
        img.prev('img').addClass('active');
        i.prev('i').addClass('active');
    }

}

function nextImg() {
    var img = $('img.active');
    var i = $('i.active');

    img.removeClass('active');
    i.removeClass('active');

    if(img.hasClass('last')) {
        $('img.first').addClass('active');
        $('i.first').addClass('active');
    } else {
        img.next('img').addClass('active');
        i.next('i').addClass('active');
    }

}

function changeI(ind) {
    var img = $('img.active');
    var i = $('i.active');
    var img_ind = $('.images img').eq(ind);
    var i_ind = $('.nav i').eq(ind);

    img.removeClass('active');
    i.removeClass('active');

    img_ind.addClass('active');
    i_ind.addClass('active');    
}
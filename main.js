$(document).ready( function() {

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
$( document ).ready(function() {
    
    $('a[href^="#"]').on('click', function (e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
           'scrollTop': $target.offset().top 
        }, 1000, 'swing', function(){
           window.location.hash = target;
        });

    })

    $('img[href^="#"]').on('click', function (){
        

        $('html, body').animate({
            'scrollTop': window.scrollTo(0, 0)
         }, 1000, 'swing', window.scrollTo(0, 0));

    })

});
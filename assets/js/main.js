$(document).ready(function() {
    $('.valentines-day').click(function() {
        $('.front').addClass('open');
        setTimeout(function() {
            $('.valentines-day').fadeOut(500, function() {
                $('#card').addClass('visible');
                // Iniciar música si existe
                const audio = document.getElementById('musicaFondo');
                if(audio) {
                    audio.play();
                }
            });
        }, 600);
    });

    $('#card').click(function() {
        $(this).removeClass('visible');
        setTimeout(function() {
            $('.front').removeClass('open');
            $('.valentines-day').fadeIn(500);
        }, 500);
        // Pausar música si existe
        const audio = document.getElementById('musicaFondo');
        if(audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});

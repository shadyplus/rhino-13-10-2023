if (document.getElementById('countdownTimer')) {
    var min = document.getElementById('countdownTimer').getAttribute('data-minutes');
    var sec = document.getElementById('countdownTimer').getAttribute('data-seconds');

    function countDown() {
        sec--;
        if (sec == -01) {
            sec = 59;
            min = min - 1;
        } else {
            min = min;
        }

        if (sec <= 9) {
            sec = "0" + sec;
        }

        time = (min <= 9 ? "" + min : min) + ":" + sec;

        if (document.getElementById) {
            document.getElementById('countdownTimer').innerHTML = time;
        }

        SD = window.setTimeout("countDown();", 1000);
        if (min == '00' && sec == '00') {
            sec = "00";
            window.clearTimeout(SD);
        }
    }



};
$(document).ready(function() {
    $('.pre_toform').click(function(evt) {
        evt.preventDefault();
        $("html, body").animate({
            scrollTop: $('#form').offset().top
        }, 1000);
        return false;
    });
});

var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('js-super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.form').slideDown();
            countDown();
        }, 10000);
        wheel.classList.add('rotated');
    }
}

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
    var top = $('#form').offset().top;
    $('body,html').animate({
        scrollTop: top
    }, 800);
});
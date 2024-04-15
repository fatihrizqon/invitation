
AOS.init();
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2500
    });
});
document.documentElement.style.setProperty('--animate-duration', '2s');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const to = urlParams.get('to');

if (to != null) document.getElementById("to").innerHTML = `Mr./Ms./Mrs. ${to}`;

startMusic = () => {
    $('#preloader').addClass('d-none');
    var audio = document.querySelector('audio');
    var promise = audio.play();
    if (typeof promise !== 'undefined') {
        promise.then(function () {
            // auto-play started!
            console.log('audio started...');
            audio.volume = 0.25;
        }).catch(function (error) {
            // auto-play failed
            console.log(error);
        });
    }
}

document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});

document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode === 67 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};

$(document).keypress("u", function (e) {
    if (e.ctrlKey) {
        return false;
    }
    else {
        return true;
    }
});
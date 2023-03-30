const audio = document.querySelector('.audio');
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

// Mengatur waktu akhir perhitungan mundur

var countDownDate = new Date("Sept 19, 2025 11:00:00").getTime();
// Memperbarui hitungan mundur setiap 1 detik
var x = setInterval(function() {
// Untuk mendapatkan tanggal dan waktu hari ini
var now = new Date().getTime();
// Temukan jarak antara sekarang dan tanggal hitung mundur
var distance = countDownDate - now;

// Perhitungan waktu untuk hari, jam, menit dan detik
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

const hari = document.querySelector('.hari');
const jam = document.querySelector('.jam');
const menit = document.querySelector('.menit');
const detik = document.querySelector('.detik');
hari.innerHTML = days; 
jam.innerHTML = hours; 
menit.innerHTML = minutes;
detik.innerHTML = seconds;

  // Jika hitungan mundur selesai, tulis beberapa teks 
  if (distance < 0) {
        clearInterval(x);
        hari.innerHTML = 0; 
        jam.innerHTML = 0; 
        menit.innerHTML = 0;
        detik.innerHTML = 0;
  }
}, 1000);


document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('copy')) {
        copas = e.target.dataset.p; 
        await navigator.clipboard.writeText(copas); 
        Swal.fire(
            'Good job!',
            'Copy Success!',
            'success'
        );
    }
})

$('.link').on('click', function(e) {
    e.preventDefault();
    href = $(this).attr('href'); 
    href = $(href); 
    href = href.offset().top + 200;
    $('html').animate({
        scrollTop: href
    }, 1000, 'easeInOutExpo');
})

gsap.from('.img1', {
    duration: 1.5, 
    x:'100%', 
    opacity:0, 
    ease: "bounce.out",
})
gsap.from('.img2', {
    duration: 1.5, 
    x:'-100%', 
    opacity:0, 
    ease: "bounce.out",
})

gsap.from('.title-description', {
    y: '-100%', 
    opacity: 0, 
    duration: 2,
    delay:1,
})

$('.time').each((index, item) => {
    setTimeout(() => {
        setTimeout(() => {
            $('.time').eq(index).addClass('muncul'); 
        }, index * 500);
    }, 2000);
})


$('.box').each((index,item) => {
    item.dataset.aos = 'fade-up'; 
    item.dataset.aosDuration = index * 1000;   
})

$('.image-galery').each((index, item) => {
    if(index % 2 == 0) {
        item.dataset.aos = 'fade-right'; 
        item.dataset.aosDuration = index * 500;
    } else {
        item.dataset.aos = 'fade-right';
        item.dataset.aosDuration = index * 500;
    }
}) 

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



const bukaundangan = document.querySelector('.open-wedding');
const result       = String(bukaundangan); 
if(result == 'null') {
    console.log("No Happen");
    $('.title').addClass('bukadong'); 
    $('.myicon').css({'display':'block'})
    audio.play();
} else {
    console.log("happend");
    bukaundangan.addEventListener('click', function() {
        $('.myicon').css({'display':'block'})
        $('.title').addClass('bukadong'); 
        $('.invite').addClass('buka'); 
        $('html').animate({
            scrollTop: 0,
        },0);
        setCookie('login','true',1);
        audio.play();
    });
}




$(window).on('resize', function() {
    console.log($('.title').hasClass('bukadong'));
    let ukuranwindow = this.screen.width; 
    if(ukuranwindow <= 683 && $('.title').hasClass('bukadong')) {
        $('.nav').css({'display':'block'});        
    } 
});
$(window).on('load', function() {
    audio.play();
    let ukuranwindow = this.screen.width; 
    if(ukuranwindow <= 683 && $('.title').hasClass('bukadong')) {
        $('.nav').css({'display':'block'});
        $('.open-wedding').hide(); 
    } 
});


$('.myicon').on('click', function() {
    let icon = document.querySelector('.myicon i');
    if(icon.classList.contains('fa-pause')) {
        this.innerHTML = '<i class="fa fa-play"></i>';
        audio.pause();
    } else {
        this.innerHTML = '<i class="fa fa-pause"></i>';
        audio.play();
    }
})

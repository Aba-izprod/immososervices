const medias = document.querySelectorAll('.bulle');
const logo = document.querySelector('.logo');
const profile_info = document.getElementsByClassName('profile-info');

const TL = gsap.timeline({paused: true});
window.addEventListener('load', () => {
    TL.staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.3, '-=1');
    gsap.fromTo(logo, {y: 0}, {repeat: 1, yoyo: true, duration: 1, ease: "back.out(1.7)", y: -100});
    TL.play();    
})

$('.logo').on('click', function() {
    TL.staggerFrom(medias, 1, {right :-200, ease: "power1.out"}, 0.3, '-=1');
    TL.play();
});

for(let i=0; i < $('.profile-card').length; i++) {
    $('.profile-card').eq(i).mouseover(function() {
        TL.staggerFrom(profile_info[i], 1, {scale : 1, y:0}, 0.3);
        TL.play();
    })
    $('.profile-card').eq(i).mouseout(function() {
        TL.revert();
    })
}






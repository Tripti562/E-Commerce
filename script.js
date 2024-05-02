$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
document.getElementById('menu').addEventListener('click', function(){
    console.log('clicke');
    document.getElementById('menuham').classList.add('actives');
})
document.getElementById('btn-close').addEventListener('click', function(){
    document.getElementById('menuham').classList.remove('actives');
})

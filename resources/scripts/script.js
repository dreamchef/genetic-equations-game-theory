document.addEventListener('DOMContentLoaded', function() {

    var controller = new ScrollMagic.Controller();



    gsap.to("#background", {
        duration: 2,
        opacity: 1
    });
    


    new ScrollMagic.Scene({
        duration: "50%"
    })
    .setTween("#mainTitle", {opacity: 0})
    .addTo(controller);
    


    new ScrollMagic.Scene({
        triggerElement: "#slide2",
        duration: "50%"
    })
    .setTween("#introduction", {opacity: 1})
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#slide3",
        duration: "50%"
    })
    .setTween("#introduction", {opacity: 0})
    .addTo(controller);



    new ScrollMagic.Scene({
        triggerElement: "#slide4",
        duration: "50%"
    })
    .setTween(gsap.to('#motiv1', 2, {x: '0%'}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#slide5",
        duration: "50%"
    })
    .setTween(gsap.to('#motiv2', 2, {x: '0%'}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#slide6",
        duration: "50%"
    })
    .setTween(gsap.to('#motiv3', 2, {x: '0%'}))
    .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: "#slide7",
        duration: "50%"
    })
    .setTween("#introduction2", {opacity: 0})
    .addTo(controller);

    

    
});
document.addEventListener('DOMContentLoaded', function() {
    // Create a ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Fade out #mainTitle as you scroll down
    new ScrollMagic.Scene({
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween("#mainTitle", {opacity: 0}) // fade out the #centeredTitle element
    .addTo(controller); // add the scene to the controller
    
    // Fade in #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide2", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween("#introduction", {opacity: 1}) // fade in the #centeredText element
    .addTo(controller); // add the scene to the controller

    // Fade out #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide3", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween("#introduction", {opacity: 0}) // fade in the #centeredText element
    .addTo(controller); // add the scene to the controller




    // Fade in #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide4", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween("#introduction2", {opacity: 1}) // fade in the #centeredText element
    .addTo(controller); // add the scene to the controller

    // Fade out #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide4", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween(gsap.to('#motiv1', 2, {x: '0%'})) // Use GSAP to animate the element sliding in from the left
    .addTo(controller); // Add the scene to the controller

    // Fade out #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide5", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween(gsap.to('#motiv2', 2, {x: '0%'})) // Use GSAP to animate the element sliding in from the left
    .addTo(controller); // Add the scene to the controller

    // Fade out #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide6", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween(gsap.to('#motiv3', 2, {x: '0%'})) // Use GSAP to animate the element sliding in from the left
    .addTo(controller); // Add the scene to the controller



    // Fade out #centeredText as you continue to scroll down
    new ScrollMagic.Scene({
        triggerElement: "#slide7", // trigger animation when this element is in view
        duration: "50%" // the animation will last for 50% of the viewport height
    })
    .setTween("#introduction2", {opacity: 0}) // fade in the #centeredText element
    .addTo(controller); // add the scene to the controller

    



    // Function to re-enable scrolling
    function enableScrolling() {
        console.log("Scrolling enabled");
        document.body.style.overflow = 'visible';
        document.documentElement.style.overflow = 'visible';
    }

    gsap.to("#background", {
        duration: 2, // Adjust the duration as needed
        opacity: 1, // Animate to full opacity
        onComplete: enableScrolling // Call the function to re-enable scrolling
    });
});
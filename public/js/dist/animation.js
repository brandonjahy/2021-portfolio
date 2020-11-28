

//  ANIMATIONS

//ABOUT SCROLL
const aboutScroll = gsap.timeline();

aboutScroll.fromTo('.about-block', {
    x: '-100%',
    opacity: 0
}, {
    x: 0,
    opacity: 1 
})


const aboutEl = document.querySelector('.about-block');

let homeController = new ScrollMagic.Controller();

let aboutScene = new ScrollMagic.Scene({
    triggerElement: '#about',
    triggerHook: .7,
    duration: 500
})
.setTween(aboutScroll)
.addIndicators()
.addTo(homeController);

//SKILL SCROLL
const skillScroll = gsap.timeline();

skillScroll.fromTo('.skill-block', {
    y: '100%',
    opacity: 0
}, {
    y: 0,
    opacity: 1
})
.fromTo('.image-block', {
    x: '100%',
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1
})

const skillEl = document.querySelector('.skill-block');

let skillScene = new ScrollMagic.Scene({
    triggerElement: '#skills',
    triggerHook: .3,
    duration: 300
})
.setTween(skillScroll)
.addIndicators()
.addTo(homeController);

// PROJECT SCROLL
const projectScroll = gsap.timeline();

projectScroll.fromTo('.project-grid .title', {
    opacity: 0
}, {
    opacity: 1
})
.fromTo('.project1', {
    y: '100%',
    opacity: 0
}, {
    y: 0,
    opacity: 1 ,
    duration: 1
}, '<1')
.fromTo('.project2', {
    y: '100%',
    opacity: 0
}, {
    y: 0,
    opacity: 1
})
.fromTo('.project3', {
    y: '100%',
    opacity: 0
}, {
    y: 0,
    opacity: 1
})
.fromTo('.project4', {
    y: '100%',
    opacity: 0
}, {
    y: 0,
    opacity: 1
})

let projectScene = new ScrollMagic.Scene({
    triggerElement: '#projects',
    triggerHook: .3,
    duration: 200
})
.setTween(projectScroll)
.addIndicators()
.addTo(homeController)

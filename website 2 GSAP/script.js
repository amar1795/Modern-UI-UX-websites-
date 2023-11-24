gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60
})
gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60
})

gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})

gsap.from("main #page1>h1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60
})


gsap.from("#page2 h1,#page2 h4,#page2 #about-us,#page2 #first-box",{
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#page2 #first-box",
        scoller:"#page2",
        start:"top 60%",
        // markers:true   
    }
})


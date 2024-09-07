function loco() {
    gsap.registerPlugin(ScrollTrigger);


    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

loco()

function swip() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 35,
      freeMode: true,
      grabCursor: true,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
}
swip()

gsap.to(".nav1>h1", {
    scrollTrigger: {
        trigger: `.nav1>h1`,
        scroller: `#main`,
        start: `top -8%`,
        end: `bottom -14%`,
        scrub: 0.2,
        // markers: true
    },
    opacity: 0,
    zIndex: 0
})

gsap.to("#search-bar", {
    scrollTrigger: {
        trigger: `#search-bar`,
        scroller: `#main`,
        start: `1000% start`,
        end: `1000% start`,
        scrub: 0.2,
        onEnter: () => {
            gsap.to("#search-bar", {
                width: "15vw",
                duration: 0.3 
            })
        }
    },
    x: -680
});

gsap.from(".img-span", {
    y: 100,
    duration: 1.5,
    delay: 0.2
})

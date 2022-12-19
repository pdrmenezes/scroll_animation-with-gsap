gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".bottomContainer",
      pin: true,
      start: "top top",
      end: "+=250%",
      scrub: 1,
    },
    defaults: {
      ease: "none",
    },
  })
  .to(document.body, { delay: 0.3, backgroundColor: "#f0f0f0", color: "#111" }, "start")
  .to("span", { opacity: 0 }, "start")
  .to(".upper-container h1", { scale: 5 }, "start")
  .to(".upper-container h1", { opacity: 0 }, "start")
  .to(".bottomText", { delay: 0.1, scale: 5 }, "start")
  .to(".bottomText", { delay: 0.4, opacity: 1 }, "start")

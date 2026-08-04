Shery.mouseFollower();

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.hoverWithMediaCircle(".hover-target" /* Element to target.*/, {
//   images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  videos: ["video_1.mp4", "video_2.mp4" , "video_3.mp4"],
});

gsap.to(".aboutproject", {
  scrollTrigger: {
    trigger: "#pimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: "power1",
});


let sections = document.querySelectorAll(".aboutproject");
Shery.imageEffect("#pright", {
  style: 4,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});
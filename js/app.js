import { TimelineLite, Power2 } from "gsap";

const navButton = document.querySelector(".nav-button");
const navOpen = document.querySelector(".nav-open");

// const tween = TweeenLite.to(".cover", 1, {
//   width: "40%"
// });

const tl = new TimelineLite({ pause: true, reverse: true });

tl.to(".cover", 1, {
  width: "60%",
  ease: Power2.easeInOut
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeInOut
    },
    "-=0.5"
  )
  .fromTo(
    ".nav-open",
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeInOut
    },
    {
      opacity: 1,
      x: 0,
      onComplete: function() {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      }
    }
  );

navButton.addEventListener("click", () => {
  if (tl.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  tl.toggleTween(tl);
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

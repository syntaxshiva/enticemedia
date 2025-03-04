gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);


//hover viedios
document.querySelectorAll("#hoverVideo").forEach((videoU, index) => {
  const video = document.querySelectorAll("#hoverVideo2")[index];
  
  videoU.addEventListener("mouseenter", function() {
    video.play();
    video.muted = false; // Unmute when playing
  });

  videoU.addEventListener("mouseleave", function() {
    video.pause();
  });
});

const words = ["Influencer Marketing", "Brand Promotions", "Website Designs"];
let index = 0;
function typeEffect(){
    gsap.to(".cont h2", {
        duration: 1.5,
        text: words[index],   // Set the text dynamically
        ease: "power1.inOut",
        onComplete: () => {
          setTimeout(() => {
            gsap.to(".cont h2", {
              duration: 1,
              text: "🫡",  // Clears the text (Backspace effect)
              ease: "power1.inOut",
              onComplete: () => {
                index = (index + 1) % words.length;  // Move to next word
                typeEffect();  // Restart the function
              }
            });
          }, 1000);  // Wait time before erasing text
        }
      });
  }
  typeEffect();

  gsap.to(".v2", {
    x: "-500%",
    ease: "power2.out",
    
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end:"+=200%",
        scrub: 2,
        pin: true,
       
    }
});
gsap.to(".cont1", {
    opacity: 0,
    duration: 5,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".page2",
        start: "top top",
        end: "bottom center",
        scrub: 1
    }
});
document.querySelectorAll(".counter").forEach((counter) => {
    let targetValue = parseInt(counter.getAttribute("data-count")); // Get final number

    gsap.fromTo(
        counter,
        { innerHTML: 0 }, // Start from 0
        {
            innerHTML: targetValue, // Animate to target value
            duration: 3, // Duration of counting
            ease: "power2.out",
            scrollTrigger: {
                trigger: counter,
                start: "top 80%", // Starts when 80% in viewport
                toggleActions: "play none none none",
            },
            snap: { innerHTML: 1 }, // Increments by 1
            onUpdate: function () {
                counter.innerHTML = Math.floor(counter.innerHTML); // Remove decimal points
            },
        }
    );
});
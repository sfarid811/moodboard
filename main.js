gsap.from(".column", {
    duration: 2,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });
  
  document.querySelectorAll(".column").forEach(function(box) {
    box.addEventListener("click", function() {
      gsap.to(".column", {
        duration: 0.5, 
        opacity: 0, 
        y: -100, 
        stagger: 0.1,
        ease: "back.in"
      });
    });
  });
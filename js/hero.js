tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 60, // --- CHANGED --- Reduced the number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // --- CHANGED --- A soft white for an atmospheric feel
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4, // --- CHANGED --- Slightly less opaque
      random: true,
    },
    size: {
      value: 2, // --- CHANGED --- Made particles smaller
      random: true,
    },
    links: {
      enable: false, // --- CHANGED --- This is the key change to remove the lines
    },
    move: {
      enable: true,
      speed: 0.3, // --- CHANGED --- Very slow, gentle speed
      direction: "right", // --- CHANGED --- Consistent direction, like wind
      random: false,
      straight: true, // --- CHANGED --- Particles move in straight lines
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false, // --- CHANGED --- Disabled mouse hover effects
      },
      onclick: {
        enable: false, // --- CHANGED --- Disabled mouse click effects
      },
      resize: true,
    },
  },
  detectRetina: true,
});

tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 15, // --- CHANGED --- Fewer, more impactful clouds
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff", // --- CHANGED --- White is best for clouds
    },
    shape: {
      type: "image", // --- CHANGED --- Use an image instead of a circle
      image: {
        src: "images/cloud.svg", // --- CHANGED --- Path to your new cloud image
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 }, // Varies opacity for depth
    },
    size: {
      value: { min: 20, max: 50 }, // --- CHANGED --- Clouds are much larger than particles
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.5, // --- CHANGED --- Very slow, graceful speed for clouds
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false, // Interactivity is distracting for clouds
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  detectRetina: true,
});

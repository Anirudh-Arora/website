tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 50, // --- CHANGED --- Reduced for a cleaner look
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#0c081e",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: { min: 0.1, max: 0.5 }, // --- CHANGED --- Varies opacity for depth
      random: true,
    },
    size: {
      value: { min: 1, max: 3 }, // --- CHANGED --- Varies size for a 3D effect
      random: true,
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1, // --- CHANGED --- Slightly faster, but still gentle
      direction: "none", // --- CHANGED --- Particles move in random directions
      random: true,
      straight: false, // --- CHANGED --- Allows for non-linear paths
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  detectRetina: true,
});

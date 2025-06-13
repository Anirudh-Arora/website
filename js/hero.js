tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80, // Number of particles
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#0c081e", // Particle color, matching your text
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.5,
      random: true,
    },
    size: {
      value: 3,
      random: true,
    },
    links: {
      enable: true,
      distance: 150,
      color: "#0c081e", // Line color
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1, // Slow movement
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse", // Particles move away from the cursor
      },
      onclick: {
        enable: true,
        mode: "push", // Adds more particles on click
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  detectRetina: true,
});

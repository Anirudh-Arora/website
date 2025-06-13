tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 60, 
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#0c081e", // --- THE ONLY CHANGE IS HERE --- Changed from white to dark blue
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.4, 
      random: true,
    },
    size: {
      value: 2, 
      random: true,
    },
    links: {
      enable: false, 
    },
    move: {
      enable: true,
      speed: 0.3, 
      direction: "right", 
      random: false,
      straight: true, 
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

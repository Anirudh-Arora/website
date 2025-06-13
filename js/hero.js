tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 8, // Keeping the reduced cloud count
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "image",
      image: {
        src: "images/cloud.svg", // Using the new, better cloud shape
        width: 100,
        height: 70, // Adjusted to match the new SVG's aspect ratio
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
    },
    size: {
      value: { min: 30, max: 60 }, // Adjusted sizes for the new cloud shape
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.5,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: true,
        // --- CHANGED --- Using built-in modes is more reliable
        mode: ["destroy", "emitters"], 
      },
      resize: true,
    },
    modes: {
      // This mode automatically destroys the clicked particle
      destroy: {
        mode: "split",
        split: {
          count: 1, // We will handle the burst with our emitter instead
          particles: {
            color: {
              value: ["#5bc0eb", "#fde74c", "#9bc53d"], // Example split colors
            },
          },
        },
      },
      // This mode defines the emitter that will fire on click
      emitters: {
        name: "burst",
        life: {
          duration: 0.1,
          count: 1,
        },
        // The emitter will be placed at the cursor's position
        position: {
          x: 50,
          y: 50,
        },
        rate: {
          quantity: 10, // Fire 10 particles in the burst
          delay: 0.1,
        },
        particles: {
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 2 },
          },
          color: {
            value: "#0c081e", // Dark particles for contrast
          },
          move: {
            speed: { min: 5, max: 10 },
            direction: "outside",
            decay: 0.05,
          },
          opacity: {
            value: { min: 0.3, max: 0.8 },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
        },
      },
    },
  },
  detectRetina: true,
});

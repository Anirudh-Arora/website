tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 8,
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
        src: "images/cloud.svg",
        width: 100,
        height: 70,
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
    },
    size: {
      value: { min: 30, max: 60 },
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
        // --- THIS IS THE KEY FIX ---
        // We are enabling two modes at once: destroy the cloud, and trigger the emitter
        mode: ["destroy", "emitters"],
      },
      resize: true,
    },
    modes: {
      // This mode destroys the clicked particle
      destroy: {},
      
      // This mode defines the emitter that will be triggered on click
      emitters: {
        // Emitters will be placed at the cursor's position on click
        life: {
          duration: 0.2, // The emitter itself only lasts for a moment
          count: 1,      // It only fires once per click
        },
        rate: {
          quantity: 15,  // It creates 15 burst particles
          delay: 0,
        },
        particles: {
          // These are the properties of the "burst" particles
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          color: {
            value: "#0c081e", // Dark particles for contrast
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
            animation: {
              enable: true,
              speed: 3,
              sync: false,
              startValue: "max",
              destroy: "min", // Particles will fade out and disappear
            },
          },
          move: {
            speed: { min: 5, max: 10 },
            direction: "outside", // Explode outwards from the center
            gravity: {
                enable: false
            },
            trail: {
                enable: false
            },
            outModes: {
                default: "destroy"
            }
          },
        },
      },
    },
  },
  detectRetina: true,
});

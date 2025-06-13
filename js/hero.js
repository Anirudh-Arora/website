document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles-js", {
    // This is the base configuration for the clouds
    fpsLimit: 60,
    particles: {
      number: {
        value: 8,
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
        value: { min: 0.3, max: 0.7 },
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
    // This section tells the library to listen for clicks on the particles
    interactivity: {
      events: {
        onclick: {
          enable: true,
          mode: "repulse", // A placeholder mode to ensure clicks are registered
        },
      },
      modes: {
        repulse: { // This configuration is not used, just needed to enable the mode
            distance: 200,
            duration: 0.4,
        }
      }
    },
    detectRetina: true,
  })
  .then(container => {
    // This is the direct, manual control part that will work reliably.
    // It adds a listener that fires *only* when a particle is clicked.
    container.addParticleClickListener((event, particle) => {
      if (!particle) {
        return;
      }

      // 1. Define the "burst" emitter
      const emitterOptions = {
        life: {
          duration: 0.1,
          count: 1,
        },
        position: particle.getPosition(), // Use the exact cloud position
        particles: {
          // Properties of the small burst particles
          color: {
            value: "#0c081e",
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            speed: { min: 5, max: 10 },
            direction: "outside",
            decay: 0.1,
          },
          opacity: {
            value: { min: 0.1, max: 0.5 },
            animation: {
              enable: true,
              speed: 5,
              destroy: "min",
            },
          },
        },
      };

      // 2. Add the emitter to create the burst
      container.addEmitter(emitterOptions);

      // 3. Destroy the original cloud
      particle.destroy();
    });
  });
});

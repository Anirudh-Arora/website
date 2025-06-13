document.addEventListener("DOMContentLoaded", () => {
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
        // --- THIS IS THE KEY ---
        // We tell the library to listen for clicks on particles
        onclick: {
          enable: true,
          mode: "trail", // Using a dummy mode to ensure click detection is active
        },
        resize: true,
      },
    },
    detectRetina: true,

  }).then(container => {
    // --- THIS IS OUR CUSTOM LOGIC THAT WILL NOW WORK ---
    // We add a listener that fires specifically when a particle is clicked
    container.canvas.element.addEventListener("particleClicked", (event) => {
      const { particle } = event.detail;

      if (!particle) {
        return;
      }
      
      // Configuration for the "burst" particles
      const emitterOptions = {
        life: {
          duration: 0.1, // Emitter lasts for a very short time
          count: 1,      // Emits only once
        },
        // Place the emitter at the exact position of the clicked cloud
        position: particle.getPosition(),
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          size: {
            value: { min: 1, max: 2 },
          },
          color: {
            value: "#0c081e", // Dark particles for good contrast
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
              destroy: "min", // Particles fade out and disappear
            },
          },
        },
      };

      // Create the burst emitter
      container.addEmitter(emitterOptions);
      
      // Destroy the original cloud particle
      particle.destroy();
    });
  });
});

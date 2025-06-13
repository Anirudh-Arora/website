document.addEventListener("DOMContentLoaded", () => {
  tsParticles.load("particles-js", {
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
    // --- THIS IS THE KEY FIX ---
    // The entire interactivity block has been removed from the initial config.
    // We will handle all interactivity manually in the '.then()' block below.
    detectRetina: true,

  }).then(container => {
    // This adds a listener that fires *only* when a particle (a cloud) is clicked.
    // This is the clean and direct way to handle this custom interaction.
    container.addParticleClickListener((event, particle) => {
      
      // Ensure a particle was actually clicked
      if (!particle) {
        return;
      }

      // 1. Define the properties of our "burst" emitter
      const emitterOptions = {
        life: {
          duration: 0.1, // Emitter itself is instantaneous
          count: 1,      // It fires only once
        },
        position: particle.getPosition(), // Use the exact coordinates of the clicked cloud
        particles: {
          // These are the properties for the small particles in the burst
          color: {
            value: "#0c081e", // Dark color for contrast
          },
          size: {
            value: { min: 1, max: 2 },
          },
          opacity: {
            value: { min: 0.4, max: 0.8 },
            animation: { // This makes them fade out
              enable: true,
              speed: 4,
              destroy: "min",
            },
          },
          move: {
            speed: { min: 5, max: 10 }, // They move fast
            direction: "outside",       // They explode outwards
            decay: 0.1,                 // They slow down as they travel
          },
        },
      };

      // 2. Add the emitter to the scene to create the burst
      container.addEmitter(emitterOptions);

      // 3. Immediately destroy the original cloud that was clicked
      particle.destroy();
    });
  });
});

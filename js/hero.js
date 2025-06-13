// --- MODIFIED --- We now use the .then() method to get the container instance
// This allows us to add custom click logic after the particles have loaded.
tsParticles.load("particles-js", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 8, // --- CHANGED --- Reduced cloud count for a cleaner feel
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
        height: 100,
      },
    },
    opacity: {
      value: { min: 0.2, max: 0.6 },
    },
    size: {
      value: { min: 20, max: 50 },
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
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: true, // --- CHANGED --- Enable clicks
        mode: "particle", // --- CHANGED --- Tell the library we want to handle particle-specific clicks
      },
      resize: true,
    },
  },
  detectRetina: true,
}).then(container => {
  // --- NEW --- This is our custom logic for the "burst" effect
  // This function will be called every time a particle is clicked
  container.particles.addClickHandler((event, particles) => {
    if (particles.length > 0) {
      const clickedParticle = particles[0];

      // Configuration for the "burst" particles
      const emitterOptions = {
        life: {
          duration: 0.1, // Emitter lasts for a very short time
          count: 1,      // Emits only once
        },
        position: {
          x: clickedParticle.position.x,
          y: clickedParticle.position.y,
        },
        size: {
          width: 0,
          height: 0,
        },
        particles: {
          size: {
            value: { min: 1, max: 3 }, // The burst particles are tiny
          },
          color: {
            value: clickedParticle.getFillColor(), // Burst matches cloud color
          },
          move: {
            speed: { min: 5, max: 10 }, // Move fast
            direction: "outside",       // Explode outwards
            decay: 0.05,                // Slow down quickly
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

      // Create the burst
      container.addEmitter(emitterOptions);
      
      // Destroy the original cloud
      clickedParticle.destroy();
    }
  });
});

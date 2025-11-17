// src/components/ParticlesBackground.jsx
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Importa o motor slim
import { useMemo } from "react";

// Esta função será passada como uma propriedade para o componente Particles
const particlesInit = async (engine) => {
  await loadSlim(engine);
};

function ParticlesBackground() {
  // As opções de configuração são as mesmas de antes
  const particleOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#1A1A1A",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 80,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#6A0DAD",
        },
        links: {
          color: "#FF7F50",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit} // Passamos a função de inicialização aqui
      options={particleOptions}
    />
  );
}

export default ParticlesBackground;

// src/components/HeroScene.jsx
import React from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import PulsingSun from "./PulsingSun";
import OrbitingPlanets from "./OrbitingPlanets";
import StarDust from "./StarDust";
import CometTrail from "./CometTrail";

function HeroScene({ mousePosition }) {
  useThree(({ scene }) => {
    scene.background = new THREE.Color("#1A1A1A");
  });

  return (
    <>
      {/* --- ILUMINAÇÃO DE TRÊS PONTOS --- */}

      {/* 1. Luz Principal (Key Light): Forte, vindo de cima e da direita. */}
      <pointLight color="white" intensity={150} position={[10, 10, 5]} />

      {/* 2. Luz de Preenchimento (Fill Light): Mais fraca, vindo da esquerda, para suavizar as sombras. */}
      <pointLight color="#FF7F50" intensity={50} position={[-10, -5, 5]} />

      {/* 3. Luz de Fundo (Back Light): Vindo de trás, para criar um contorno brilhante. */}
      <pointLight color="#6A0DAD" intensity={100} position={[0, 0, -10]} />

      {/* O resto da cena permanece o mesmo */}
      <PulsingSun />
      <OrbitingPlanets />
      <StarDust />
      <CometTrail mousePosition={mousePosition} />
    </>
  );
}

export default HeroScene;

// src/data/projectsData.js

// Importe todas as imagens aqui
import project1Image from "../assets/projeto-1.png";
import project2Image from "../assets/projeto-2.png";
import project3Image from "../assets/projeto-dataage-1.png";
import project4Image from "../assets/clinica1.jpg";
import project5Image from "../assets/clinica2.jpg";
import project6Image from "../assets/auto-sport1.jpg";
import project7Image from "../assets/auto-sport2.jpg";
import project8Image from "../assets/auto-sport3.jpg";

export const projects = [
  {
    id: "projeto-1", // ID único para a URL
    title: "Clínica Médica",
    category: "Website Institucional",
    mainImage: project1Image,
    liveUrl: "https://www.google.com", // Substituir pelo link real
    client: "Nome da Clínica",
    services: "UI/UX Design, Desenvolvimento Web",
    technologies: "React, CSS Modules",
    challenge:
      "A clínica precisava de uma presença online profissional para atrair novos pacientes e facilitar o agendamento de consultas. O site antigo era lento e não funcionava bem em dispositivos móveis.",
    solution:
      "Desenvolvemos um site institucional moderno e rápido, com foco na experiência do usuário. A nova interface é intuitiva, e a implementação de um design responsivo garante uma experiência perfeita em qualquer tela. Um formulário de pré-agendamento foi integrado para otimizar o fluxo de novos pacientes.",
    gallery: [project1Image, project4Image, project5Image], // Adicionar mais imagens do projeto
  },
  {
    id: "projeto-2",
    title: "Tapeçaria Automotiva",
    category: "Website Institucional",
    mainImage: project2Image,
    liveUrl: "#",
    client: "Nome da Tapeçaria",
    services: "Desenvolvimento Web, SEO",
    technologies: "React, Vite",
    challenge:
      "O desafio era criar um portfólio online para mostrar a qualidade do trabalho artesanal da tapeçaria, que até então dependia apenas de fotos em redes sociais.",
    solution:
      "Criamos uma galeria de alta resolução com filtros por tipo de serviço. O design foca na qualidade visual dos projetos, transmitindo confiança e profissionalismo. Otimizações de SEO foram implementadas para atrair clientes locais que buscam por serviços de tapeçaria automotiva.",
    gallery: [project2Image, project6Image, project7Image, project8Image],
  },
  {
    id: "projeto-3",
    title: "ERP - Data Age",
    category: "Aplicação Web",
    mainImage: project3Image,
    liveUrl: "#",
    client: "Data Age Systems",
    services: "Desenvolvimento de Interface",
    technologies: "React, Styled-Components",
    challenge:
      "Modernizar a interface de um sistema de ERP legado, tornando-a mais intuitiva e agradável para os usuários finais, sem alterar o back-end existente.",
    solution:
      "Reconstruímos toda a camada de front-end com React, criando uma biblioteca de componentes reutilizáveis. A nova interface é mais limpa, rápida e totalmente responsiva, melhorando drasticamente a produtividade e a satisfação dos usuários do sistema.",
    gallery: [project3Image],
  },
];

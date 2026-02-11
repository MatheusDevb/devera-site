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
import project9Image from "../assets/dataage1.jpg";
import project10Image from "../assets/projeto-dataage-2.png";
import project11Image from "../assets/projeto-dataage-3.png";
import project12Image from "../assets/projeto-aram01.png";
import project13Image from "../assets/projeto-aram02.png";
import project14Image from "../assets/projeto-aram03.png";
import project15Image from "../assets/projeto-aram04.png";

export const projects = [
  {
    id: "projeto-1", // ID único para a URL
    title: "Clínica Médica",
    category: "Website Institucional",
    mainImage: project1Image,
    liveUrl: "https://www.google.com", // Substituir pelo link real
    client: "Clínica Vida e Saúde",
    services: "UI/UX Design, Desenvolvimento Web",
    technologies: "React, CSS Modules",
    challenge:
      "Criar uma presença digital que refletisse a excelência e o cuidado da Clínica Vida e Saúde. O desafio era desenvolver uma plataforma online moderna, responsiva e intuitiva, capaz de atrair novos pacientes e simplificar o processo de agendamento de consultas. Era essencial garantir uma experiência fluida em todos os dispositivos, especialmente mobile e transmitir credibilidade e profissionalismo em cada detalhe. O site precisava funcionar como uma extensão digital da clínica: acolhedor, confiável e focado em facilitar o acesso aos serviços de saúde de qualidade que a clínica oferece.",
    solution:
      "Desenvolvemos um site institucional moderno e rápido, com foco na experiência do usuário. A nova interface é intuitiva, e a implementação de um design responsivo garante uma experiência perfeita em qualquer tela. Um formulário de pré-agendamento foi integrado para otimizar o fluxo de novos pacientes.",
    gallery: [project1Image, project4Image, project5Image], // Adicionar mais imagens do projeto
  },
  {
    id: "projeto-2",
    title: "Tapeçaria Automotiva",
    category: "Website Institucional",
    mainImage: project2Image,
    liveUrl: "https://dataage.com.br/tapecariaautosport/index.html",
    client: "Auto Sport Tapeçaria",
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
    liveUrl: "https://dataage.com.br/",
    client: "Data Age Systems",
    services: "Desenvolvimento de Interface",
    technologies: "React, Styled-Components",
    challenge:
      "Modernizar a interface de um sistema de ERP legado, tornando-a mais intuitiva e agradável para os usuários finais, sem alterar o back-end existente.",
    solution:
      "Reconstruímos toda a camada de front-end com React, criando uma biblioteca de componentes reutilizáveis. A nova interface é mais limpa, rápida e totalmente responsiva, melhorando drasticamente a produtividade e a satisfação dos usuários do sistema.",
    gallery: [project3Image, project9Image, project10Image, project11Image],
  },
  {
    id: "projeto-4",
    title: "Aram Ambiental",
    category: "Website Institucional",
    mainImage: project12Image,
    liveUrl: "https://aramambiental.com.br/",
    client: "Aram Ambiental Consultoria",
    services: "UI/UX Design, Desenvolvimento Web, SEO",
    technologies: "React, Vite, CSS Modules, EmailJS",
    challenge:
      "Estabelecer uma presença digital profissional e estratégica para uma consultoria ambiental que precisava comunicar sua expertise técnica de forma acessível e inspiradora. O desafio era criar um site que transmitisse credibilidade e autoridade no setor ambiental, destacando os serviços de consultoria de forma clara e objetiva, enquanto mantinha um design moderno e alinhado com os valores de sustentabilidade da empresa. Era essencial que a plataforma fosse responsiva, de fácil navegação e otimizada para atrair clientes corporativos que buscam soluções ambientais sérias e confiáveis.",
    solution:
      "Desenvolvemos um website institucional com design clean e profissional, utilizando React e Vite para garantir alta performance e velocidade de carregamento. Criamos uma arquitetura de informação estratégica que organiza os serviços de consultoria de forma intuitiva, facilitando a jornada do visitante desde a descoberta até o contato. O design incorpora elementos visuais que remetem à natureza e sustentabilidade, reforçando a identidade da marca. Implementamos formulários de contato integrados via EmailJS e otimizamos o site para SEO, aumentando a visibilidade nos buscadores e atraindo leads qualificados do setor corporativo.",
    gallery: [project12Image, project13Image, project14Image, project15Image],
  },
];

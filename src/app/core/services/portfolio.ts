import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { Project } from '../models/project';
import { Education } from '../models/education';
import { Testimonial } from '../models/testimonial';
import { Achievement } from '../models/achievement';

@Injectable({ providedIn: 'root' })
export class PortfolioService {

  getSkills(): Skill[] {
    return [
      { id: 'html',   name: 'HTML',       icon: 'assets/images/skills/html.png',   description: 'Conocimiento para estructurar sitios web.' },
      { id: 'css',    name: 'CSS',        icon: 'assets/images/skills/css.png',    description: 'Conocimiento para diseñar sitios web.' },
      { id: 'java',   name: 'Java',       icon: 'assets/images/skills/java.png',   description: 'Lenguaje para POO y Estructuras de Datos.' },
      { id: 'js',     name: 'JavaScript', icon: 'assets/images/skills/js.png',     description: 'Lenguaje para manipulación del DOM en páginas web.' },
      { id: 'github', name: 'GitHub',     icon: 'assets/images/skills/github.png', description: 'Control de versiones y colaboración. Utilizado en todos los proyectos.' },
      { id: 'vscode', name: 'VS Code',    icon: 'assets/images/skills/vscode.png', description: 'Entorno usado en proyectos y aprendizaje de nuevos lenguajes.' },
      { id: 'react',  name: 'React',      icon: 'assets/images/skills/react.png',  description: 'Librería para la creación de páginas web y aplicaciones móviles.' },
      { id: 'python', name: 'Python',     icon: 'assets/images/skills/python.png', description: 'Lógica de programación aprendida usando Python.' },
      { id: 'mysql',  name: 'MySQL',      icon: 'assets/images/skills/mysql.png',  description: 'Base de datos relacional.' },
      { id: 'r',      name: 'RStudio',    icon: 'assets/images/skills/rstudio.png',description: 'Entorno de desarrollo para Estadística.' },
      { id: 'figma',  name: 'Figma',      icon: 'assets/images/skills/figma.png',  description: 'Herramienta para prototipado de alta fidelidad.' },
      { id: 'django', name: 'Django',     icon: 'assets/images/skills/django.svg', description: 'Framework de Desarrollo Web y Móvil para Backend.' },
    ];
  }

  getProjects(): Project[] {
    return [
      {
        name: 'Mini Juegos basados en Estructuras de Datos',
        githubUrl: 'https://github.com/jairordtgz/data-structures-PAO-2-2024.git',
        technologies: 'Netbeans, VS Code, Java',
        objective: 'Aplicar los conocimientos en Estructuras de Datos tales como pilas, backtracing y Dijkstra.',
        imageUrl: 'assets/images/projects/proyectoestd.png',
        category: 'Escritorio',
      },
      {
        name: 'PredictNote',
        githubUrl: 'https://github.com/leno-mpm/Proyecto-Estad-stica.git',
        technologies: 'RStudio, Android Studio, R, Java',
        objective: 'Predecir el promedio aplicando Estadística descriptiva e inferencial para las carreras de Mecatrónica y Computación.',
        imageUrl: 'assets/images/projects/predict_note.jpg',
        category: 'Movil',
      },
      {
        name: 'SQL to Graph',
        githubUrl: 'https://github.com/jairordtgz/ProyectoAdmisionesKokoa.git',
        technologies: 'Vite + React, JavaScript, Tailwind CSS, MySQL',
        objective: 'Visualizar en forma de grafos la lógica tras el resultado de una consulta SQL usando JSON y API MySQL Visual Explain.',
        imageUrl: 'assets/images/projects/sql2graph.png',
        category: 'Web',
      },
      {
        name: 'AirMap',
        githubUrl: 'https://github.com/AngelPila/terra-watch-live.git',
        technologies: 'TypeScript, Python, PostgreSQL (Supabase)',
        objective: 'Predecir y postear sobre la calidad de aire en cualquier parte del mundo.',
        imageUrl: 'assets/images/projects/airmap_nsac.png',
        category: 'Web',
      },
      {
        name: 'VisuWallet: App para control de finanzas personales avanzado (PreTAWS)',
        githubUrl: 'https://github.com/mcpoveda2/VisuWallet.git',
        technologies: 'TypeScript, React Native, Tailwind CSS, Gemini 1.5 Flash, Ollama, Expo Go, Firebase',
        objective: 'Mantener el control de las finanzas con autocompletado de formularios mediante OCR.',
        imageUrl: 'assets/images/projects/visuwallet.jpg',
        category: 'Movil',
      },
      {
        name: 'MapGrove',
        githubUrl: 'https://github.com/PaulPer37/track2.git',
        technologies: 'Django, Python, HTML, Google Earth Engine API',
        objective: 'Predecir en base a dos variables (mm de agua de lluvia y nivel de marea INOCAR) qué zonas de la costa ecuatoriana quedarían inundadas, cantidad de población en riesgo y cuántas hectáreas de manglar actúan como barrera natural.',
        imageUrl: 'assets/images/projects/mapgrove_spacehack2026.jpeg',
        category: 'Web',
      },
      {
        name: 'API-REST-MIGO',
        githubUrl: 'https://github.com/devhangaroa/API-REST-MIGO.git',
        technologies: 'Django, Python',
        objective: 'Backend para sistema de brandeo de vehiculos, usado para el front de Administrador Web y App Movil MigoAds+',
        imageUrl: 'assets/images/projects/api-rest-migo.png',
        category: 'Web',
      },
    ];
  }

  getEducation(): Education[] {
    return [
      {
        institution: 'Unidad Educativa Claire Bucaram de Aivas',
        degree: 'Educación General Básica',
        period: '2013 - 2019'
      },
      {
        institution: 'Unidad Educativa Bilingüe Liceo Albonor',
        degree: 'Bachillerato Técnico en Informática',
        period: '2020 - 2023'
      },
      {
        institution: 'Escuela Superior Politécnica del Litoral',
        degree: 'Carrera de Ingeniería en Computación',
        period: '2023 - actualidad'
      },
    ];
  }

  getTestimonials(): Testimonial[] {
    return [
      {
        quote: 'Trabajar con Jairo fue una experiencia sumamente enriquecedora. Siempre demostró compromiso, iniciativa y una gran capacidad de adaptación a los cambios del proyecto.',
        authorName: 'Milena Pazmiño Montes',
        authorRole: 'Estudiante de Ingeniería en Computación',
        authorCompany: 'ESPOL'
      },
      {
        quote: 'Jairo aportó una visión estratégica al equipo de desarrollo, y su habilidad para resolver problemas complejos fue clave en el éxito del producto final.',
        authorName: 'Adriana Largo Morocho',
        authorRole: 'Estudiante de Ingeniería en Sistemas Inteligentes',
        authorCompany: 'ECOTEC'
      },
      {
        quote: 'Destaco la excelente comunicación y profesionalismo de Jairo, siempre dispuesto a escuchar, proponer y mejorar cada detalle del proyecto.',
        authorName: 'Gabriel Pelaez Avila',
        authorRole: 'Estudiante de Ingeniería en Computación',
        authorCompany: 'ESPOL'
      },
    ];
  }

  getAchievements(): Achievement[] {
    return [
      {
        title: 'Certificación Cambridge Nivel de Inglés B1',
        description: "Nivel actual en 'Use of English, Listening and Speaking'.",
      },
      {
        title: 'Space Hack for Sustainability — Marzo 2025',
        description: 'Participé en el hackaton estudiantil (mundial) donde se uso datos satelitales para crear propuestas de valor que resuelvan desafíos globales en el campo de la sostenibilidad. Forme parte del equipo 30 y nos enfocamos en analizar la relación entre sitios culturales y turismo en ciudades como Toronto, Nueva York, París e identificamos áreas culturales y "desiertos culturales". Ganamos el segundo lugar en la sede ESPOL.',
        imageUrl: 'assets/images/achievements/spacehack.jpg',
        imageAlt: 'Space Hack 2025'
      },
      {
        title: 'NASA Space Apps Challenge — Octubre 2025',
        description: 'Participé en el hackaton mundial con sede en ESPOL para dar solución al track: From EarthData to Action: Cloud Computing with Earth Observation Data for Predicting Cleaner, Safer Skies. Junto a mi equipo (GrupAP+) desarrollamos una web/red social para predecir y postear sobre la calidad del aire en tiempo real. Ganamos el primer lugar!!',
        imageUrl: 'assets/images/achievements/nsac.jpg',
        imageAlt: 'Nasa Space Apps Challenge Guayaquil 2025'
      },
    ];
  }
}
export interface TeamMember {
    slug: string;
    img: string;
    title: string;
    member: string | null;
    position: string;
    badges: string[];
    girl: boolean;
    specialties: string[];
    formation: string[];
    experience: string[];
  }
  
  export const cardsTeam: TeamMember[] = [
    {
      slug: "cristina-cruz",
      img: "../images/team/cristina.webp",
      title: "Cristina Cruz",
      member: "M-40931",
      position: "Psicóloga Sanitaria",
      badges: ["Infantil", "Juvenil", "Adultos"],
      girl: true,
      specialties: [
        "Apego y trauma",
        "Terapia Cognitivo Conductual",
        "Psicología Perinatal",
        "Ansiedad",
        "Trastornos del Estado de Ánimo",
        "Duelo",
      ],
      formation: [
        "Grado en Psicología (Universidad Complutense de Madrid)",
        "Máster en Psicología General Sanitaria (Universidad Complutense de Madrid)",
        "Experta en Psicoterapia Breve",
        "Formación en Trauma Psicológico (Asociación Española del Trauma Psicológico)",
      ],
      experience: [
        "Psicóloga en Fundación de atención a la infancia, familias y ámbito de salud",
        "Psicóloga Perinatal",
        "Investigación en Psicología de Emergencias y Desastres",
        "Psicooncología",
        "Psicóloga Infanto-Juvenil",
      ],
    },
    {
      slug: "siria-shahabi",
      img: "../images/team/siria.webp",
      title: "Siria Shahabi",
      member: "P-02972",
      position: "Psicóloga Sanitaria",
      badges: ["Adultos"],
      girl: true,
      specialties: [
        "Apego y trauma",
        "Diversidad sexual y de género",
        "Trastornos de personalidad.",
        "Ansiedad",
        "Regulación Emocional",
        "Depresión",
      ],
      formation: [
        "Grado en Psicología (Universidad Autónoma de Madrid)",
        "Máster en Psicología General Sanitaria (Universidad Pontificia Comillas Madrid)",
        "Máster en Psicoterapia Humanista, Experiencial y Terapia focalizada en la emoción (Universidad Pontificia de Comillas)",
        "Experta en Psicoterapia Integradora en Trauma y Apego con EMDR (NB Psicología)",
        "Experta en Psicopatología Integradora (NB Psicología)",
        "Experta en Psicología Afirmativa en Diversidad Sexual y de Género (COP Madrid)",
        "Experta en trastornos de personalidad (AEFDP)",
        "Experta en terapia de grupo (Quipú Psicólogos)"
      ],
      experience: [
        "Psicoterapia en plataforma online.",
        "Centro de psicología de psicoterapia integradora.",
        "Intervención psicoterapéutica con población juvenil y adulta.",
        "Coterapeuta en terapia grupal en programa de adicciones.",
        "Coterapeuta en terapia grupal en programa de mindfulness."
      ],
    },
    {
      slug: "lara-martin",
      img: "../images/team/lara.webp",
      title: "Lara Martín",
      member: "P-02494",
      position: "Psicóloga Sanitaria",
      badges: ["Infantil", "Juvenil", "Adultos"],
      girl: true,
      specialties: [
        "Apego y trauma",
        "Terapia Cognitivo Conductual",
        "Regulación emocional",
        "Ansiedad",
        "Trastornos de personalidad",
        "Estrés",
        "Relaciones y dependencia emocional",
        "Depresión",
        "Problemas en la infancia y adolescencia",
        "EMDR"
      ],
      formation: [
        "Grado en Psicología (Universidad de La Laguna)",
        "Máster en Psicología General Sanitaria (Universidad Fernando Pessoa- Canarias)",
        "Máster en Recursos Humanos (Universidad Camilo José Cela Madrid)",
        "Postgrado en Trauma Psicológico (Asociación Española de Trauma Psicológico)",
        "Psicóloga EMDR Nivel I Infanto-Juvenil y Adultos.",
        "Traumaterapia (COP Las Palmas)"
      ],
      experience: [
        "Psicóloga Autónoma en Centro de Psicología.",
        "Psicóloga Hogares de Protección de menores (Cabildo de Gran Canaria)",
        "Centro de Orientación Familiar de Gran Canaria.",
        "Psicóloga Gabinete Psicopedagógico infanto-juvenil."
      ],
    },
    {
      slug: "desire-reyes",
      img: "../images/team/desire.webp",
      title: "Desiré Reyes",
      member: "P-02299",
      position: "Psicóloga Sanitaria",
      badges: ["Infantil", "Juvenil", "Adultos"],
      girl: true,
      specialties: [
        "Apego y trauma",
        "Terapia Cognitivo Conductual",
        "Regulación emocional",
        "Ansiedad",
        "Problemas en la infancia y adolescencia",
        "Estrés",
        "Relaciones de pareja y dependencia emocional"
      ],
      formation: [
        "Grado en Psicología (Universidad de Salamanca)",
        "Máster en Psicología General Sanitaria (Universidad Fernando Pessoa- Canarias)",
        "Intervención en Trauma Psicológico.",
        "Traumaterapia (COP las palmas)",
        "Salud mental y discapacidad (plena inclusión canaria)",
        "Formación en Terapia familiar sistémica."
      ],
      experience: [
        "Psicóloga Sanitaria en ámbito privado.",
        "Psicóloga en Servicio de intervención con personas con trastornos graves de salud mental y problemas graves de conducta.",
        "Psicóloga en Centro Asistencial El Valle.",
        "Psicóloga en centro de atención para personas con discapacidad intelectual."
      ],
    },
    {
      slug: "marta-santana",
      img: "../images/team/marta.webp",
      title: "Marta Santana",
      member: "P-02296",
      position: "Psicóloga Sanitaria",
      badges: ["Adultos"],
      girl: true,
      specialties: [
        "Terapia Cognitivo Conductual",
        "Duelo",
        "Terapia de Pareja",
        "Psicólogía Deportiva"
      ],
      formation: [
        "Grado en Psicología (UNED)",
        "Máster en Psicología General Sanitaria (Universidad Fernando Pessoa- Canarias)",
      ],
      experience: [
        "Psicóloga en ámbito privado especializada en terapia de adultos, terapia de pareja.",
        "Psicóloga en entidad especializada en Psicología Clínica, Psicología de adultos e infarto-juvenil.",
        "Psicóloga en Centro de Psicología Aplicada en ámbito clínico y forense y terapias de Tercera Generación.",
        "Psicóloga deportiva en Club Natación Ciudad de Telde."
      ],
    },
    {
      slug: "rafael-rodriguez",
      img: "../images/team/rafael.webp",
      title: "Rafael Rodríguez",
      member: "P-2270",
      position: "Psicólogo Sanitario",
      badges: ["Adultos"],
      girl: false,
      specialties: [
        "Regulación emocional",
        "Ansiedad",
        "Relaciones y vínculos, dependencia emocional",
        "Depresión",
        "Terapia de pareja",
        "Intervención familiar"
      ],
      formation: [
        "Grado en Psicología (Universidad de La Laguna)",
        "Especialista en Clínica y Psicoterapia Psicoanalítica.",
        "Experto Universitario en HHTT desde un modelo integrativo en Psicoterapia.",
        "Experto en Mindfullness en Contextos de Salud.",
        "Formación en Adicciones.",
        "Intervención en Terapia de Pareja.",
        "Formación en Modelo Integrativo-Relacional en Pérdidas, duelo y trauma.",
        "Formación en Psicología de la conducta suicida.",
      ],
      experience: [
        "Psicólogo en Servicio de intervención con personas con trastornos graves de salud mental y problemas graves de conducta.",
        "Psicólogo en Centro de Día Hospital Gregorio Marañón en terapia de grupo para trastornos psicopatológicos.",
        "Psicólogo en Centro de Adicciones para el restablecimiento personal, educativo emocional y social.",
        "Psicólogo en centro de atención para personas con discapacidad intelectual."
      ],
    },
    {
      slug: "alicia-santana",
      img: "../images/team/alicia.webp",
      title: "Alicia Santana",
      member: "P-03037",
      position: "Psicóloga Sanitaria",
      badges: ["Infantil", "Juvenil"],
      girl: true,
      specialties: [
        "Problemas en el desarrollo infantil",
        "Discapacidad intelectual en menores de edad",
        "Ansiedad",
        "Terapia Cognitivo Conductual",
        "Depresión",
        "Problemas en la infancia y la adolescencia"
      ],
      formation: [
        "Grado en Psicología (UNED)",
        "Máster en Psicología General Sanitario (Universidad Alfonso X El Sabio Madrid)",
        "Gestión de conflicto, crisis y oportunidad (Instituto Terapia Gestalt Canarias)",
        "Dependencias Emocionales (Instituto Gestalt de Canarias)"
      ],
      experience: [
        "Psicóloga en Centro para personas y menores con discapacidad.",
        "Psicóloga en Centro Privado.",
        "Centros de menores, custodia y formación educativa."
      ],
    },
    {
      slug: "mateo-gallego",
      img: "../images/team/mateo.webp",
      title: "Mateo Gallego",
      member: null,
      position: "Médico Psiquiatra",
      badges: ["Adultos"],
      girl: false,
      specialties: [
        "Trastorno mental grave",
        "Depresión resistente",
        "Patología dual",
        "Patología por consumo"
      ],
      formation: [
        "Psiquiatra Servicio Canario de Salud.",
        "Residente de Psiquiatría rotación externa en la Unidad de Esquizofrenia y Unidad de Trastornos Afectivos.",
        "Residente de Psiquiatría de Interconsulta y Psicología de Enlace.",
        "Residente de Psiquiatría en Hospital Clínico de Valencia en Unidad de primeros episodios psicóticos."
      ],
      experience: [
        "Psiquiatra en Centro ámbito privado.",
        "Psiquiatra en Clínica Bandama.",
        "Psiquiatra Servicio Canario de Salud.",
        "Residente de Psiquiatría rotación externa en la Unidad de Esquizofrenia y Unidad de Trastornos Afectivos.",
        "Residente de Psiquiatría de Interconsulta y Psicología de Enlace.",
        "Residente de Psiquiatría en Hospital Clínico de Valencia en Unidad de primeros episodios psicóticos."
      ],
    }
  ];
  
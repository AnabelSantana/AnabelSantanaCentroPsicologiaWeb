export interface TeamMember {
    slug: string;
    img: string;
    title: string;
    member: string;
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
        "Máster en Psicología General Sanitaria (UCM)",
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
        "Psicoterapia en plataforma online",
        "Centro de psicología de psicoterapia integradora",
        "Intervención psicoterapéutica con población juvenil y adulta",
        "Coterapeuta en terapia grupal en programa de adicciones",
        "Coterapeuta en terapia grupal en programa de mindfulness"
      ],
    },
    {
      slug: "lara-martin",
      img: "../images/team/lara.webp",
      title: "Lara Martín",
      member: "P-02494",
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
        "Psicóloga EMDR Nivel I Infanto-Juvenil y Adultos",
        "Traumaterapia (COP Las Palmas)"
      ],
      experience: [
        "Psicóloga Autónoma en Centro de Psicología.",
        "Psicóloga Hogares de Protección de menores (Cabildo de Gran Canaria)",
        "Centro de Orientación Familiar de Gran Canaria",
        "Psicóloga Gabinete Psicopedagógico infanto-juvenil"
      ],
    },
    {
      slug: "desire-reyes",
      img: "../images/team/desire.webp",
      title: "Desiré Reyes Ortega",
      member: "P-02299",
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
        "Intervención en Trauma Psicológico",
        "Traumaterapia ( COP las palmas)",
        "Salud mental y discapacidad (plena inclusión canaria)",
        "Formación en Terapia familiar sistémica"
      ],
      experience: [
        "Psicóloga Sanitaria en ámbito privado",
        "Psicóloga en Servicio de intervención con personas con trastornos graves de salud mental y problemas graves de conducta",
        "Psicóloga en Centro Asistencial El Valle",
        "Psicóloga en centro de atención para personas con discapacidad intelectual"
      ],
    }
  ];
  
import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-1.jpg";
import project6 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate Data Scientist and Full Stack Developer with experience in creating scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). With expertise in Python, R, and scikit-learn for data science, I specialize in building predictive models and performing advanced data analysis. My background in software development, data science, and machine learning, combined with a strong foundation in mathematics from UBC, enables me to tackle complex problems. I aim to deliver innovative solutions that drive business growth, leveraging both web technologies and data insights to enhance user experiences and optimize decision-making.`;

export const ABOUT_TEXT = `I’m a recent graduate from the University of British Columbia with a Bachelor's Degree in Mathematics and a minor in Data Science. My education focused on programming, data analysis, machine learning, and computer systems, providing me with a strong technical foundation. During my internship at The Coca-Cola Company as a Data Scientist Intern, I worked on improving data quality, analyzing sales trends, and developing predictive models, giving me hands-on experience in applying theoretical knowledge to real-world business challenges. I am proficient in Python, R, JavaScript, SQL, and the MERN stack, with experience using Git, Docker, and other modern development tools.

What I bring to the table is a blend of technical expertise and practical experience in building scalable web applications and data-driven solutions. I excel at tackling complex problems, whether it's through developing predictive models or creating efficient web applications. My strong collaboration and communication skills ensure I can work effectively in team environments to deliver innovative and impactful solutions that drive business success.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Freelance Web Developer",
    company: "Self-employed",
    description: `Developed and maintained scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). Implemented RESTful APIs, designed user interfaces, and optimized applications for performance and responsiveness. Worked with clients to gather requirements and deliver high-quality solutions on time.`,
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    year: "2019 - 2019",
    role: "Data Scientist Intern",
    company: "The Coca-Cola Company",
    description: `Supported the company's growth by building machine learning models to predict seasonal sales trends. Improved data quality, performed advanced data analysis, and developed predictive models using Python and scikit-learn. Visualized sales patterns for marketing and finance teams and built data pipelines for Azure integration.`,
    technologies: ["Python", "R", "scikit-learn", "Azure"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Rentals",
    image: project1,
    description:
      "A rental management system allowing users to browse and book rental properties. Features include property listings, user authentication, and real-time booking abilities.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Flight Ticket Booking System",
    image: project2,
    description:
      "A comprehensive flight ticket booking system with features like booking, cancellations, and seat selection. Developed using Java, JUnit, and JavaSwing, with a focus on clean UI and robust backend logic.",
    technologies: ["Java", "JUnit", "JavaSwing"],
  },
  {
    title: "Movie Revenue Predictions",
    image: project3,
    description:
      "A machine learning project predicting the gross revenue of upcoming movies based on historical data and various key features such as genre, cast, and budget.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "Miami Housing Price Predictors",
    image: project4,
    description:
      "A predictive model explaining variance in housing prices in Miami. This project utilizes detailed statistical analysis to forecast housing prices based on key factors.",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "NBA Data Visualization",
    image: project5,
    description:
      "A data visualization project analyzing NBA games to quantify home court advantage. Used advanced visualization techniques to explore trends in game outcomes.",
    technologies: ["Python", "Matplotlib", "Seaborn", "Pandas"],
  },
  {
    title: "Portfolio Website",
    image: project6,
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information. Built with a focus on modern web design and responsive layouts.",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },
];

export const CONTACT = {
  address: "489 Interurban Way, Vancouver, BC V5X 0C7",
  phoneNo: "+1 778 668 XXXX",
  email: "rmondal1312@gmail.com",
};

import project1 from '../assets/projects/employee.png'
import project2 from '../assets/projects/ecommerce.png'
import project3 from '../assets/projects/portfolio.png'



export const EXPERIENCES = [
  {
    year: "Aug 2023 - Sept 2023",
    role: "Full Stack Web Development",
    company: "Varcons Technologies",
    description: `• Developed a responsive website user interface using HTML, CSS and JavaScript for e-commerce fashion store.
• Implemented CRUD operations to modify, delete, or update the data.
• Enhanced user experience by developing responsive and interactive web application.
• Collaborated with a team of three to successfully deliver the project on time, resulting in an increase in
organizational efficiency.`,
    technologies: ["Javascript", "HTML", "CSS"],
  },
  {
    year: "Nov-2023 - May-2024",
    role: "Machine Learning Intern",
    company: "Suveechi Technologies",
    description: `• Developed a Convolutional Neural Network (CNN) model for automated detection of wheals in skin prick test
images, aiding in allergy diagnosis.
• Pre-processed and annotated the dataset of skin prick test images, ensuring high-quality training data for model
development.
• Implemented U-Net CNN architectures, using deep learning frameworks like TensorFlow.`,
    technologies: ["Python", "Tensorflow", "CNN", "Machine Learning Algorithms"],
  },
  
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project2,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Employee Details Management App",
    image:project1,
    description:
      "I developed the Employee Details App, a robust web application designed to streamline the management of employee information. This application enables users to efficiently view, add, edit, and search for employee details",
    technologies: ["HTML", "CSS", "Django", "Python", "BootStrap", ],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React","React+Vite", "Tailwind CSS"],
  },
  
];

export const CONTACT = {
  address: "#31/23,31/29, 4th cross road, PoornaPragna Nagar, Uttarahalli, Bangalore-560061 ",
  phoneNo: "+91-9071332453 ",
  email: "amreen2k3@gmail.com",
};
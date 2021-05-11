import emoji from 'react-easy-emoji';

import ehsLogo from './assets/img/icons/common/ehsLogo.png'
import nomadLogo from './assets/img/icons/common/nomadLogo.jpg'

export const greetings = {
  "name": "Seamus Le",
  "title": "Hi, I am Seamus!",
  "description": "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
  "resumeLink": "https://cv.hanzla.ga"
}

export const openSource = {
  githubUserName: 'lullofthesea',
};

export const contact = {

}

export const socialLinks = {
  "facebook": "https://www.facebook.com/seamus.le.18/",
  "instagram": "https://www.instagram.com/seamustle/",
  "twitter": "https://twitter.com/Seamus_Le",
  "github": "https://github.com/lullofthesea",
  "linkedin": "https://www.linkedin.com/in/seamus-le-4355041aa/"
}

export const skillsSection = {
  title: 'Skills',
  subTitle: 'Here are some technologies and tools that I am familiar with or have used',
  skills: [
    emoji(
      '⚡ Produce highly interactive front end / user interfaces for web and mobile applications'
    ),
    emoji(
      '⚡ Develop back end using JS / Python, connect to databases such as PostgreSQL / MongoDB, and Dockerize it all'
    ),
    emoji('⚡ Make requests from front end to back end via REST and / or GraphQL'),
    emoji(
      '⚡ Integration of third party services such as AWS / Cloudinary'
    ),
  ],

  softwareSkills: [
    {
      skillName: 'HTML-5',
      iconifyClassname: 'vscode-icons:file-type-html',
    },
    {
      skillName: 'CSS3',
      iconifyClassname: 'vscode-icons:file-type-css',
    },
    {
      skillName: 'SASS',
      iconifyClassname: 'logos:sass',
    },
    {
      skillName: 'JavaScript',
      iconifyClassname: 'logos:javascript',
    },
    {
      skillName: 'TypeScript',
      iconifyClassname: 'logos:typescript-icon',
    },
    {
      skillName: 'NodeJS',
      iconifyClassname: 'logos:nodejs-icon',
    },
    {
      skillName: 'Python',
      iconifyClassname: 'logos:python',
    },
    {
      skillName: 'ReactJS',
      iconifyClassname: 'vscode-icons:file-type-reactjs',
    },
    {
      skillName: 'Redux',
      iconifyClassname: 'logos:redux',
    },
    {
      skillName: 'Apollo',
      iconifyClassname: 'logos:apollostack',
    },
    {
      skillName: 'GraphQL',
      iconifyClassname: 'logos:graphql',
    },
    {
      skillName: 'Nest',
      iconifyClassname: 'vscode-icons:file-type-nestjs',
    },
    {
      skillName: 'Flask',
      iconifyClassname: 'file-icons:flask',
    },
    {
      skillName: 'ExpressJS',
      iconifyClassname: 'simple-icons:express',
    },
    {
      skillName: 'MongoDB',
      iconifyClassname: 'vscode-icons:file-type-mongo',
    },
    {
      skillName: 'PostgreSQL',
      iconifyClassname: 'logos:postgresql',
    },
    {
      skillName: 'Prisma',
      iconifyClassname: 'vscode-icons:file-type-light-prisma',
    },
    {
      skillName: 'Sequelize',
      iconifyClassname: 'logos:sequelize',
    },
    {
      skillName: 'Docker',
      iconifyClassname: 'logos:docker-icon',
    },
  ],
}


// export const SkillBars = [
//   {
//     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
//     progressPercentage: '90', //Insert relative proficiency in percentage
//   },
//   {
//     Stack: 'Backend',
//     progressPercentage: '70',
//   },
//   {
//     Stack: 'Programming',
//     progressPercentage: '60',
//   },
// ]

export const educationInfo = [
  {
    schoolName: 'App Academy',
    subHeader: 'Software Engineering Coding Bootcamp',
    duration: 'January 2020 - July 2020',
    desc: 'Strenuous software development course that trains students to work together through coding projects and challenges. Focuses on full stack web development.',
    descBullets: [],
  },
]

export const experience = [
  {
    role: 'Software Engineer Intern',
    company: 'NomΛd',
    companylogo: nomadLogo,
    date: 'September 2020 - Present',
    desc:
      'Working as a team to build out an Express plus React app allowing landowners to list their property for rent and users to make reservations on those listings',
    descBullets: [
      'Utilized Javascript, JSX (extension of JS allowing HTML to be written in React), and CSS to implement core features such as (but not limited to) user auth, CRUD for listings, payments via Stripe, and Google Maps API',
      'Gained mentorship experience by familiarizing members of the team with the tech stack',
    ],
  },
  {
    role: 'Math Tutor',
    company: 'Encinal High School',
    companylogo: ehsLogo,
    date: 'Fall 2017 – Summer 2018',
    descBullets: [
      'After-school math tutor for up to 20 students per week',
      'Provided personalized instruction for math courses up to Calculus AB (Calculus 1)'
    ]
  },
]

export const projects = [
  {
    name: "QWERTY Shop",
    desc: "Full stack app utilizing a React and Apollo frontend and a GraphQL server built with NestJS and PostgreSQL. QWERTY Shop acts as an eCommerce website allowing users to view and purchase goods (which in this case are keyboards and related items).",
    link: {
      name: "Visit",
      url: "https://qwerty-shop-app.herokuapp.com"
    }
  }
]

/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Shubhankar Mathur",
  title: "Hi all, I'm Shubhankar",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web applications with Reactjs / Nodejs and large scale distributed applications using Java / Python / C# / SQL database."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/shubhankar1995",
  linkedin: "https://www.linkedin.com/in/shubhankar-mathur-22689968/",
  gmail: "shubhankarmathur2@gmail.com",
  facebook: "https://www.facebook.com/shubhankar1995"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web"),
    emoji("⚡ Progressive applications with restful services utilizing Serverless / PaaS / IaaS cloud architecture"),
    emoji("⚡ Integration of third party services such as Cognitive Services / AWS / Watson")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "PowerShell",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "bash",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Power BI",
      fontAwesomeClassname: "fas fa-chart-line"
    },
    {
      skillName: "tableu",
      fontAwesomeClassname: "fas fa-chart-bar"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of New South Wales (UNSW)",
      logo: require("./assets/images/UNSW-Square.png"),
      subHeader: "Master of Information Technology",
      duration: "Feb 2019 - Dec 2020",
      desc: "Took courses about Software Security, AWS Cloud, Big Data Management, Machine Learning, Artificial Intelligence",
      descBullets: [
        "Specialization in Data Science and Artificial Intelligence",
        "Elected as the Student Representative for the year 2019-2020"
      ]
    },
    {
      schoolName: "Shiv Nadar University",
      logo: require("./assets/images/Shiv_Nadar_University.jpg"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "July 2012 - May 2016",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems",
      descBullets: [
        "Secured 100% merit based scholorship",
        "Appointed as the coordinator of LASC at SNU"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Database",
      progressPercentage: "100%"
    },
    {
      Stack: "Object Oriented Programming",
      progressPercentage: "100%"
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "CiS International",
      companylogo: require("./assets/images/Nokia-Logo.jpg"),
      date: "Jan 2020 – Oct 2020",
      descBullets: [
        "Worked on remote BTS monitoring system with capability to learn and perform predictive analysis, which led to 30% reduction in “unnecessary” field return units",
        "Developed web application for custom dashboards using React.js and Node.js",
        "Gaining in-depth knowledge of AWS, Orchestration, and NF Onboarding",
        "Leveraged knowledge in Python for data management and Java spring boot for rest web API"
      ]
    },
    {
      role: "Student Assistant",
      company: "rCITI (UNSW)",
      companylogo: require("./assets/images/rcitiLogo.png"),
      date: "Apr 2019 – Jan 2020",
      descBullets: ["Devised a Java package to implement a macroscopic pedestrian loading model for multi-directional, anisotropic, stochastic, and congested pedestrian flow",
      "Applied statistical and algebraic techniques, data cleaning and data processing to execute structured experimentation based on data-driven and market ideas based on data available on Openstreepmap using Python",
      "Developed automated scripts to reduce the efforts to process data from CSV, JSON and XML files by 50%",
      "Helped improve the pedestrian walking simulation efficiency by 70%",
      "Open sourced the product on GitHub for community use under MIT license"
                ]
    },
    {
      role: "Software Engineer 2",
      company: "Dell",
      companylogo: require("./assets/images/dellLogo.png"),
      date: "July 2016 – Jan 2019",
      desc : "Gathered and consolidated business requirements, development of user stories, estimates and work plans and coordinated closely with cross-functional business teams",
      descBullets: ["Developed application using Java Spring Boot, Hibernate, Oracle PL/SQL, and IBM MQ on Pivotal cloud using microservices architecture leveraging both IaaS and PaaS computing infrastructure",
                    "Worked with Jenkins on docker and TFS workflows for application modeling and for CI/CD",
                    "Developed restful services for the implementation of the application interface"
                  ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "shubhankar1995", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      link: "http://saayahealth.com/"
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-402573816",
  email_address: "shubhankarmathur2@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};

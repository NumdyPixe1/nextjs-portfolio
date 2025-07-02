export const Data =  [
  {
    title: "Resume",
    src: "/icons/icons8-page-facing-up-96.png",
     key: "resume"

  },
  {
    title: "Contact",
    src: "/icons/icons8-closed-mailbox-with-raised-flag-96.png",
 key: "contact"
  },
  {
    title: "Projects",
    src: "/icons/icons8-card-index-dividers-96.png",
     key: "project"

  },
];
export const ProjectData = [{
    title: "Portfolio",
    des: "Portfolio website inspired from Window XP theme.",
    imgUrl: "icons8-page-facing-up-96.png",
    link: "https://github.com/NumdyPixe1/nextjs-portfolio",
    tags: [{name:"Next.js", color:"bg-gray-300"},{name:"Tailwind CSS",color:"bg-blue-300"}],
    date: "2025-6-16"
},
{
  title: "Deadline",
    des: "The website calculates the duration from start to end.",
    imgUrl: "icons8-page-facing-up-96.png",
    link: "https://github.com/NumdyPixe1/deadline",
    tags: [{name:"React.js", color:"bg-amber-300"},{name:"Tailwind CSS",color:"bg-blue-300"}],
    date: "2025-3-10",
},{
  title: "Guess the number game",
    des: "Puzzle game.",
    imgUrl: "icons8-video-game-96.png",
    link: "https://github.com/NumdyPixe1/guess-the-number",
    tags: [{name:"Unity", color:"bg-purple-300"}],
    date: "2023-4-15"
},
{
  title: "Old Portfolio",
    des: "My old portfolio was created with HTML and CSS.",
    imgUrl: "icons8-page-facing-up-96.png",
    link: "https://github.com/NumdyPixe1/portfolio",
    tags: [{name:"HTML", color:"bg-orange-300"},{name:"Bootstrap CSS",color:"bg-pink-300"}],
    date: "2023-4-15"
},{
  title: "Pac-man-Halloween-Re-pack",
    des: "Student project",
    imgUrl: "icons8-video-game-96.png",
    link: "https://github.com/NumdyPixe1/Pac-man-Halloween-Re-pack",
       tags: [{name:"Unity", color:"bg-purple-300"}],
    date: "2022-11-1"
}
]
export const ContentData =  [
  {
     key: "resume",
     content: "This is Resume"
     ,h:100,
     w:300
  },
  {
 
 key: "contact",
content: "This is Contact"
  ,h:100,
     w:300
  },
  {
    
     key: "project",
     content: "This is projects"
  ,h:100,
     w:300
  },
];

// export const getAllData = async ()=>{
//   return  Data;
// }
// export const getAllProjectData = async ()=>{
//   return ProjectData;
// }
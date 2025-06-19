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
    title: "Work",
    src: "/icons/icons8-card-index-dividers-96.png",
     key: "work"

  },
];

export const ContentData =  [
  {
     key: "resume",
     content: "This is Resume"
  },
  {
 
 key: "contact",
content: "This is Contact"

  },
  {
    
     key: "work",
     content: "This is Work"

  },
];

export const getAllData = async ()=>{
  return  Data;
}
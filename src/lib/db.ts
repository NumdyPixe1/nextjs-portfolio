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
    
     key: "work",
     content: "This is Work"
  ,h:100,
     w:300
  },
];

export const getAllData = async ()=>{
  return  Data;
}
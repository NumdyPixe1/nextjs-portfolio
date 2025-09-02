import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
     title: {type: String, required: true},
    des: {type: String, required: true},
    imgUrl: {type: String, required: true},
    link: {type: String, required: true},
    tags: [
      { name: {type: String, required: true}, color: {type: String, required: true} }
    ],
    date: {type: Date, required: true},
})

const ProjectModel = mongoose.models.project || mongoose.model("project", projectSchema);
export default ProjectModel;
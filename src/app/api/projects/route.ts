
import ConnectDB from "@/lib/mongoose";
import ProjectModel from "@/models/project";
import { NextResponse,NextRequest } from "next/server";

const LoadDB = async () => {
 await ConnectDB();
 console.log("DB Loaded");
}
LoadDB();

//GET
export async function GET(req: NextRequest) {
    const  projects = await ProjectModel.find({})
    return NextResponse.json({projects});
}
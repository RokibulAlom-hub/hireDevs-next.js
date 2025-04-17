import connectDB from "@/app/lib/connectDb"
import CreateJob from "@/app/Model/CreateJob";
import { NextResponse } from "next/server";

export const GET = async (req,{params}) => {
  await connectDB()
  const mongooseId =  params.id;
  const findJobById = await CreateJob.findById(mongooseId)
  return NextResponse.json(findJobById)
}
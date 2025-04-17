import connectDB from "@/app/lib/connectDb";
import CreateJob from "@/app/Model/CreateJob";
import { NextResponse } from "next/server";

export const POST = async(req) =>{
    const alldata =await req.json();
    await connectDB()
    const result = new CreateJob(alldata);
    await result.save()
    return NextResponse.json({success: true, status: 200})
}

export const GET = async (req) => {
    await connectDB()
    const result = await CreateJob.find();
    return NextResponse.json(result)
}
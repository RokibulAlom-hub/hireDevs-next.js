import connectDB from "@/app/lib/connectDb";
import CreateJob from "@/app/Model/CreateJob";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const alldata = await req.json();
  await connectDB();
  const result = new CreateJob(alldata);
  await result.save();
  return NextResponse.json({ success: true, status: 200 });
};

export const GET = async (req) => {
  await connectDB();
  const url = new URL(req.url); // makes a full URL object
  const searchParams = url.searchParams;
  // const {searchParams} = new URL(req.url); this is short cut of uper two line 
  console.log(searchParams);

  // searchParams gives you easy access to all query params using .get("paramName").
  const type = searchParams.get("type");
  const location = searchParams.get("location");
  const title = searchParams.get("title");

  // this logic set the value of filter conditionally
  let filter = {};
  if (type) filter.type = type;
  if (location) filter.location = location;
  if (title) filter.title = title;

  const result = await CreateJob.find(filter);
  return NextResponse.json(result);
};

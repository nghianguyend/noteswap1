
"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Thread from "../models/thread.model";
import Community from "../models/community.model";


interface Params {
  text: string;
  author: string;
  communityId: string | null;
  path: string;
}

export async function createThread({text, author, communityId, apth}: Params){
    connectToDB();
    const createThread = await Thread.create()
}


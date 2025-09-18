import { error } from "console";
import mongoose from "mongoose";

const url:string = process.env.MONGODB_URI!

if(!url){
    throw new Error("Connection string not found");
}

let cached = global.mongoose


if(!cached){
    cached = global.mongoose = {conn:null , promise:null}
}

export default async function ConnectDB(){

    if(cached.conn){
        return cached.conn
    }

     if(!cached.promise){
        cached.promise =  mongoose.connect(url).then((e)=>e.connection)

    }

    try {
        cached.conn = await cached.promise
    } catch (error) {
        cached.promise = null
        throw error        
    }

    return cached.conn

}
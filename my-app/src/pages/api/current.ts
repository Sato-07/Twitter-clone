import { NextApiRequest, NextApiResponse } from "next/server";


export default async function handler(
    req:NextApiRequest,
    res:NextApiResponse,
    ) 
    {
        if(req.method != "GET"){
            return res.status(405).end();
        }
    try{

    }catch(error){
        console.log(error)
        return res.status(400).end()
    }

    
}
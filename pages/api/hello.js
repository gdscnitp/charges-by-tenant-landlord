// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {connectMongoDb} from "../../db/db"

connectMongoDb()


export default async function handler(req, res) {

    

    res.json({hello : "world"});

}

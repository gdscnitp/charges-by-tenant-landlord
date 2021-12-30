const mongoose = require("mongoose")
require("../../models/Landlord")
var Landlord = mongoose.model("Landlord")

import connectMongoDb from "../../db/db"

connectMongoDb()

export default async function handler(req, res) {

    if (req.method === 'POST') {

      //processing the POST request
      try {
        //take the input from the users
        var {name, email, username, contact} = req.body;
        var password = "12345678"
        var landlord = new Landlord({
          name, email, username, contact, password
        });
        
        await landlord.save()
        return res.status(200).json(landlord);

      } catch (error) {
        console.log(error)
        return res.status(500).json({msg: error.message});
      }
      } else if(req.method == 'GET') {
        // Handle any other HTTP method
        res.json("the request has been recieved");
      }

}

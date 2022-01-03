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

        //for the email check weather the eamil is already registered or not in the validator or over here
        var password = "q2345678" //create a function that creates a random password 
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
      } else if(req.method == 'PUT'){
        //update the landlord data
        
        landlord.findByIdAndUpdate(

          req.params.landlordId,
          req.body,
          {new:true},
          (err, landlord) => {
            if(err) return res.status(500).send(err);
            return res.send(landlord);
          }

        )
      } else if(req.method == 'DELETE'){
        landlord.findByIdAndRemove(req.params.landlordId, (err,landord) => {
          if(err) return res.status(500).send(err);
          const response = {
            message : "landlord id successfully deleted",
            id : landlord._id
          };
          return res.status(200).send(response);
        });
      }

}

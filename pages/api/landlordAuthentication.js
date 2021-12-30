const Landlord = require("../../models/landlord")

export default async function handler(req, res) {

    if (req.method === 'POST') {
        // Process a POST request
        res.json("the request has been recieved");
      } else if(req.method == 'GET') {
        // Handle any other HTTP method
        res.json("the request has been recieved");
      }

}

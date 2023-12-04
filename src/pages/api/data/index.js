import connect from "../../.../../../../database/contact";
import user from "../../../../model/schema";

connect();
export default async function handler(req, res) {
if (req.method==="GET") {
    
    try {
        const notes =await user.find()
        res.send(notes)

    } catch (error) {
        res.status(400).json({ success: false });

    }
}

   else if (req.method === "POST") {
        const { name ,
          decribtion ,
          price ,
          categroy,
          offer ,
          img1 ,
          img2 ,
          img3 } = req.body;
        
        try {
      const newpost = new user({
        name ,
    decribtion ,
    price ,
    categroy,
    offer ,
    img1 ,
    img2 ,
    img3
      });

      await newpost.save();
      res.redirect("/")
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

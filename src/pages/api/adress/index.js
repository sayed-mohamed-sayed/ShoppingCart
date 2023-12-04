import connect from "../../.../../../../database/contact";
import cart from "../../../../adressschema/adress";

connect();
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const notes = await cart.find();
      res.send(notes);
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === "POST") {
    const {
      name,
  email,
  country,
  city,
  phone,
  adress,
  data
      
    } = req.body;

    try {
      const newpost = new cart({
        name,
        email,
        country,
        city,
        phone,
        adress,
        data

      });

      await newpost.save();
      res.redirect("/");
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

import connect from "../../.../../../../database/contact";
import cart from "../../../../CartSchema/model";

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
      names,
      decribtion,
      price,
      categroy,
      offer,
      img1,
      data
      
    } = req.body;

    try {
      const existingProduct = await cart.findOne({names});
    if (existingProduct) {
      // إذا تم العثور على المنتج، قم بتحديث البيانات الجديدة
      existingProduct.names = names;
      existingProduct.decribtion = decribtion;
      existingProduct.price = price;
      existingProduct.categroy = categroy;
      existingProduct.offer = offer;
      existingProduct.img1 = img1;
      existingProduct.data = data;
      await existingProduct.save();
    }else{

      const newpost = new cart({
       names, 
      decribtion,
      price,
      categroy,
      offer,
      img1,
    data
  
        });
        await newpost.save();
    }

      res.redirect("///");
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
}

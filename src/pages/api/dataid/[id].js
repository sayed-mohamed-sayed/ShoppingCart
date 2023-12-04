import connect from "../../../../database/contact"
import user from "../../../../model/schema"



connect()
export default async function handel(req ,res) {
    
    if (req.method==="DELETE") {
        try {
            
            const item=await user.findOneAndDelete()
            res.send(item)
            res.status(200).json({ success: true });

        } catch (error) {
            console.log(error);
        }

    }else if(req.method==="GET"){
        try {
            const data =await user.findOne({_id:req.query.id})
            res.send(data)
            
        } catch (error) {
            console.log(error);
        }
    }else if (req.method==="PUT") {
        try {
    const data =await user.findOne({_id:req.query.id})

    data.name=req.body.name
    data.decribtion=req.body.decribtion
    data.price=req.body.price
    data.categroy=req.body.categroy
    data.img1=req.body.img
await data.save()
res.json({ success: true, message: "Item updated successfully" });
    

} catch (error) {
    res.status(400).json({ success: false });

}

    }
}
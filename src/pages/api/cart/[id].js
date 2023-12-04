import connect from "../../../../database/contact"
import user from "../../../../CartSchema/model"



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
    }
}
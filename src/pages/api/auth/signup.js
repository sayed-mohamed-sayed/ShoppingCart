import Contact from "../../../../database/contact";
import User from "../../../../modelregister/schema"
import { hash } from "bcryptjs";



export default async function handelr(req ,res) {
    
    try {
        await Contact()
if (req.method==="POST") {
    if (!req.body) return res.status(404).json({ error: "!!!!!!!!" });
    const { name, email, password } = req.body;
    const checkexicting = await User.findOne({ email });
    if (checkexicting) return res.status(422).json({ message: "!!!!!!" });

    const hashedPassword = await hash(password, 12);
    const user = await User.create({ name, email, password: hashedPassword });
    res.status(201).json({ status: true, user });

}else{
    res.status(500).json({ message: "nnmnnnnnnnnnn" });

}

    } catch (error) {
        
        res.status(500).json({ message: "Internal Server Error", error });

    }
}
import axios, { Axios } from "axios";

export default async function handler(req, res){
    if(req.method === 'POST'){
     try {
        const response= await axios.post('https://accept.paymob.com/api/acceptance/payment_keys',{
            auth_token:'egy_sk_live_74e5219d3b9703cbd66bd4d8bd94d41ad575ac73ec6b6bc4326980eb51a5843c',
            amount_cents:10000,
            expiration:3600 ,
            order_id: "1",
            billing_data:{
                first_name:"sayed",
                last_name:"sayed" ,
                email:"eddf6@gmail.com",
                phone_number:"78900535800",
                country:"Na" ,
                state:"nm" ,
                city:"lkmk",
                street:"huihi",
                postal_code:"kk",
            
            },
            currency:"EGP",
            integration_id:"87"
          })
          res.json(response.data)

     } catch (error) {
        console.log(error);
     }
    }
}
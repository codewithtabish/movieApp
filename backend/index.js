require('dotenv').config()
const cors=require('cors')
const stripe = require('stripe')(process.env.SECRET_KEY)
const express=require('express')
const app=express()

app.use(cors())
app.use(express.json())

const PORT=process.env.PORT
app.post('/payment',async(req,res)=>{
    try{
        console.log('ne')
        const {amount} =req?.body
    const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: 'INR',
    payment_method_types:['card']

  });
  return res.json({
    clientSecret: paymentIntent.client_secret,

  });

    }catch(err){
        return res.json({myerror:err.message})

    }
})

app.listen(PORT,()=>{
    console.log('App is listening ....')
})
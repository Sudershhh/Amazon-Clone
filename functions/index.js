const functions = require('firebase-functions');

const express = require("express");

const cors = require("cors");
const { response } = require('express');

const stripe = require("stripe")('sk_test_51HgLGiIH4V5zlESEocVw4ZGscdGSfdbNbAA95K5a885kuUGN1EB7kVsnjf7mOHsAUZYDbzCsL7MgxGl3FPsoFHQg00hKc0vrzr');

//API


// APP Config
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//API routes

app.get("/", (request,response) => response.status(200).send("Hello World"))

app.post('/payments/create',async (request , response) => {
    const total = request.query.total;

    console.log('Payment Request received BOOM!!! for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency: "usd",
    });

//OK - Created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
      })
})



// Listen Command

exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-f7599/us-central1/api
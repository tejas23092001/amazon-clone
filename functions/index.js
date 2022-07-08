const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors");
const { request } = require("http");

const stripe = require("stripe")(
    "sk_test_51LIl9ISDPtLKApAvn3Q7kItEdkp2IHcaz7ZtDzCivOBCzYvHKLnpB26VwrMTu0igUpYSGLThhTPYOYdBRAVopz1x00bcn1OLai"
);

const app = express()
app.use(cors({origin: true}))
app.use(express.json());

app.get("/", (request,response) => response.status(200).send("Hello from Cloud"))

app.post("/payment/create", async (request,response) => {
    const total = request.query.total;
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd"
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })

})


// http://localhost:5001/clone-7be70/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.api = functions.https.onRequest(app);
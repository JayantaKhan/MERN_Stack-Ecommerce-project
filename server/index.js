import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuid } from "uuid";

import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";

const app = express();

import { Stripe } from "stripe";
const stripeInstance = Stripe(
  "sk_test_51OhT7rSAvpgZHxoFjEb2uocH3LNEoIi46UypOVExAFqwtJ6UejHAwiSUB4l5z7WDCeaG0HTDprTwXygefg221OY100oQAzK27O"
);

// const stripe = require("stripe")("sk_test_51OhT7rSAvpgZHxoFjEb2uocH3LNEoIi46UypOVExAFqwtJ6UejHAwiSUB4l5z7WDCeaG0HTDprTwXygefg221OY100oQAzK27O")

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Router);

const PORT = 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
DefaultData();

//checkout api

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(req.body);

  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.longTitle,
      },
      unit_amount: Number(product.price) * 100,
    },
    quantity: product.quantity,
  }));

  const session = await stripeInstance.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });
  res.json({ id: session.id });
});

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams["MID"] = process.env.PAYTM_MID;
paytmParams["WEBSITE"] = process.env.PAYTM_WEBSITE;
paytmParams["CHANNEL_ID"] = process.env.PAYTM_CHANNEL_ID;
paytmParams["INDUSTRY_TYPE_ID"] = process.env.PAYTM_INDUSTRY_TYPE_ID;
paytmParams["ORDER_ID"] = uuid();
paytmParams["CUST_ID"] = process.env.PAYTM_CUST_ID;
paytmParams["TXN_AMOUNT"] = "100";
paytmParams["CALLBACK_URL"] = "http://localhost:8000/callback";
paytmParams["EMAIL"] = "jayantakhan06@gmail.com";
paytmParams["MOBILE_NO"] = "1234567890";

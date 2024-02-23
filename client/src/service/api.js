import axios from 'axios';
const URL = 'http://localhost:8000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log('Error while calling signup api', error);
    }
}
export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data);
    } catch (error) {
        console.log('Error while calling login api', error);
        return error.response;
    }
}

// hit in buy now and validate and we have to call it in actionItem(Buy now Button)
/*
there we made a const(buyNow)
we can call there the api named payUingPaytm so we have imported {payUsingPaytm}. There we are expecting a body
Here we are sending a response
we have to make a form on paytm on actionItem so we need an object with let information there we need action & params:response
in Action we need to website link of paytm form website. By clicking place order it redirects me to paytm form
we have to make a function with this objects in utils named Paytm.js where the validation of date & objects takes place.The main function is buildForm
so we also have to import the {post} in actionItem from 'utils/Paytm' and we have to pass own information in that post. So in paytm.js it builds the form with details..post(details)
in buildform it tries to build form with post & action in Attributes so that we can open the url and we call this(here) api also
*/

/*
Now we have work in server. the api which we made with named payment endpoint., so we have to make a route there in route.js and we have to call a funtion in roter..router.post('/addpaymentGateway')
we have to make another file in controller for payment named 'payment-controller.js' where we have to export that addPaymentGateway and we have to import that function also in route.js
we have to put the MID & merchant key..the sensitive information in .env and we have turn it out also so to turn it out we have to come in index.js and export the info with.. paytmMerchantKey from process.env
then we have to make an obj also there with rest of the info as we have to use it inside payment-controller and we have to import {paytmMerchantKey} & {paytmParams} in it and we have to call the api named paytmchecksum
We have to callback also on post api inside route.js and add a function named paytmResponse and make it inside payment-controller.
we have to parse the form with the help of formidable
finally we have to verify the signature also inside payment-controller with the help of paytmchecksum
*/

/*
 for buyNow we have to copy buyNow func from actiontems to cart.jsx to make the same button for Buy Now and Place Order
 and also have to import payUsingPaytm and post from utils in cart.jsx

*/
export const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment api', error);
    }
}
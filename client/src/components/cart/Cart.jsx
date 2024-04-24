// import { Box, Button, Grid, Typography, styled } from "@mui/material";
// import { useSelector } from "react-redux";

// //components
// import CartItem from "./CartItem";
// import TotalView from "./TotalView";
// import EmptyCart from "./EmptyCart";
// // import { payUsingPaytm } from "../../service/api";
// // import { post } from "../../utils/paytm";

// import { loadStripe } from '@stripe/stripe-js';

// const Container = styled(Grid)(({ theme }) => ({
//     padding: '30px 135px',
//     [theme.breakpoints.down('md')]: {
//         padding: '15px 0'
//     }
// }));

// const Header = styled(Box)`
//     padding:15px 24px;
//     background:#fff;
// `;

// const ButtonWrapper = styled(Box)`
//     padding: 15px 24px;
//     background:#fff;
//     box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10% );
//     border-top: 1#f0f0f0;
// `;

// const StyledButton = styled(Button)`
//     display: flex;
//     margin-left: auto;
//     background: #fb641b;
//     color:#fff;
//     width:250px;
//     height:51px;
//     border-radius: 2px;
// `;

// const LeftComponent = styled(Grid)(({ theme }) => ({
//     paddingRight: 15,
//     [theme.breakpoints.down('md')]: {
//         marginBottom: 15
//     }
// }))

// const Cart = () => {
//     const { cartItems } = useSelector(state => state.cart);

//     // payment integration

//     const buyNow = async () => {
//         const stripe = await loadStripe("pk_test_51OhT7rSAvpgZHxoFaMG5L55kbPucNY71YB5myMz1OoW8UkKnbwJ3RoFk6jRMiCll1SX0OhGrX0gCWiGjLipw4sO200Xp5KOYVe")

//         const body = {
//             products: cartItems
//         }

//         const headers = {
//             "Content-Type": "application/json"
//         }
//         const response = await fetch("http://localhost:8000/api/create-checkout-session", {
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(body)
//         });
//         const session = await response.json();

//         const result = stripe.redirectTobuyNow({
//             sessionId: session.id
//         });

//         if (result.error) {
//             console.log(result.error);
//         }

//     }

//     // const buyNow = async () => {
//     //     let response = await payUsingPaytm({ amount: 500, email: 'jayantakhan06@gmail.com' });
//     //     let information = {
//     //         action: 'https://securegw-stage.paytm.in/order/process',
//     //         params: response
//     //     }
//     //     post(information);
//     // }

//     return (
//         <>
//             {
//                 cartItems.length ?
//                     <Container container>
//                         <LeftComponent item lg={9} md={9} sm={12} xs={12}>
//                             <Header>
//                                 <Typography>My Cart({cartItems.length})</Typography>
//                             </Header>
//                             {
//                                 cartItems.map(item => (
//                                     <CartItem item={item} />
//                                 ))
//                             }
//                             <ButtonWrapper>
//                                 <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
//                             </ButtonWrapper>
//                         </LeftComponent>
//                         <Grid item lg={3} md={3} sm={12} xs={12}>
//                             <TotalView cartItems={cartItems} />
//                         </Grid>
//                     </Container>
//                     : <EmptyCart />
//             }
//         </>
//     )
// }
// export default Cart;

import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { payUsingPaytm } from "../../service/api";
// import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

// import { loadStripe } from "@stripe/stripe-js";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1#f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // const { cartItems } = useSelector((state) => console.log(state));
  console.log(cartItems);

  // payment integration

  // const buyNow = async () => {
  //   const stripe = await loadStripe(
  //     "pk_test_51OhT7rSAvpgZHxoFaMG5L55kbPucNY71YB5myMz1OoW8UkKnbwJ3RoFk6jRMiCll1SX0OhGrX0gCWiGjLipw4sO200Xp5KOYVe"
  //   );

  //   const body = {
  //     products: cartItems,
  //   };

  //   const headers = {
  //     "Content-Type": "application/json",
  //   };
  //   const response = await fetch(
  //     "http://localhost:8000/api/create-checkout-session",
  //     {
  //       method: "POST",
  //       headers: headers,
  //       body: JSON.stringify(body),
  //     }
  //   );
  //   const session = await response.json();

  //   try {
  //     const result = await stripe.redirectToCheckout({
  //       sessionId: session.id,
  //     });

  //     if (result.error) {
  //       console.error(result.error);
  //     }
  //   } catch (error) {
  //     console.error("Error redirecting to checkout:", error);
  //   }
  // };

  const buyNow = async () => {
    let response = await payUsingPaytm({
      amount: 500,
      email: "jayantakhan06@gmail.com",
    });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response,
    };
    post(information);
  };

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton onClick={() => buyNow()}>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
export default Cart;

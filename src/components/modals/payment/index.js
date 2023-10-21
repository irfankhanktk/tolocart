import React, { useState,useEffect } from "react";
import { Button, Modal } from "react-bootstrap"; 
import axios from "axios";  
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51I7PnfE9ypFo9enALOun4VJ6liBKJkrr1EsxmCfas57xbMo6zj0ZP5472a5jcyy5Yyy6hNYyuMc79vdDrMi7IRcR00759gNMpH"
);

const PaymentModal = ({show2,setShow2,setPlaceOnlinePayment,amount}) => {     
     const [clientSecret,setClientSecret]=useState(null)    
     const [stop,setstop]=useState(true)
      function getClientSecret(){ 
        if(clientSecret === null){
          axios.get("https://hamiddawod-001-site2.htempurl.com/api/v1/Order/GetSecret?amount=100").then(res=>{ 
           setClientSecret(res.data) 
             console.log("api is calling")  
          }).catch(err=>{ 
   
          })  
         }  
      }
      useEffect(()=>{ 
        getClientSecret()
      },[stop])
  return (
    <Modal
      show={show2} 
      onHide={setShow2}
      centered 
      className="placeorder-wrap"
      style={{
        zIndex: "1101",
        maxWidth: "350px !important",
        padding: "25px",
        margin: "0 auto",
      }}
    >  
     <Modal.Header
          closeButton
          className="custom-close-header custom-close-btn d-flex flex-column align-items-start p-2"
        ></Modal.Header>   {
          clientSecret !== null ? <Elements
            stripe={stripePromise}
            options={{
              clientSecret:
                clientSecret
            }}
          >
            <Payment amount={amount} clientSecret={clientSecret}/> 

          </Elements> :undefined}
      
      
    </Modal>
  );
};

export default PaymentModal;
const Payment = ({amount,clientSecret}) => {  
  console.log(clientSecret)
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const paymentElement = elements.getElement(PaymentElement);
    console.log(paymentElement);

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://yourwebsite.com/success"
      },
    });
    console.log(result);

    
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button
        type="submit"
        disabled={!stripe}
        style={{
          background: "orange",
          border: "none",
          marginTop: "15px",
          fontWeight: "900",
          paddingLeft: "25px",
          paddingRight: "25px",
          marginLeft: "50%", 
          fontFamily:"Roboto", 
          fontWeight :"normal",
          transform: "translate(-50%)",
        }}
      >
        Pay <span> ${amount}</span>
      </Button>
    </form>
  );
};

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";
import axiosSecure from "../../../api";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const property = useLoaderData();
  const broughtPropertyId = property[0].propertyId;
  // console.log(broughtPropertyId);
  const price = property[0]?.offerAmount;
  // console.log(price);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: price })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((err) => console.log(err.message));
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment Method", paymentMethod);
      setError("");
    }
    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("confirm error", confirmError);
      setError(confirmError.message);
    } else {
      console.log("payment Intent", paymentIntent);
      setError("");
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user?.email,
          transactionId: paymentIntent.id,
          price,
          data: new Date(),
          broughtPropertyId,
        };
        const res2 = await axiosSecure.post("/payments", payment);
        console.log("payment saved", res2.data);

        if (res2.data?.deletedCount) {
          Swal.fire({
            title: "Success!",
            text: "Thank you for the payment!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-2xl flex justify-center items-center text-red-700">
        {error}
      </p>
      {transactionId && (
        <p className="text-2xl flex justify-center items-center text-green-500">
          Your transaction Id: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;

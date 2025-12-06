
type paymentMethod = "UPI"|"Credit Card"|"PayPal";

function makePayment(method:paymentMethod) {
   
 console.log(`Payment Method: ${method}`);
}

makePayment("UPI");
makePayment("Credit Card");
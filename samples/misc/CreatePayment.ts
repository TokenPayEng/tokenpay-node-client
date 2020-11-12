import TokenPayClient from '../../dist/TokenPayClient';
import CreatePaymentRequest from '../../dist/request/CreatePaymentRequest';
import CardPaymentResponse from '../../dist/response/CardPaymentResponse';

import {Currency, PaymentGroup} from '../../dist/model';

// Example: Create Payment (TypeScript)
// Creates a payment with a paid price of 100.0 TRY

const tokenPay = new TokenPayClient({
  apiKey: 'api-key',
  secretKey: 'secret-key',
  baseUrl: 'http://localhost:8000'
});

const request: CreatePaymentRequest = {
  price: 100.0,
  paidPrice: 100.0,
  walletPrice: 0.0,
  installment: 1,
  conversationId: 'foo-bar',
  currency: Currency.TRY,
  paymentGroup: PaymentGroup.Product,
  card: {
    cardHolderName: 'Ahmet Mehmet',
    cardNumber: '5406670000000009',
    expireYear: '2035',
    expireMonth: '11',
    cvc: '123'
  },
  items: [
    {
      name: 'Item 1',
      price: 30.0,
      subMerchantId: 1,
      subMerchantPrice: 27.0
    },
    {
      name: 'Item 2',
      price: 50.0,
      subMerchantId: 1,
      subMerchantPrice: 42.0
    },
    {
      name: 'Sanitizer',
      price: 20.0,
      subMerchantId: 1,
      subMerchantPrice: 18.0
    }
  ]
};

tokenPay.payment().createPayment(request)
  .then((result: CardPaymentResponse) => console.log('Payment successful', result))
  .catch((err: Error) => console.error('Payment failed', err));

const TokenPay = require("../../dist");
const tokenPay = new TokenPay.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

const request = {
  price: 10.0,
  name: "test link",
  description: "Test Link for payment",
  stock: 100,
  enabledInstallments: "1,2,3,6",
  expireDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
};

tokenPay.link().createLink(request)
  .then(result => console.info("Link successfully created", result))
  .catch(err => console.error("Create link failed", err));

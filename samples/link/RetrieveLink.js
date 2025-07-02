const TokenPay = require("../../dist");

const tokenPay = new TokenPay.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://api-gateway.oderopay.com.tr'
});

tokenPay.link().retrieveLink(1)
  .then(result => console.info("Link successfully retrieved", result))
  .catch(err => console.error("Retrieve link failed", err));

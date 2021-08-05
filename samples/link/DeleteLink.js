const TokenPay = require("../../dist");

const tokenPay = new TokenPay.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

tokenPay.link().deleteLink(1)
  .then(result => console.info("Link successfully deleted", result))
  .catch(err => console.error("Delete link failed", err));

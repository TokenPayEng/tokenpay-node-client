const { default: Status } = require("../../dist/model/Status");
const TokenPay = require("../../dist");

const tokenPay = new TokenPay.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  status: Status.Active,
  price: 10.0,
  name: "new test link",
  description: "new Test Link for payment",
  stock: 100,
  enabledInstallments: "1,2,3",
  expireDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
};

tokenPay.link().updateLink(1, request)
  .then(result => console.info("Link successfully update", result))
  .catch(err => console.error("Update link failed", err));

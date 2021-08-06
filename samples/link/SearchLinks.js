const { default: Status } = require("../../dist/model/Status");
const TokenPay = require("../../dist");

const tokenPay = new TokenPay.Client({
  apiKey: "api-key",
  secretKey: "secret-key",
  baseUrl: 'https://api-gateway.tokenpay.com.tr'
});

const request = {
  status: Status.Active,
  name: 'name',
  token: 'token'
};

tokenPay.link().searchLinks(request)
  .then(result => console.info("Links successfully searched", result))
  .catch(err => console.error("Search links failed", err));

require("dotenv").config();

module.exports = {
  env: {
    ENVIORNMENT: process.env.ENVIORNMENT_NODE,
    DEV_DOMAIN_API: process.env.DEV_DOMAIN_API_NODE,
    PROD_DOMAIN_API: process.env.PROD_DOMAIN_API_NODE,
  },
};

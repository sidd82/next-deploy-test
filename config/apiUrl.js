const apiUrl =
  process.env.ENVIORNMENT === "development"
    ? process.env.DEV_DOMAIN_API
    : process.env.PROD_DOMAIN_API;

export default apiUrl;

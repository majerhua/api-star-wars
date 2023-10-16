const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const getSecretManager = async () => {
  let response;
  try {
    const client = new SecretsManagerClient({
      region: process.env.REGION,
    });

    response = await client.send(
      new GetSecretValueCommand({
        SecretId: process.env.SECRET_NAME,
      }),
    );
  } catch (ex) {
    throw new Error(ex);
  }
  return response;
};

module.exports = {
  getSecretManager,
};

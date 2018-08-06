export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "ap-southeast-1",
    BUCKET: "daniel-notes-app-uploads"
  },
  apiGateway: {
    REGION: "ap-southeast-1",
    URL: "https://216el5o6xc.execute-api.ap-southeast-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-1",
    USER_POOL_ID: "ap-southeast-1_WWVBjUDYb",
    APP_CLIENT_ID: "2ibeia5mqt7t783sd88sv9h74n",
    IDENTITY_POOL_ID: "ap-southeast-1:571919a3-49e1-4092-9b0e-2d4faa754ed6"
  }
};
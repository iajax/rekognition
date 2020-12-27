import { Rekognition } from '@aws-sdk/client-rekognition';

const client = new Rekognition({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
  }
});

export default {
  start: (params) => client.startProjectVersion(params),
  stop: (params) => client.stopProjectVersion(params),
  detectCustomLabels: (params) => client.detectCustomLabels(params)
};

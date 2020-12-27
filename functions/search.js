import { formatLabels } from './util';
import { failure, success } from './util/response';
import rekognition from './util/rekognition';

export const handler = async (event, context) => {
  console.log({ event, context });
  const params = {
    Image: {
      S3Object: {
        Bucket: 'machine-parts',
        Name: 'WM0803_3_20.png'
      }
    },
    MaxLabels: 10,
    MinConfidence: 50,
    ProjectVersionArn: process.env.PROJECT_VERSION_ARN,
    MinInferenceUnits: 1
  };

  try {
    await rekognition.start(params);

    const result = await rekognition.detectCustomLabels(params);

    await rekognition.stop(params);

    return success({ results: formatLabels(result.CustomLabels) });
  } catch (err) {
    console.error(err);
    return failure();
  }
};

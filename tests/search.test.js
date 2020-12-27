import { handler } from '../functions/search.js';

test('main', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
  };

  await handler(event, context, callback);
});

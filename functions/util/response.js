function build(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify(body)
  };
}

export function success(body) {
  return build(200, body);
}

export function failure(body = 'Oops! Something went wrong.') {
  return build(500, body);
}

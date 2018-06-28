module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `This a demo service\n`
  };

  callback(null, response);
};

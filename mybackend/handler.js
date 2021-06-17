'use strict';

const todos = [
  {
    id: 1,
    name: 'This',
  },
  {
    id: 2,
    name: 'Is',
  },
  {
    id: 3,
    name: 'From',
  },
  {
    id: 4,
    name: 'Serverless',
  },

  {
    id: 5,
    name: 'Real todo',
  },
];


module.exports.getTodos = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    body: JSON.stringify(todos),
};
return response;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

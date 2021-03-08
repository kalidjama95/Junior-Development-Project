var aws = require("aws-sdk")
var document = new aws.DynamoDB.DocumentClient()
exports.handler = async(event) => {
  console.log(event)
  console.log(event.Parameters)
  // TODO implement
  var phoneNumber = event.Details.Parameters.CustomerNumber
  var vanityNumber = []
  var letter = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F'],
    ['G', 'H', 'F'],
    ['J', 'K', 'L'],
    ['M', 'N', 'O'],
    ['P', 'Q', 'R', 'S'],
    ['T', 'U', 'V'],
    ['W', 'X', 'Y', 'Z']
  ]

  for (var i = 0; i < 5; i++) {

//repeat process five times

    for (let num of phoneNumber) {
      if (num == '0') {
        vanityNumber[i] += '0'
      }
      else if (num == '1') {
        vanityNumber[i] += '#'
      }
      else if (num == '2') {
        // vanityNumber[i] += letter[0][NODEJSRANDOMIZE]
        vanityNumber[i] += letter[0][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '3') {
        vanityNumber[i] += letter[1][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '4') {
        vanityNumber[i] += letter[2][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '5') {
        vanityNumber[i] += letter[3][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '6') {
        vanityNumber[i] += letter[4][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '7') {
        vanityNumber[i] += letter[5][Math.floor(Math.random() * Math.floor(4))]
      }
      else if (num == '8') {
        vanityNumber[i] += letter[6][Math.floor(Math.random() * Math.floor(3))]
      }
      else if (num == '9') {
        vanityNumber[i] += letter[7][Math.floor(Math.random() * Math.floor(4))]
      }

  
    
  }
  
        var params = {
        TableName: 'Vanity-Numbers',
        Item: {
          'Telephone-Number': phoneNumber,
          'Vanity-number1': vanityNumber[0],
          'Vanity-number2': vanityNumber[1],
          'Vanity-number3': vanityNumber[2],
          'Vanity-number4': vanityNumber[3],
          'Vanity-number5': vanityNumber[4],
        }
      };


    }
    await document.put(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      }
      else {
        console.log("Success", data);
      }
    }).promise();
  
  console.log(vanityNumber[i])
  const response = {
    statusCode: 200,
    CustomerNumber1: vanityNumber[0],
    CustomerNumber2: vanityNumber[1],
    CustomerNumber3: vanityNumber[2],
    CustomerNumber4: vanityNumber[3],
    CustomerNumber5: vanityNumber[4],
  };
  return response;
};

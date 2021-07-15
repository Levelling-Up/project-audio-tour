/* eslint-disable no-loop-func */
/**
 * Copyright 2010-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * This file is licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 * http://aws.amazon.com/apache2.0/
 *
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
*/
var AWS = require("aws-sdk");

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Seeding Codes into DynamoDB. Please wait.");

let i;
for(i = 0; i < 1000; i+= 1){
    let code;
    if(i < 10){
        code = "000" + i
    } else if(i < 100){
        code = "00" + i
    } else if(i < 1000){
        code = "0" + i
    }
    var params = {
        TableName: "Code",
        Item: {
            "code":  code,
            "email": "",
            "claimed":  false
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add code: ", i, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded: ", i);
       }
    });

}

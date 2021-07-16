
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
var uuid = require('uuid');
var AWS = require("aws-sdk");
var fs = require('fs');
//var Amplify = require("@aws-amplify/core");
//var awsconfig = require('./src/aws-exports');

// const awsconfig = {
//     "aws_project_region": "eu-west-2",
//     "aws_appsync_graphqlEndpoint": "https://uww5wbiqznhjngzc3kuqpsyp5i.appsync-api.eu-west-2.amazonaws.com/graphql",
//     "aws_appsync_region": "eu-west-2",
//     "aws_appsync_authenticationType": "API_KEY",
//     "aws_appsync_apiKey": "da2-fxmfonl2frb5ll6pvm4zm37r2q",
//     "aws_cognito_identity_pool_id": "eu-west-2:5f516461-e040-4ca6-b5fc-db25a48c3f2f",
//     "aws_cognito_region": "eu-west-2",
//     "aws_user_pools_id": "eu-west-2_PsfF9rFyZ",
//     "aws_user_pools_web_client_id": "69e5nu37ktcmu920inf9bha0gj",
//     "oauth": {}
// };
//console.log(Amplify);
//Amplify.configure(awsconfig);

AWS.config.update({
    region: "eu-west-2",
    endpoint: "http://dynamodb.eu-west-2.amazonaws.com",
    accessKeyId: "<enter-value>",
    secretAccessKey: "<enter-value>"
});

var docClient = new AWS.DynamoDB.DocumentClient();

console.log("Importing tracks into DynamoDB. Please wait.");

// var allTours = JSON.parse(fs.readFileSync('toursdata.json', 'utf8'));
// allTours.forEach(function(tour) {
//     var params = {
//         TableName: "Tour",
//         Item: {
//             "name":  tour.name,
//             "imageUrl": tour.image_url,
//             "pointsofInterests":  tour.pois,
//             "author": tour.user_id    
//         }
//     };

//     docClient.put(params, function(err, data) {
//        if (err) {
//            console.error("Unable to add tour", tour.name, ". Error JSON:", JSON.stringify(err, null, 2));
//        } else {
//            console.log("PutItem succeeded:", tour.name);
//        }
//     });
// });

// console.log("Importing PointsOfInterests into DynamoDB. Please wait.");

// var allPois = JSON.parse(fs.readFileSync('poisdata.json', 'utf8'));
// allPois.forEach(function(poi) {
//     var params = {
//         TableName: "PointOfInterest",
//         Item: {
//             "name":  poi.name,
//             "imageUrl": poi.image_url,
//             "lat": poi.latitude,
//             "lon": poi.longitude,
//             "tourId": poi.tour_id,
//             "tracks":  poi.tracks    
//         }
//     };

//     docClient.put(params, function(err, data) {
//        if (err) {
//            console.error("Unable to add poi", poi.name, ". Error JSON:", JSON.stringify(err, null, 2));
//        } else {
//            console.log("PutItem succeeded:", poi.name);
//        }
//     });
// });

// console.log("Importing tracks into DynamoDB. Please wait.");

var allTracks = JSON.parse(fs.readFileSync('tracksdata.json', 'utf8'));
allTracks.forEach(function(track) {
    var params = {
        TableName: "Track-gczsjo6h5bfvxjtab3pfsd6v2m-dev",
        Item: {
            "id": uuid.v1(),
            "order": track.order,
            "name":  track.name,
            "language": track.language,
            "audioUrl": track.audio_url,
            "imageUrl": track.image_url,
            "pointOfInterestId":  track.poi_id    
        }
    };

    docClient.put(params, function(err, data) {
       if (err) {
           console.error("Unable to add track", track.name, ". Error JSON:", JSON.stringify(err, null, 2));
       } else {
           console.log("PutItem succeeded:", track.name);
       }
    });
});
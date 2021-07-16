var { API, graphqlOperation } = require('aws-amplify');
var { seedCode } = require('./src/graphql/queries');

    let i;
    for(i = 0; i < 1000; i+= 1){
        try {
            API.graphql(graphqlOperation(seedCode(i)));
        } catch (error) {
            console.log(error)
        }
    }




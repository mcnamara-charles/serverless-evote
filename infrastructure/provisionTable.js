var AWS = require("aws-sdk");

require("dotenv").config();

AWS.config.update({
  region: "us-west-2",
  endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
});

let dynamodb = new AWS.DynamoDB();

let userparams = {
  TableName: "Users",
  KeySchema: [
    { AttributeName: "userHash", KeyType: "HASH" } // Partition key
  ],
  AttributeDefinitions: [{ AttributeName: "userHash", AttributeType: "N" }],
  // streams must be enabled for replicating the table
  //Ignore for Now
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "NEW_AND_OLD_IMAGES"
  },
  BillingMode: "PAY_PER_REQUEST"
};

let voterparams = {
  TableName: "Voters",
  KeySchema: [
    { AttributeName: "voterHash", KeyType: "HASH" } // Partition key
  ],
  AttributeDefinitions: [{ AttributeName: "voterHash", AttributeType: "N" }],
  // streams must be enabled for replicating the table
  //Ignore for Now
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "NEW_AND_OLD_IMAGES"
  },
  BillingMode: "PAY_PER_REQUEST"
};

let electionparams = {
  TableName: "Elections",
  KeySchema: [
    { AttributeName: "electionHash", KeyType: "HASH" } // Partition key
  ],
  AttributeDefinitions: [{ AttributeName: "electionHash", AttributeType: "N" }],
  // streams must be enabled for replicating the table
  //Ignore for Now
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "NEW_AND_OLD_IMAGES"
  },
  BillingMode: "PAY_PER_REQUEST"
};

let ballotparams = {
  TableName: "Ballots",
  KeySchema: [
    { AttributeName: "ballotHash", KeyType: "HASH" } // Partition key
  ],
  AttributeDefinitions: [{ AttributeName: "ballotHash", AttributeType: "N" }],
  // streams must be enabled for replicating the table
  //Ignore for Now
  StreamSpecification: {
    StreamEnabled: true,
    StreamViewType: "NEW_AND_OLD_IMAGES"
  },
  BillingMode: "PAY_PER_REQUEST"
};

(async function () {
  await dynamodb.createTable(userparams).promise();

  console.log("Created table in us-west-2");

  if (!process.env.LOCAL_DYNAMO_DB_ENDPOINT) {
    // only replicate in production
    // dynamodb local doesn't support this operation

    AWS.config.update({ region: "eu-west-2" });

    dynamodb = new AWS.DynamoDB();

    await dynamodb.createTable(userparams).promise();

    console.log("Created table in eu-west-2");

    const createUserGlobalTableParams = {
      GlobalTableName: "Users",
      ReplicationGroup: [
        {
          RegionName: "us-west-2"
        },
        {
          RegionName: "eu-west-2"
        }
      ]
    };
    await dynamodb.createGlobalTable(createUserGlobalTableParams).promise();
    console.log("Replication completed");
  }
})();

(async function () {
  await dynamodb.createTable(voterparams).promise();

  console.log("Created table in us-west-2");

  if (!process.env.LOCAL_DYNAMO_DB_ENDPOINT) {
    // only replicate in production
    // dynamodb local doesn't support this operation

    AWS.config.update({ region: "eu-west-2" });

    dynamodb = new AWS.DynamoDB();

    await dynamodb.createTable(voterparams).promise();

    console.log("Created table in eu-west-2");

    const createVoterGlobalTableParams = {
      GlobalTableName: "Voters",
      ReplicationGroup: [
        {
          RegionName: "us-west-2"
        },
        {
          RegionName: "eu-west-2"
        }
      ]
    };
    await dynamodb.createGlobalTable(createVoterGlobalTableParams).promise();
    console.log("Replication completed");
  }
})();

(async function () {
  await dynamodb.createTable(electionparams).promise();

  console.log("Created table in us-west-2");

  if (!process.env.LOCAL_DYNAMO_DB_ENDPOINT) {
    // only replicate in production
    // dynamodb local doesn't support this operation

    AWS.config.update({ region: "eu-west-2" });

    dynamodb = new AWS.DynamoDB();

    await dynamodb.createTable(electionparams).promise();

    console.log("Created table in eu-west-2");

    const createElectionGlobalTableParams = {
      GlobalTableName: "Elections",
      ReplicationGroup: [
        {
          RegionName: "us-west-2"
        },
        {
          RegionName: "eu-west-2"
        }
      ]
    };
    await dynamodb.createGlobalTable(createElectionGlobalTableParams).promise();
    console.log("Replication completed");
  }
})();

(async function () {
  await dynamodb.createTable(ballotparams).promise();

  console.log("Created table in us-west-2");

  if (!process.env.LOCAL_DYNAMO_DB_ENDPOINT) {
    // only replicate in production
    // dynamodb local doesn't support this operation

    AWS.config.update({ region: "eu-west-2" });

    dynamodb = new AWS.DynamoDB();

    await dynamodb.createTable(ballotparams).promise();

    console.log("Created table in eu-west-2");

    const createBallotGlobalTableParams = {
      GlobalTableName: "Ballots",
      ReplicationGroup: [
        {
          RegionName: "us-west-2"
        },
        {
          RegionName: "eu-west-2"
        }
      ]
    };
    await dynamodb.createGlobalTable(createBallotGlobalTableParams).promise();
    console.log("Replication completed");
  }
})();

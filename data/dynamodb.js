const getDynamoDBClient = () => {
  // important to require the sdk here rather than a top level import
  // this is to prevent the app from requiring the aws-sdk client side.
  const AWS = require("aws-sdk");

  // dynamodb is replicated across us-west-2 and eu-west-2
  // use us-west-2 for us regions or eu-west-2 for eu regions
  // you can tweak this to suit your needs
  const edgeRegion = process.env.AWS_REGION || "us-west-2";
  const dynamoDbRegion = edgeRegion.startsWith("us")
    ? "us-west-2"
    : "eu-west-2";

  const options = {
    convertEmptyValues: true,
    region: dynamoDbRegion
  };

  const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
    ? new AWS.DynamoDB.DocumentClient({
        ...options,
        endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT
      })
    : new AWS.DynamoDB.DocumentClient(options);

  return client;
};

//Read Full Table
module.exports = {
  readTable: async (table) => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName: table
      })
      .promise();

    return Items;
  },


//GET Row Functions
/*
  getuser: async (userEmail) => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName: "Users"
      })
      .promise();

    const user = Items.find((user) => user.email == userEmail);

    return user;
  },
  getvoter: async (voterHash) => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName: "Voters"
      })
      .promise();

    const voter = Items.find((voter) => voter.voterHash == voterHash);

    return voter;
  },
  getelection: async (electionHash) => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName: "Elections"
      })
      .promise();

    const election = Items.find((election) => election.electionHash == electionHash);

    return election;
  },
  getBallot: async (ballotHash) => {
    const { Items } = await getDynamoDBClient()
      .scan({
        TableName: "Ballots"
      })
      .promise();

    const ballot = Items.find((ballot) => ballot.ballotHash == ballotHash);

    return ballot;
  },
*/
  createuser: async (email, passHash, fName, lName) => {
    await getDynamoDBClient()
      .put({
        TableName: "Users",
        Item: {
          userHash: Date.now(),
          email: email,
          passHash: passHash,
          fName: fName,
          lName: lName,
          //joined: Date.now(),
        }
      })
      .promise();
  },
/*
  createvoter: async (electionId, email, voted) => {
    await getDynamoDBClient()
      .put({
        TableName: "Voters",
        Item: {
          electionId: electionId,
          email: email,
          voted: voted,
          invitedOn: Date.now(),
        }
      })
      .promise();
  },
  createelection: async (title, ballotModel, voters, managers, deadline, voteEmail, votedEmail, emailSender, notVotedEmail, publicKey, privateKey, counters, closed) => {
    await getDynamoDBClient()
      .put({
        TableName: "Elections",
        Item: {
          title: title,
          ballotModel: ballotModel,
          voters: voters,
          managers: managers,
          deadline: deadline,
          voteEmail: voteEmail,
          votedEmail: votedEmail,
          emailSender: emailSender,
          notVotedEmail: notVotedEmail,
          publicKey: publicKey,
          privateKey: privateKey,
          counters: counters,
          closed: closed,
        }
      })
      .promise();
  },
  createballot: async (ballotContent, assigned, voted, votedOn, preferences, embeddedHash, signature) => {
    await getDynamoDBClient()
      .put({
        TableName: "Ballots",
        Item: {
          ballotContent: ballotContent,
          assigned: assigned,
          voted: voted,
          votedOn: Date.now(),
          preferences: preferences,
          embeddedHash: embeddedHash,
          signature: signature,
        }
      })
      .promise();
  },
*/
};

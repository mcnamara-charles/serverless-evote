module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/sessions.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/dynamodb.js":
/*!**************************!*\
  !*** ./data/dynamodb.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst getDynamoDBClient = () => {\n  // important to require the sdk here rather than a top level import\n  // this is to prevent the app from requiring the aws-sdk client side.\n  const AWS = __webpack_require__(/*! aws-sdk */ \"aws-sdk\"); // dynamodb is replicated across us-west-2 and eu-west-2\n  // use us-west-2 for us regions or eu-west-2 for eu regions\n  // you can tweak this to suit your needs\n\n\n  const edgeRegion = process.env.AWS_REGION || \"us-west-2\";\n  const dynamoDbRegion = edgeRegion.startsWith(\"us\") ? \"us-west-2\" : \"eu-west-2\";\n  const options = {\n    convertEmptyValues: true,\n    region: dynamoDbRegion\n  };\n  const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT ? new AWS.DynamoDB.DocumentClient(_objectSpread(_objectSpread({}, options), {}, {\n    endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT\n  })) : new AWS.DynamoDB.DocumentClient(options);\n  return client;\n}; //Read Full Table\n\n\nmodule.exports = {\n  readTable: async table => {\n    const {\n      Items\n    } = await getDynamoDBClient().scan({\n      TableName: table\n    }).promise();\n    return Items;\n  },\n  //GET Row Functions\n\n  /*\n    getuser: async (userEmail) => {\n      const { Items } = await getDynamoDBClient()\n        .scan({\n          TableName: \"Users\"\n        })\n        .promise();\n  \n      const user = Items.find((user) => user.email == userEmail);\n  \n      return user;\n    },\n    getvoter: async (voterHash) => {\n      const { Items } = await getDynamoDBClient()\n        .scan({\n          TableName: \"Voters\"\n        })\n        .promise();\n  \n      const voter = Items.find((voter) => voter.voterHash == voterHash);\n  \n      return voter;\n    },\n    getelection: async (electionHash) => {\n      const { Items } = await getDynamoDBClient()\n        .scan({\n          TableName: \"Elections\"\n        })\n        .promise();\n  \n      const election = Items.find((election) => election.electionHash == electionHash);\n  \n      return election;\n    },\n    getBallot: async (ballotHash) => {\n      const { Items } = await getDynamoDBClient()\n        .scan({\n          TableName: \"Ballots\"\n        })\n        .promise();\n  \n      const ballot = Items.find((ballot) => ballot.ballotHash == ballotHash);\n  \n      return ballot;\n    },\n  */\n  createuser: async (email, passHash, fName, lName) => {\n    await getDynamoDBClient().put({\n      TableName: \"Users\",\n      Item: {\n        userHash: Date.now(),\n        email: email,\n        passHash: passHash,\n        fName: fName,\n        lName: lName //joined: Date.now(),\n\n      }\n    }).promise();\n  }\n  /*\n    createvoter: async (electionId, email, voted) => {\n      await getDynamoDBClient()\n        .put({\n          TableName: \"Voters\",\n          Item: {\n            electionId: electionId,\n            email: email,\n            voted: voted,\n            invitedOn: Date.now(),\n          }\n        })\n        .promise();\n    },\n    createelection: async (title, ballotModel, voters, managers, deadline, voteEmail, votedEmail, emailSender, notVotedEmail, publicKey, privateKey, counters, closed) => {\n      await getDynamoDBClient()\n        .put({\n          TableName: \"Elections\",\n          Item: {\n            title: title,\n            ballotModel: ballotModel,\n            voters: voters,\n            managers: managers,\n            deadline: deadline,\n            voteEmail: voteEmail,\n            votedEmail: votedEmail,\n            emailSender: emailSender,\n            notVotedEmail: notVotedEmail,\n            publicKey: publicKey,\n            privateKey: privateKey,\n            counters: counters,\n            closed: closed,\n          }\n        })\n        .promise();\n    },\n    createballot: async (ballotContent, assigned, voted, votedOn, preferences, embeddedHash, signature) => {\n      await getDynamoDBClient()\n        .put({\n          TableName: \"Ballots\",\n          Item: {\n            ballotContent: ballotContent,\n            assigned: assigned,\n            voted: voted,\n            votedOn: Date.now(),\n            preferences: preferences,\n            embeddedHash: embeddedHash,\n            signature: signature,\n          }\n        })\n        .promise();\n    },\n  */\n\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL2R5bmFtb2RiLmpzP2YyMzIiXSwibmFtZXMiOlsiZ2V0RHluYW1vREJDbGllbnQiLCJBV1MiLCJyZXF1aXJlIiwiZWRnZVJlZ2lvbiIsInByb2Nlc3MiLCJlbnYiLCJBV1NfUkVHSU9OIiwiZHluYW1vRGJSZWdpb24iLCJzdGFydHNXaXRoIiwib3B0aW9ucyIsImNvbnZlcnRFbXB0eVZhbHVlcyIsInJlZ2lvbiIsImNsaWVudCIsIkxPQ0FMX0RZTkFNT19EQl9FTkRQT0lOVCIsIkR5bmFtb0RCIiwiRG9jdW1lbnRDbGllbnQiLCJlbmRwb2ludCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZWFkVGFibGUiLCJ0YWJsZSIsIkl0ZW1zIiwic2NhbiIsIlRhYmxlTmFtZSIsInByb21pc2UiLCJjcmVhdGV1c2VyIiwiZW1haWwiLCJwYXNzSGFzaCIsImZOYW1lIiwibE5hbWUiLCJwdXQiLCJJdGVtIiwidXNlckhhc2giLCJEYXRlIiwibm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxpQkFBaUIsR0FBRyxNQUFNO0FBQzlCO0FBQ0E7QUFDQSxRQUFNQyxHQUFHLEdBQUdDLG1CQUFPLENBQUMsd0JBQUQsQ0FBbkIsQ0FIOEIsQ0FLOUI7QUFDQTtBQUNBOzs7QUFDQSxRQUFNQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLElBQTBCLFdBQTdDO0FBQ0EsUUFBTUMsY0FBYyxHQUFHSixVQUFVLENBQUNLLFVBQVgsQ0FBc0IsSUFBdEIsSUFDbkIsV0FEbUIsR0FFbkIsV0FGSjtBQUlBLFFBQU1DLE9BQU8sR0FBRztBQUNkQyxzQkFBa0IsRUFBRSxJQUROO0FBRWRDLFVBQU0sRUFBRUo7QUFGTSxHQUFoQjtBQUtBLFFBQU1LLE1BQU0sR0FBR1IsT0FBTyxDQUFDQyxHQUFSLENBQVlRLHdCQUFaLEdBQ1gsSUFBSVosR0FBRyxDQUFDYSxRQUFKLENBQWFDLGNBQWpCLGlDQUNLTixPQURMO0FBRUVPLFlBQVEsRUFBRVosT0FBTyxDQUFDQyxHQUFSLENBQVlRO0FBRnhCLEtBRFcsR0FLWCxJQUFJWixHQUFHLENBQUNhLFFBQUosQ0FBYUMsY0FBakIsQ0FBZ0NOLE9BQWhDLENBTEo7QUFPQSxTQUFPRyxNQUFQO0FBQ0QsQ0ExQkQsQyxDQTRCQTs7O0FBQ0FLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxXQUFTLEVBQUUsTUFBT0MsS0FBUCxJQUFpQjtBQUMxQixVQUFNO0FBQUVDO0FBQUYsUUFBWSxNQUFNckIsaUJBQWlCLEdBQ3RDc0IsSUFEcUIsQ0FDaEI7QUFDSkMsZUFBUyxFQUFFSDtBQURQLEtBRGdCLEVBSXJCSSxPQUpxQixFQUF4QjtBQU1BLFdBQU9ILEtBQVA7QUFDRCxHQVRjO0FBWWpCOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0VJLFlBQVUsRUFBRSxPQUFPQyxLQUFQLEVBQWNDLFFBQWQsRUFBd0JDLEtBQXhCLEVBQStCQyxLQUEvQixLQUF5QztBQUNuRCxVQUFNN0IsaUJBQWlCLEdBQ3BCOEIsR0FERyxDQUNDO0FBQ0hQLGVBQVMsRUFBRSxPQURSO0FBRUhRLFVBQUksRUFBRTtBQUNKQyxnQkFBUSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsRUFETjtBQUVKUixhQUFLLEVBQUVBLEtBRkg7QUFHSkMsZ0JBQVEsRUFBRUEsUUFITjtBQUlKQyxhQUFLLEVBQUVBLEtBSkg7QUFLSkMsYUFBSyxFQUFFQSxLQUxILENBTUo7O0FBTkk7QUFGSCxLQURELEVBWUhMLE9BWkcsRUFBTjtBQWFEO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE5SGlCLENBQWpCIiwiZmlsZSI6Ii4vZGF0YS9keW5hbW9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldER5bmFtb0RCQ2xpZW50ID0gKCkgPT4ge1xuICAvLyBpbXBvcnRhbnQgdG8gcmVxdWlyZSB0aGUgc2RrIGhlcmUgcmF0aGVyIHRoYW4gYSB0b3AgbGV2ZWwgaW1wb3J0XG4gIC8vIHRoaXMgaXMgdG8gcHJldmVudCB0aGUgYXBwIGZyb20gcmVxdWlyaW5nIHRoZSBhd3Mtc2RrIGNsaWVudCBzaWRlLlxuICBjb25zdCBBV1MgPSByZXF1aXJlKFwiYXdzLXNka1wiKTtcblxuICAvLyBkeW5hbW9kYiBpcyByZXBsaWNhdGVkIGFjcm9zcyB1cy13ZXN0LTIgYW5kIGV1LXdlc3QtMlxuICAvLyB1c2UgdXMtd2VzdC0yIGZvciB1cyByZWdpb25zIG9yIGV1LXdlc3QtMiBmb3IgZXUgcmVnaW9uc1xuICAvLyB5b3UgY2FuIHR3ZWFrIHRoaXMgdG8gc3VpdCB5b3VyIG5lZWRzXG4gIGNvbnN0IGVkZ2VSZWdpb24gPSBwcm9jZXNzLmVudi5BV1NfUkVHSU9OIHx8IFwidXMtd2VzdC0yXCI7XG4gIGNvbnN0IGR5bmFtb0RiUmVnaW9uID0gZWRnZVJlZ2lvbi5zdGFydHNXaXRoKFwidXNcIilcbiAgICA/IFwidXMtd2VzdC0yXCJcbiAgICA6IFwiZXUtd2VzdC0yXCI7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBjb252ZXJ0RW1wdHlWYWx1ZXM6IHRydWUsXG4gICAgcmVnaW9uOiBkeW5hbW9EYlJlZ2lvblxuICB9O1xuXG4gIGNvbnN0IGNsaWVudCA9IHByb2Nlc3MuZW52LkxPQ0FMX0RZTkFNT19EQl9FTkRQT0lOVFxuICAgID8gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCh7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGVuZHBvaW50OiBwcm9jZXNzLmVudi5MT0NBTF9EWU5BTU9fREJfRU5EUE9JTlRcbiAgICAgIH0pXG4gICAgOiBuZXcgQVdTLkR5bmFtb0RCLkRvY3VtZW50Q2xpZW50KG9wdGlvbnMpO1xuXG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG4vL1JlYWQgRnVsbCBUYWJsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJlYWRUYWJsZTogYXN5bmMgKHRhYmxlKSA9PiB7XG4gICAgY29uc3QgeyBJdGVtcyB9ID0gYXdhaXQgZ2V0RHluYW1vREJDbGllbnQoKVxuICAgICAgLnNjYW4oe1xuICAgICAgICBUYWJsZU5hbWU6IHRhYmxlXG4gICAgICB9KVxuICAgICAgLnByb21pc2UoKTtcblxuICAgIHJldHVybiBJdGVtcztcbiAgfSxcblxuXG4vL0dFVCBSb3cgRnVuY3Rpb25zXG4vKlxuICBnZXR1c2VyOiBhc3luYyAodXNlckVtYWlsKSA9PiB7XG4gICAgY29uc3QgeyBJdGVtcyB9ID0gYXdhaXQgZ2V0RHluYW1vREJDbGllbnQoKVxuICAgICAgLnNjYW4oe1xuICAgICAgICBUYWJsZU5hbWU6IFwiVXNlcnNcIlxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG5cbiAgICBjb25zdCB1c2VyID0gSXRlbXMuZmluZCgodXNlcikgPT4gdXNlci5lbWFpbCA9PSB1c2VyRW1haWwpO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH0sXG4gIGdldHZvdGVyOiBhc3luYyAodm90ZXJIYXNoKSA9PiB7XG4gICAgY29uc3QgeyBJdGVtcyB9ID0gYXdhaXQgZ2V0RHluYW1vREJDbGllbnQoKVxuICAgICAgLnNjYW4oe1xuICAgICAgICBUYWJsZU5hbWU6IFwiVm90ZXJzXCJcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuXG4gICAgY29uc3Qgdm90ZXIgPSBJdGVtcy5maW5kKCh2b3RlcikgPT4gdm90ZXIudm90ZXJIYXNoID09IHZvdGVySGFzaCk7XG5cbiAgICByZXR1cm4gdm90ZXI7XG4gIH0sXG4gIGdldGVsZWN0aW9uOiBhc3luYyAoZWxlY3Rpb25IYXNoKSA9PiB7XG4gICAgY29uc3QgeyBJdGVtcyB9ID0gYXdhaXQgZ2V0RHluYW1vREJDbGllbnQoKVxuICAgICAgLnNjYW4oe1xuICAgICAgICBUYWJsZU5hbWU6IFwiRWxlY3Rpb25zXCJcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuXG4gICAgY29uc3QgZWxlY3Rpb24gPSBJdGVtcy5maW5kKChlbGVjdGlvbikgPT4gZWxlY3Rpb24uZWxlY3Rpb25IYXNoID09IGVsZWN0aW9uSGFzaCk7XG5cbiAgICByZXR1cm4gZWxlY3Rpb247XG4gIH0sXG4gIGdldEJhbGxvdDogYXN5bmMgKGJhbGxvdEhhc2gpID0+IHtcbiAgICBjb25zdCB7IEl0ZW1zIH0gPSBhd2FpdCBnZXREeW5hbW9EQkNsaWVudCgpXG4gICAgICAuc2Nhbih7XG4gICAgICAgIFRhYmxlTmFtZTogXCJCYWxsb3RzXCJcbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuXG4gICAgY29uc3QgYmFsbG90ID0gSXRlbXMuZmluZCgoYmFsbG90KSA9PiBiYWxsb3QuYmFsbG90SGFzaCA9PSBiYWxsb3RIYXNoKTtcblxuICAgIHJldHVybiBiYWxsb3Q7XG4gIH0sXG4qL1xuICBjcmVhdGV1c2VyOiBhc3luYyAoZW1haWwsIHBhc3NIYXNoLCBmTmFtZSwgbE5hbWUpID0+IHtcbiAgICBhd2FpdCBnZXREeW5hbW9EQkNsaWVudCgpXG4gICAgICAucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOiBcIlVzZXJzXCIsXG4gICAgICAgIEl0ZW06IHtcbiAgICAgICAgICB1c2VySGFzaDogRGF0ZS5ub3coKSxcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgcGFzc0hhc2g6IHBhc3NIYXNoLFxuICAgICAgICAgIGZOYW1lOiBmTmFtZSxcbiAgICAgICAgICBsTmFtZTogbE5hbWUsXG4gICAgICAgICAgLy9qb2luZWQ6IERhdGUubm93KCksXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAucHJvbWlzZSgpO1xuICB9LFxuLypcbiAgY3JlYXRldm90ZXI6IGFzeW5jIChlbGVjdGlvbklkLCBlbWFpbCwgdm90ZWQpID0+IHtcbiAgICBhd2FpdCBnZXREeW5hbW9EQkNsaWVudCgpXG4gICAgICAucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOiBcIlZvdGVyc1wiLFxuICAgICAgICBJdGVtOiB7XG4gICAgICAgICAgZWxlY3Rpb25JZDogZWxlY3Rpb25JZCxcbiAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgdm90ZWQ6IHZvdGVkLFxuICAgICAgICAgIGludml0ZWRPbjogRGF0ZS5ub3coKSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG4gIH0sXG4gIGNyZWF0ZWVsZWN0aW9uOiBhc3luYyAodGl0bGUsIGJhbGxvdE1vZGVsLCB2b3RlcnMsIG1hbmFnZXJzLCBkZWFkbGluZSwgdm90ZUVtYWlsLCB2b3RlZEVtYWlsLCBlbWFpbFNlbmRlciwgbm90Vm90ZWRFbWFpbCwgcHVibGljS2V5LCBwcml2YXRlS2V5LCBjb3VudGVycywgY2xvc2VkKSA9PiB7XG4gICAgYXdhaXQgZ2V0RHluYW1vREJDbGllbnQoKVxuICAgICAgLnB1dCh7XG4gICAgICAgIFRhYmxlTmFtZTogXCJFbGVjdGlvbnNcIixcbiAgICAgICAgSXRlbToge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICBiYWxsb3RNb2RlbDogYmFsbG90TW9kZWwsXG4gICAgICAgICAgdm90ZXJzOiB2b3RlcnMsXG4gICAgICAgICAgbWFuYWdlcnM6IG1hbmFnZXJzLFxuICAgICAgICAgIGRlYWRsaW5lOiBkZWFkbGluZSxcbiAgICAgICAgICB2b3RlRW1haWw6IHZvdGVFbWFpbCxcbiAgICAgICAgICB2b3RlZEVtYWlsOiB2b3RlZEVtYWlsLFxuICAgICAgICAgIGVtYWlsU2VuZGVyOiBlbWFpbFNlbmRlcixcbiAgICAgICAgICBub3RWb3RlZEVtYWlsOiBub3RWb3RlZEVtYWlsLFxuICAgICAgICAgIHB1YmxpY0tleTogcHVibGljS2V5LFxuICAgICAgICAgIHByaXZhdGVLZXk6IHByaXZhdGVLZXksXG4gICAgICAgICAgY291bnRlcnM6IGNvdW50ZXJzLFxuICAgICAgICAgIGNsb3NlZDogY2xvc2VkLFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnByb21pc2UoKTtcbiAgfSxcbiAgY3JlYXRlYmFsbG90OiBhc3luYyAoYmFsbG90Q29udGVudCwgYXNzaWduZWQsIHZvdGVkLCB2b3RlZE9uLCBwcmVmZXJlbmNlcywgZW1iZWRkZWRIYXNoLCBzaWduYXR1cmUpID0+IHtcbiAgICBhd2FpdCBnZXREeW5hbW9EQkNsaWVudCgpXG4gICAgICAucHV0KHtcbiAgICAgICAgVGFibGVOYW1lOiBcIkJhbGxvdHNcIixcbiAgICAgICAgSXRlbToge1xuICAgICAgICAgIGJhbGxvdENvbnRlbnQ6IGJhbGxvdENvbnRlbnQsXG4gICAgICAgICAgYXNzaWduZWQ6IGFzc2lnbmVkLFxuICAgICAgICAgIHZvdGVkOiB2b3RlZCxcbiAgICAgICAgICB2b3RlZE9uOiBEYXRlLm5vdygpLFxuICAgICAgICAgIHByZWZlcmVuY2VzOiBwcmVmZXJlbmNlcyxcbiAgICAgICAgICBlbWJlZGRlZEhhc2g6IGVtYmVkZGVkSGFzaCxcbiAgICAgICAgICBzaWduYXR1cmU6IHNpZ25hdHVyZSxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5wcm9taXNlKCk7XG4gIH0sXG4qL1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/dynamodb.js\n");

/***/ }),

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dynamodb */ \"./data/dynamodb.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYXRhL2luZGV4LmpzPzI5MjYiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiJBQUFBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLG1CQUFPLENBQUMsc0NBQUQsQ0FBeEIiLCJmaWxlIjoiLi9kYXRhL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9keW5hbW9kYlwiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/index.js\n");

/***/ }),

/***/ "./pages/api/sessions.js":
/*!*******************************!*\
  !*** ./pages/api/sessions.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data */ \"./data/index.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst bcrypt = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__[\"withIronSession\"])(async (req, res) => {\n  if (req.method === \"POST\") {\n    const users = await _data__WEBPACK_IMPORTED_MODULE_1___default.a.readTable(\"Users\");\n    const {\n      email,\n      password\n    } = req.body;\n\n    for (let i = 0; i < users.length; i++) {\n      if (users[i].email === email) {\n        var match = bcrypt.compareSync(password, users[i].passHash);\n\n        if (match) {\n          const fName = users[i].fName;\n          req.session.set(\"user\", {\n            email,\n            fName\n          });\n          await req.session.save();\n          return res.status(201).send(\"\");\n        } else {\n          return res.status(403).send(\"\");\n        }\n      }\n    }\n\n    return res.status(403).send(\"\");\n  }\n\n  return res.status(404).send(\"\");\n}, {\n  cookieName: \"LOGIN\",\n  cookieOptions: {\n    secure: false ? undefined : false\n  },\n  password: process.env.APPLICATION_SECRET\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2Vzc2lvbnMuanM/NzI5OCJdLCJuYW1lcyI6WyJiY3J5cHQiLCJyZXF1aXJlIiwid2l0aElyb25TZXNzaW9uIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcnMiLCJkYXRhIiwicmVhZFRhYmxlIiwiZW1haWwiLCJwYXNzd29yZCIsImJvZHkiLCJpIiwibGVuZ3RoIiwibWF0Y2giLCJjb21wYXJlU3luYyIsInBhc3NIYXNoIiwiZk5hbWUiLCJzZXNzaW9uIiwic2V0Iiwic2F2ZSIsInN0YXR1cyIsInNlbmQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSIsInByb2Nlc3MiLCJlbnYiLCJBUFBMSUNBVElPTl9TRUNSRVQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQywwQkFBRCxDQUF0Qjs7QUFFZUMsd0lBQWUsQ0FDNUIsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2xCLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLEtBQUssR0FBRyxNQUFNQyw0Q0FBSSxDQUFDQyxTQUFMLENBQWUsT0FBZixDQUFwQjtBQUNBLFVBQU07QUFBRUMsV0FBRjtBQUFTQztBQUFULFFBQXNCUCxHQUFHLENBQUNRLElBQWhDOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sS0FBSyxDQUFDTyxNQUExQixFQUFrQ0QsQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxVQUFJTixLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTSCxLQUFULEtBQW1CQSxLQUF2QixFQUE4QjtBQUM1QixZQUFJSyxLQUFLLEdBQUdkLE1BQU0sQ0FBQ2UsV0FBUCxDQUFtQkwsUUFBbkIsRUFBNkJKLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNJLFFBQXRDLENBQVo7O0FBQ0EsWUFBSUYsS0FBSixFQUFXO0FBQ1QsZ0JBQU1HLEtBQUssR0FBR1gsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0ssS0FBdkI7QUFDQWQsYUFBRyxDQUFDZSxPQUFKLENBQVlDLEdBQVosQ0FBZ0IsTUFBaEIsRUFBd0I7QUFBRVYsaUJBQUY7QUFBU1E7QUFBVCxXQUF4QjtBQUNBLGdCQUFNZCxHQUFHLENBQUNlLE9BQUosQ0FBWUUsSUFBWixFQUFOO0FBQ0EsaUJBQU9oQixHQUFHLENBQUNpQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsRUFBckIsQ0FBUDtBQUNELFNBTEQsTUFLTztBQUNMLGlCQUFPbEIsR0FBRyxDQUFDaUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCLEVBQXJCLENBQVA7QUFDRDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBT2xCLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFyQixDQUFQO0FBQ0Q7O0FBQ0QsU0FBT2xCLEdBQUcsQ0FBQ2lCLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixFQUFyQixDQUFQO0FBQ0QsQ0F0QjJCLEVBdUI1QjtBQUNFQyxZQUFVLEVBQUUsT0FEZDtBQUVFQyxlQUFhLEVBQUU7QUFDYkMsVUFBTSxFQUFFLFFBQXdDLFNBQXhDLEdBQStDO0FBRDFDLEdBRmpCO0FBS0VmLFVBQVEsRUFBRWdCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQztBQUx4QixDQXZCNEIsQ0FBOUIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvc2Vzc2lvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoSXJvblNlc3Npb24gfSBmcm9tIFwibmV4dC1pcm9uLXNlc3Npb25cIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuLi8uLi9kYXRhXCI7XG5cbmNvbnN0IGJjcnlwdCA9IHJlcXVpcmUoJ2JjcnlwdGpzJyk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhJcm9uU2Vzc2lvbihcbiAgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGRhdGEucmVhZFRhYmxlKFwiVXNlcnNcIilcbiAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSByZXEuYm9keTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodXNlcnNbaV0uZW1haWwgPT09IGVtYWlsKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gYmNyeXB0LmNvbXBhcmVTeW5jKHBhc3N3b3JkLCB1c2Vyc1tpXS5wYXNzSGFzaCk7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBmTmFtZSA9IHVzZXJzW2ldLmZOYW1lXG4gICAgICAgICAgICByZXEuc2Vzc2lvbi5zZXQoXCJ1c2VyXCIsIHsgZW1haWwsIGZOYW1lIH0pO1xuICAgICAgICAgICAgYXdhaXQgcmVxLnNlc3Npb24uc2F2ZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAxKS5zZW5kKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDMpLnNlbmQoXCJcIik7XG4gICAgfVxuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuc2VuZChcIlwiKTtcbiAgfSxcbiAge1xuICAgIGNvb2tpZU5hbWU6IFwiTE9HSU5cIixcbiAgICBjb29raWVPcHRpb25zOiB7XG4gICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IHRydWUgOiBmYWxzZVxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkFQUExJQ0FUSU9OX1NFQ1JFVFxuICB9XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/sessions.js\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhd3Mtc2RrXCI/NTE0MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhd3Mtc2RrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXdzLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///aws-sdk\n");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiP2NlNTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYmNyeXB0anMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///bcryptjs\n");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-iron-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWlyb24tc2Vzc2lvblwiP2JlMWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1pcm9uLXNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-iron-session\n");

/***/ })

/******/ });
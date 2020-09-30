// const makeRequest = (location) => {
//   return new Promise((resolve, reject) => {
//     console.log("Making request to " + location);
//     if (location === "Google") {
//       resolve("Google says Hi!");
//     } else {
//       reject("Wrong location man");
//     }
//   });
// };
// const processReq = (response) => {
//   return new Promise((resolve, reject) => {
//     console.log("Processing Request");
//     resolve("Extra Info: " + response);
//   });
// };

// // Using Promises
// // makeRequest("Google")
// //   .then((response) => {
// //     console.log("Response received");
// //     return processReq(response);
// //   })
// //   .then((processedResp) => {
// //     console.log(processedResp);
// //   })
// //   .catch((err) => console.log(err));

// // Using Async Await
// const doWork = async (location) => {
//   try {
//     const response = await makeRequest(location);
//     console.log("Response received");
//     const processedResp = await processReq(response);
//     console.log("Processed");
//   } catch (error) {
//     console.log(error);
//   }
// };

// doWork("Facebook");

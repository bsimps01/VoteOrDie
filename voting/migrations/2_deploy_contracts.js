const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  deployer.deploy(Voting, ['Agent Orange', 'Sleepy Moe', 'Old Flanders'].map(name => web3.utils.asciiToHex(name)));
};

// require('babel-register')
// module.exports = {
//   networks: {
//     develop: {
//       port: 8080,      
//       host: 'localhost',
//       network_id: '*',
//       gas: 6700000
//     }
//   },
//   compilers: {
//     solc: {
//       version: "0.6.4"
//       //Uncomment and update the solc version as shown here
//    }
//   }
// }
var ConvertLib = artifacts.require("./ConvertLib.sol");
var RPS = artifacts.require("./RPS.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, RPS);
  deployer.deploy(RPS);
};

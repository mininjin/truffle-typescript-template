const HelloWorld = artifacts.require("HelloWorld");

const migration: Truffle.Migration = function (deployer) {
  deployer.deploy(HelloWorld);
};

module.exports = migration;

export {};

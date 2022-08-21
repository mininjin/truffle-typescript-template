/**
 * See https://trufflesuite.com/docs/truffle/reference/configuration fo details
 */

require("ts-node/register");

module.exports = {
  // directory configs
  contracts_directory: "./contracts",
  contracts_build_directory: "./build/contracts",
  test_directory: "./build/test",
  migrations_directory: "./build/migrations",
  // network config
  networks: {
    // local server by Ganache
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
    },
  },
};

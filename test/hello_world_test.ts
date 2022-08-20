import type {
  HelloWorldContract,
  HelloWorldInstance,
} from "../types/truffle-contracts";

const HelloWorldContract: HelloWorldContract = artifacts.require("HelloWorld");

contract("HelloWorld", () => {
  let helloWorld: HelloWorldInstance;

  describe("initialization", () => {
    beforeEach(async () => {
      helloWorld = await HelloWorldContract.deployed();
    });

    it("get 'Hello World'", async () => {
      const response = await helloWorld.hello();
      assert(response, "Hello World");
    });

    it("set message", async () => {
      const message = "Test Message";
      await helloWorld.setMessage(message);
      const actual = await helloWorld.hello();
      assert.equal(actual, message, "Hello World");
    });
  });
});

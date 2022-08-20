# truffle-typescript-template

This repo is a typescript template for truffle.


## Set up
Install dependencies and create type definitions to which test and migrations files refer.
````
yarn install
yarn typecheck
````


## Next steps
1. create other contracts.
1. compile them and create type definitions by `yarn typecheck`.
1. create tests of contracts
1. execute test by `yarn test`.
1. create client app under the directory `client`.
1. compile contracts and copy outputs into client side by `yarn compile`.


## Commands

### Compile solidity files and create types of contracts

```
yarn typecheck
```

### Compile and copy into client

```
yarn compile
```

### Test

```
yarn test
```

### Migration

```
yarn migrate
```


## References

- [truffle config](https://trufflesuite.com/docs/truffle/reference/configuration)
- [typechain](https://github.com/dethcrypto/TypeChain)

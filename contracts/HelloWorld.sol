// SPDX-License-Identifier: MIT
pragma solidity <0.9.0;

contract HelloWorld {
    string private _message = "Hello World";

    function hello() public view returns (string memory message) {
        return _message;
    }

    function setMessage(string memory message) public {
        _message = message;
    }
}

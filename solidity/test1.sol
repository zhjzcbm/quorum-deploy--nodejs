pragma solidity ^0.5.0;

contract Lottery {
    string public x = "hello";
    uint public z;
    constructor(uint256 _z)public{
        z = _z;
    }
    function Show()public view returns(string memory){
      return x;
	}
    function Set(string memory z ) public {
        x = z;
    }

}


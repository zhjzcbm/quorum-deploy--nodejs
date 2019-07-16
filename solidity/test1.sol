pragma solidity ^0.4.24;

contract test1 {
    string public x = "hello";
    uint256 public z;
    string public c;
    constructor(uint256 _z,string _c)public{
        z = _z;
        c = _c;
    }
    function Show()public view returns(string memory){
      return x;
	}
    function Set(string memory q ) public {
        x = q;
    }

}

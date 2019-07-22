pragma solidity ^0.4.24;

contract set {
    string public x = "hello";
    function Show()public view returns(string){
      return x;
	}
    function Set(string z) public {
        x = z;
    }

}


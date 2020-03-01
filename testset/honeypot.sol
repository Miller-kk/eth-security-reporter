//pragma solidity ^0.4.24;
contract honeypot {

    mapping(address => uint256) balanceOf;

    constructor(uint256 init) {
        balanceOf[msg.sender] = init;
    }

    function withdraw(uint256 _amount, uint256 _num) public returns (bool) {
            require(_amount <= balanceOf[msg.sender]);
            if (f() != 0 && f() == _num){
                msg.sender.call.value(this.balance)("");
                balanceOf[msg.sender] -= _amount;
                return true;
            }else{
                return false;
            }
    }

    function f() public pure returns(uint8 x) {
        uint8 y = uint8(2) ** uint8(8);
        return 0 ** y;
    }

    function g() public returns (bool) {
        if(f() == 0) {
            return true;
        }else {
            return false;
        }
    }

    function vuln() public returns (bool) {



    }
}

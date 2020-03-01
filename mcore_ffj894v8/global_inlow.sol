pragma solidity ^0.4.24;
contract inlow {

    mapping (address => uint256) public balanceOf;
    
    function transfer(address _to, uint256 _value) public {
            require(balanceOf[msg.sender] - _value >= 0);
            balanceOf[msg.sender] -= _value;
            balanceOf[_to] += _value;
    }
    
    function() external payable {
        balanceOf[msg.sender] += msg.value;
    }   

}

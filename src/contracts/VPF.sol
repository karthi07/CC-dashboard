pragma solidity ^0.5.0;

contract VPF {
  string public name = 'VPF';
  uint256 public vpfCount = 0;
  mapping(uint256 => VPFcard) public vpfs;

  struct VPFcard {
    uint256 id;
    string status;
    string pertcentage;
    string ethAmt;
    uint8 trend;
    uint8 value;
  }

  event VPFcardCreated(
    uint256 id,
    string status,
    string pertcentage,
    string ethAmt,
    uint8 trend,
    uint8 value
  );

  function createVPF() public {
    vpfs[vpfCount] = VPFcard(vpfCount,'Outcome in 6h 41m','20 %','$ 34,346.00',1,3);
    vpfCount++;
    emit VPFcardCreated(vpfCount,'Outcome in 6h 41m','20 %','$ 34,346.00',1,3);
  }
}

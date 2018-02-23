pragma solidity ^0.4.16;

contract TestSlotManager {
    address private owner;
    function TestSlotManager() {
        owner = msg.sender;
    }

    //Bays / ProductTypes
    bytes32 typeA = "typeA";
    bytes32 typeB = "typeB";
    bytes32 typeC = "typeC";

    // addresses of reserved Timeslot contracts
    address[] typeAReservedTimeSlotContracts;
    address[] typeBReservedTimeSlotContracts;
    address[] typeCReservedTimeSlotContracts;

    struct TimeSlot {
        uint startTime;
        bool reserved;
        address owner;
        uint price;
    }
    //uint = slotID,
    mapping(uint => TimeSlot) timeSlots;

    function getFreeSlots() view returns(uint[94]){
        uint[94] freeSlots;
        for(uint i=0; i<94; i++){
            if(timeSlots[i].reserved == false){
                freeSlots[i]=0;
            }
            if(timeSlots[i].reserved == true){
                freeSlots[i]=1;
            }
        }
        return freeSlots;
    }

    function createNewTimeSlotContract(uint _timeSlotID, address _deliverant) returns(address) {
        address newAddressA = address(new TimeSlotContractTypeA(_deliverant));
        typeAReservedTimeSlotContracts.push(newAddressA);
        timeSlots[0];
    }

    function getProductGroupes() view returns(bytes32,bytes32,bytes32){
         return(typeA,typeB,typeC);
    }
}

contract TimeSlotContractTypeA {
    address owner;
    //add only SlotManager modifier
    function TimeSlotContractTypeA(address _deliverant) {
        owner = _deliverant;
    }
}

contract TimeSlotContractTypeB {
    address owner;
    //add only SlotManager modifier
    function TimeSlotContractTypeB(address _deliverant) {
        owner = _deliverant;
    }
}

contract TimeSlotContractTypeC {
    address owner;
    //add only SlotManager modifier
    function TimeSlotContractTypeC(address _deliverant) {
        owner = _deliverant;
    }
}

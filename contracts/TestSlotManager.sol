pragma solidity ^0.4.16;

contract TestSlotManager {

/*
TBD:

- Supplier: get all my booked time slots
- Supplier: pay for aquiring time slot
- Modifier: Only TestSlotManager sets owner though aquireNewTimeSlotContract
- aquire multiple slots at the same time

*/


    address private owner;

    function TestSlotManager() public{
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
        bool reserved;
        address owner;
        uint price;
    }

    //Product Type => ( timeSlotContractIndex => TimeSlot "Object")
    mapping(bytes32 => mapping(uint => TimeSlot)) typeSpecificTimeSlots;

    function getFreeSlots(bytes32 _productType) view public returns(uint[96]){
        uint[96] memory freeSlots;
        for(uint i=0; i<96; i++){
            if(typeSpecificTimeSlots[_productType][i].reserved == false){
                freeSlots[i]=0;
            }
            if(typeSpecificTimeSlots[_productType][i].reserved == true){
                freeSlots[i]=1;
            }
        }
        return freeSlots;
    }

    function aquireNewTimeSlotContract(bytes32 _productType, uint _timeSlotID, address _deliverant, bytes32 _date) public returns(address) {
        if(_productType == typeA){
        address newAddressA = address(new TimeSlotContractTypeA(_deliverant,_date));
        typeAReservedTimeSlotContracts.push(newAddressA);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
        if(_productType == typeB){
        address newAddressB = address(new TimeSlotContractTypeB(_deliverant,_date));
        typeBReservedTimeSlotContracts.push(newAddressB);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
        if(_productType == typeC){
        address newAddressC = address(new TimeSlotContractTypeC(_deliverant,_date));
        typeCReservedTimeSlotContracts.push(newAddressC);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
    }

    function getProductGroupes() view public returns(bytes32,bytes32,bytes32) {
         return(typeA,typeB,typeC);
    }

    function setPrice(uint _timeSlotID, uint _price, bytes32 _productType) public {
        typeSpecificTimeSlots[_productType][_timeSlotID].price = _price;
    }

    function getTimeSlotPrice(uint _timeSlotID, bytes32 _productType) view public returns(uint) {
        return typeSpecificTimeSlots[_productType][_timeSlotID].price;
    }
}

contract TimeSlotContractTypeA {
    address owner;
    bytes32 date;
    //add only SlotManager modifier
    function TimeSlotContractTypeA(address _deliverant, bytes32 _date) public {
        owner = _deliverant;
        date = _date;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) {
      owner = _newOwner;
    }
}

contract TimeSlotContractTypeB {
    address owner;
    bytes32 date;
    //add only SlotManager modifier
    function TimeSlotContractTypeB(address _deliverant, bytes32 _date) public {
        owner = _deliverant;
        date = _date;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) {
      owner = _newOwner;
    }
}

contract TimeSlotContractTypeC {
    address owner;
    bytes32 date;
    //add only SlotManager modifier
    function TimeSlotContractTypeC(address _deliverant, bytes32 _date) public {
        owner = _deliverant;
        date = _date;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) {
      owner = _newOwner;
    }
}

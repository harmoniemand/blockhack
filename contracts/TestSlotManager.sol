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
        bool reserved;
        address owner;
        uint price;
    }

    mapping(bytes32 => mapping(uint => TimeSlot)) typeSpecificTimeSlots;

    function getFreeSlots(bytes32 _productType) view returns(uint[94]){
        uint[94] freeSlots;
        for(uint i=0; i<94; i++){
            if(typeSpecificTimeSlots[_productType][i].reserved == false){
                freeSlots[i]=0;
            }
            if(typeSpecificTimeSlots[_productType][i].reserved == true){
                freeSlots[i]=1;
            }
        }
        return freeSlots;
    }

    function createNewTimeSlotContract(bytes32 _productType, uint _timeSlotID, address _deliverant) returns(address) {
        if(_productType == typeA){
        address newAddressA = address(new TimeSlotContractTypeA(_deliverant));
        typeAReservedTimeSlotContracts.push(newAddressA);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
        if(_productType == typeB){
        address newAddressB = address(new TimeSlotContractTypeB(_deliverant));
        typeBReservedTimeSlotContracts.push(newAddressB);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
        if(_productType == typeC){
        address newAddressC = address(new TimeSlotContractTypeC(_deliverant));
        typeCReservedTimeSlotContracts.push(newAddressC);
        typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
        typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
        }
    }

    function getProductGroupes() view returns(bytes32,bytes32,bytes32){
         return(typeA,typeB,typeC);
    }

    function setPrice(uint _timeSlotID, uint _price, bytes32 _productType) {
        typeSpecificTimeSlots[_productType][_timeSlotID].price = _price;
    }
    
    function getTimeSlotPrice(uint _timeSlotID, bytes32 _productType) view returns(uint) {
        return typeSpecificTimeSlots[_productType][_timeSlotID].price;
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

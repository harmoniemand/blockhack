pragma solidity ^0.4.16;

contract SlotManager {

    address private owner;
    function SlotManager() {
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

    // addresses of freed Timeslot contracts
    address[] typeAFreedTimeSlotContracts;
    address[] typeBFreedTimeSlotContracts;
    address[] typeCFreedTimeSlotContracts;

    // Free Timeslot
    uint[94] typeAFreeTimeSlots;
    uint[94] typeBFreeTimeSlots;
    uint[94] typeCFreeTimeSlots;

    // Reserved Timeslots
    uint[] typeAReservedTimeSlots;
    uint[] typeBReservedTimeSlots;
    uint[] typeCReservedTimeSlots;

    //timeslot time => ( BayType => Bay )
    mapping(uint => mapping(bytes32 => Bay)) specificBayTimeslot;
    //mapping Bays / ProductTypes to Timeslots
    mapping(bytes32 => uint[]) timeSlots;

    struct Bay {
        address owner;
        bool reservedTimeSlot;
    }

    struct timeSlot {
        uint time;
        bool reserved;
        address owner;
    }

    function getFreeTimeslots(bytes32 _type) view returns(uint[]) {
        return timeSlots[_type];
    }

    //add only TimeSlotContract modifier
    function createNewTimeSlotContract(uint slotNumber, bytes32 _type, address _deliverant, uint _time) returns(address) {
        if(_type==typeA) {
        address newAddressA = address(new TimeSlotContractTypeC(_deliverant));
        typeAReservedTimeSlotContracts.push(newAddressA);
        specificBayTimeslot[_time][_type].reservedTimeSlot = true;
        specificBayTimeslot[_time][_type].owner = _deliverant;
        }
        else if(_type==typeB) {
        address newAddressB = address(new TimeSlotContractTypeB(_deliverant));
        typeBReservedTimeSlotContracts.push(newAddressB);
        specificBayTimeslot[_time][_type].reservedTimeSlot = true;
        specificBayTimeslot[_time][_type].owner = _deliverant;
        }
        if(_type==typeC) {
        address newAddressC = address(new TimeSlotContractTypeC(_deliverant));
        typeCReservedTimeSlotContracts.push(newAddressC);
        specificBayTimeslot[_time][_type].reservedTimeSlot = true;
        specificBayTimeslot[_time][_type].owner = _deliverant;
        }
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

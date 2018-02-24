pragma solidity ^0.4.6;

contract TestSlotManager {

/*
TBD:

- Supplier: get all my booked time slots
- Supplier: pay for aquiring time slot
- Modifier: Only TestSlotManager sets owner though aquireNewTimeSlotContract
- aquire multiple slots at the same time

*/
    //the owner of the contract
    address private owner;

    function TestSlotManager() public{
        owner = msg.sender;
    }



    //Bays / ProductTypes
    bytes32 typeA = "typeA";
    bytes32 typeB = "typeB";
    bytes32 typeC = "typeC";

    // experimental
    // addresses of reserved Timeslot contracts
    /*
    address[] typeAReservedTimeSlotContracts;
    address[] typeBReservedTimeSlotContracts;
    address[] typeCReservedTimeSlotContracts; */

    struct TimeSlot {
        bool reserved;
        address owner;
        uint price;
    }

    struct SupplierBookings {
      address[] timeSlotAddresses;
    }


    modifier onlyBy(address _account)
    {
        require(msg.sender == _account);
        _;
    }


    //Product Type => ( timeSlotContractIndex => TimeSlot "Object")
    mapping(bytes32 => mapping(uint => TimeSlot)) typeSpecificTimeSlots;
    mapping (address => SupplierBookings) supplierToTimeSlotMapping;


    function setPrice(uint _timeSlotID, uint _price, bytes32 _productType) public {
        typeSpecificTimeSlots[_productType][_timeSlotID].price = _price;
    }


    function getProductGroups() view public returns(bytes32,bytes32,bytes32) {
         return(typeA,typeB,typeC);
    }


    function getTimeSlotPrice(uint _timeSlotID, bytes32 _productType) view public returns(uint) {
        return typeSpecificTimeSlots[_productType][_timeSlotID].price;
    }


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


    //add modifier for
    function aquireNewTimeSlotContract(bytes32 _productType, uint _timeSlotID, address _deliverant, bytes32 _date) public payable onlyBy(owner) returns(address) {
        uint price = getTimeSlotPrice(_timeSlotID, _productType);
        if(!typeSpecificTimeSlots[_productType][_timeSlotID].reserved == false){revert();}
        if(msg.value <= price) {
            if(!owner.send(msg.value)) {
            revert();
            }
        if(_productType == typeA) {
            uint timeA = 15*_timeSlotID;
            address newAddressA = address(new TimeSlotContractTypeA(_deliverant,_date,timeA));
        //    typeAReservedTimeSlotContracts.push(newAddressA);
            typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
            typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
            supplierToTimeSlotMapping[_deliverant].timeSlotAddresses.push(newAddressA);
            return newAddressA;
            }
        }
        if(_productType == typeB){

            uint timeB = 15*_timeSlotID;
            address newAddressB = address(new TimeSlotContractTypeB(_deliverant,_date,timeB));
      //      typeBReservedTimeSlotContracts.push(newAddressB);
            typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
            typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
            supplierToTimeSlotMapping[_deliverant].timeSlotAddresses.push(newAddressB);
            return newAddressB;
        }
        if(_productType == typeC){
            uint timeC = 15*_timeSlotID;
            address newAddressC = address(new TimeSlotContractTypeC(_deliverant,_date,timeC));
      //      typeCReservedTimeSlotContracts.push(newAddressC);
            typeSpecificTimeSlots[_productType][_timeSlotID].reserved = true;
            typeSpecificTimeSlots[_productType][_timeSlotID].owner = _deliverant;
            supplierToTimeSlotMapping[_deliverant].timeSlotAddresses.push(newAddressC);
            return newAddressC;
        }
    }



    //add only supplier modifier
    function getSupplierTimeslots() view public returns(address[]){
      return supplierToTimeSlotMapping[msg.sender].timeSlotAddresses;
    }

}

contract TimeSlotContractTypeA {
    address owner;
    bytes32 date;
    uint time;
    //add only SlotManager modifier
    function TimeSlotContractTypeA(address _deliverant, bytes32 _date, uint _time) public {
        owner = _deliverant;
        date = _date;
        time = _time;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) public {
      owner = _newOwner;
    }

    function getCurrentOwner() view public returns(address) {
        return owner;
    }

    function getDateAndTime() view public returns(bytes32,uint) {
        return (date,time);
    }
}

contract TimeSlotContractTypeB {
    address owner;
    bytes32 date;
    uint time;
    //add only SlotManager modifier
    function TimeSlotContractTypeB(address _deliverant, bytes32 _date, uint _time) public {
        owner = _deliverant;
        date = _date;
        time = _time;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) public {
      owner = _newOwner;
    }

    function getCurrentOwner() view public returns(address) {
        return owner;
    }

    function getDateAndTime() view public returns(bytes32,uint) {
        return (date,time);
    }
}

contract TimeSlotContractTypeC {
    address owner;
    bytes32 date;
    uint time;
    //add only SlotManager modifier
    function TimeSlotContractTypeC(address _deliverant, bytes32 _date, uint _time) public {
        owner = _deliverant;
        date = _date;
        time = _time;
    }
    //add onlyOwner modifier
    function changeOwnership(address _newOwner) public {
      owner = _newOwner;
    }

    function getCurrentOwner() view public returns(address) {
        return owner;
    }

    function getDateAndTime() view public returns(bytes32,uint) {
        return (date,time);
    }
}

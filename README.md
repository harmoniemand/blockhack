# Verzeichnis Contracts:

## Nummer 1:

Addresse:
0xede7e1368978b49215911bdb89203bb563fffdc3

Daten:
96 Timeslot-Abschnitte
Supplier: 0xccf223c4d32013e058ad45a03447f5b4b51186c6, bookedTimeSlots: 0x9f1a95f10025a0b350a4558403ba1c4a542c788e
getFreeSlots("typeA"): uint[96]: index:0 => 00:00 booked

## Nummer 2:

Addresse:
0x81be5f1f599e4e557eff6cf89b2cd8185c15f372

Daten:
96 Timeslot-Abschnitte
Supplier: 0xccf223c4d32013e058ad45a03447f5b4b51186c6, bookedTimeSlots: 0xf993318c69392031e6365227c6a4d174a064ee0f
getFreeSlots("typeA"): uint[96]: index:1 => 00:15 booked

## Nummer 3:

Addresse:
0x07d3ccd823c3d065e82ebd16af2e1ce346238d39

Daten:
leer

## Nummer 4:

Addresse:
0x67b9102472c8b0b678904f2c1ab86b184b7612f8

Daten:
leer

# TimeSlot-Contracts:

## Nummer 1:

Addresse: 0xf993318c69392031e6365227c6a4d174a064ee0f
owner: 0xccf223c4d32013e058ad45a03447f5b4b51186c6
Date and Time: 20180901, 15 => 00:15

## Nummer 1:

Addresse: 0x9f1a95f10025a0b350a4558403ba1c4a542c788e
owner: 0xccf223c4d32013e058ad45a03447f5b4b51186c6
Date and Time: 20180901, 0 => 00:00

# Verzeichniss Funktionen und Parameter:

Funktions Name und Parametername 1zu1 übernommen:

* setPrice(uint \_timeSlotID, uint \_price, bytes32 \_productTypes)

* getProductGroups() -> returns (bytes32, bytes32, bytes32)

* getTimeSlotPrice(uint \_timeSlotID, bytes32 \_productType) -> returns uint price

* getFreeSlots(bytes32 \_productType) -> returns uint[96]: 1 für reserviert, 0 für nicht reserviert

* aquireNewTimeSlotContract(bytes32 \_productType, uint \_timeSlotID, address \_deliverant/supplier, bytes32 \_date, bsp. "20180903") -> returns timeSlotContract Address

* getSupplierTimeslots() -> returns address[]

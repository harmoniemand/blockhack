Verzeichnis Contracts:

Nummer 1:
Addresse:
0x87e45f56dd4fa459562ae5831b4a6f2673cc660f

Daten:
10 Timeslot-Abschnitte

Nummer 2:
Addresse:
0xede7e1368978b49215911bdb89203bb563fffdc3

Daten:
96 Timeslot-Abschnitte

Verzeichniss Funktionen und Parameter:

Funktions Name und Parametername 1zu1 übernommen:

* setPrice(uint \_timeSlotID, uint \_price, bytes32 \_productTypes)

* getProductGroups() -> returns (bytes32, bytes32, bytes32)

* getTimeSlotPrice(uint \_timeSlotID, bytes32 \_productType) -> returns uint price

* getFreeSlots(bytes32 \_productType) -> returns uint[96]: 1 für reserviert, 0 für nicht reserviert

* aquireNewTimeSlotContract(bytes32 \_productType, uint \_timeSlotID, address \_deliverant/supplier, bytes32 \_date, bsp. "20180903") -> returns timeSlotContract Address

* getSupplierTimeslots() -> returns address[]

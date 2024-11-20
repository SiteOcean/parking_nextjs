import React from 'react';

export default function ParkingSlotCard ({slot, displayFareFunction, setSelectedSlot }){

    return(   <div>
        {slot.parkingStatus ? <div
        key={slot.slotNo}
        onClick={() => displayFareFunction(slot)}
        className={`cursor-pointer flex justify-center items-center w-20 h-20 rounded-md text-white font-semibold p-1 ${
          slot.parkingStatus ? "bg-[#ff5a5a]" : "bg-green-400"
        }`}
      >
        <div className="flex flex-col items-center justify-evenly"><h1>{slot.slotNo}</h1>
        <p className="text-[9px] p-2 bg-[white] text-red-400 text-center rounded-md">{slot.vehicleNo}</p></div>
      </div> : <div
        key={slot.slotNo}
        onClick={() => setSelectedSlot(slot)}
        className={`cursor-pointer flex justify-center items-center w-20 h-20 rounded-md text-white font-semibold ${
          slot.parkingStatus ? "bg-red-400" : "bg-green-400"
        }`}
      >
        {slot.slotNo}
      </div>}
      </div>
    )

}
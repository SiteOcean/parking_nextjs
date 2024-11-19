import { useBooking } from "@/store/parkingSlotsData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


export default function PlaceDetails() {
  const router = useRouter();
  const { place } = router.query;
  const { getParticularPlaceData, setBookingSlot, 
    closeBookingSlot } = useBooking();

  const [placeData, setPlaceData] = useState(null);

  const [CloseBookingDetails, setCloseBookingDetails] = useState({
    vehicleNo: "",
  });
  const [bookingDetails, setBookingDetails] = useState({
    customerName: "",
    vehicleNo: "",
  });
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [closeBookingData, setCloseBooking] = useState(null);

  const [fareDetails, setFareDetails] = useState(null)

  useEffect(() => {
    if (place) {
      const data = getParticularPlaceData(place);
      setPlaceData(data);
    }
  }, [place, getParticularPlaceData]);

  if (router.isFallback || !placeData) {
    return <div>Loading...</div>;
  }

  const handleCloseBooking = (e) => {
    e.preventDefault()
    if(CloseBookingDetails.vehicleNo != closeBookingData.vehicleNo){
        return alert("worng Vehicle No!")
    }
   
    const closingTime = new Date().toLocaleTimeString(); 
    const inTime = closeBookingData.inTime.split(":");
    const outTime = closingTime.split(":");
  
    const inTimeTotalMinutes = parseInt(inTime[0]) * 60 + parseInt(inTime[1]);
    const outTimeTotalMinutes = parseInt(outTime[0]) * 60 + parseInt(outTime[1]);
    
    const durationInMinutes = outTimeTotalMinutes - inTimeTotalMinutes;
 
    const totalFare = durationInMinutes * placeData.price;

  
    const bookingData = {
      ...CloseBookingDetails,
      parkingStatus: false, 
      outTime: closingTime,
      Totalfare: totalFare, 
    };
   setFareDetails(bookingData)
    setCloseBooking(null)
    setCloseBookingDetails({
        vehicleNo: "",
      })
    closeBookingSlot(placeData.name, closeBookingData.slotNo, bookingData); 
    alert(`Booking closed. Total Fare: ₹${totalFare}`);
  };
  
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingDetails.customerName || !bookingDetails.vehicleNo || selectedSlot === null) {
      alert("Please fill all the fields.");
      return;
    }

    const bookingData = {
      slotNo: selectedSlot.slotNo,
      parkingStatus: true,
      vehicleNo: bookingDetails.vehicleNo,
      customerName: bookingDetails.customerName,
      inTime: new Date().toLocaleTimeString(), 
      outTime: 0,
      Totalfare: 0,
    };

    setPlaceData((prev) => ({
      ...prev,
      slots: prev.slots.map((slot) =>
        slot.slotNo === selectedSlot.slotNo ? { ...slot, ...bookingData } : slot
      ),
    }));

    setBookingSlot(placeData.name, selectedSlot.slotNo, bookingData); 
    setSelectedSlot(null); 
    setBookingDetails({ customerName: "", vehicleNo: "" }); 
  };



  return (
    <div className="p-8 relative z-0 flex flex-col gap-y-2 justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to {placeData.name} Parking Place</h1>
      <div className="flex justify-between gap-x-20"><p className="text-lg mb-2">Location: {placeData.location}</p>
      <p className="text-lg mb-6">Price: {placeData.price} Pre Minutes</p></div>

      <div className="grid grid-cols-3 gap-4 ">
        {placeData.slots.map((slot) => (
          <div>
            {slot.parkingStatus ? <div
            key={slot.slotNo}
            onClick={() => setCloseBooking(slot)}
            className={`cursor-pointer flex justify-center items-center w-16 h-16 rounded-md text-white font-semibold ${
              slot.parkingStatus ? "bg-red-400" : "bg-green-400"
            }`}
          >
            {slot.slotNo}
          </div> : <div
            key={slot.slotNo}
            onClick={() => setSelectedSlot(slot)}
            className={`cursor-pointer flex justify-center items-center w-16 h-16 rounded-md text-white font-semibold ${
              slot.parkingStatus ? "bg-red-400" : "bg-green-400"
            }`}
          >
            {slot.slotNo}
          </div>}
          </div>
        ))}
      </div>

      {selectedSlot  && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-10">
          <form
            onSubmit={handleBookingSubmit}
            className="bg-white p-6 rounded-md shadow-lg flex flex-col gap-4 w-96"
          >
            <h2 className="text-xl font-bold">Booking Slot {selectedSlot.slotNo}</h2>
            <input
              type="text"
              placeholder="Customer Name"
              className="border rounded-md p-2"
              value={bookingDetails.customerName}
              onChange={(e) =>
                setBookingDetails((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Vehicle No"
              className="border rounded-md p-2"
              value={bookingDetails.vehicleNo}
              onChange={(e) =>
                setBookingDetails((prev) => ({
                  ...prev,
                  vehicleNo: e.target.value,
                }))
              }
            />
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                onClick={() => setSelectedSlot(null)}
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Book Slot
              </button>
            </div>
          </form>
        </div>
      )}

{closeBookingData  && (
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-10">
          <form
            onSubmit={handleCloseBooking}
            className="bg-white p-6 rounded-md shadow-lg flex flex-col gap-4 w-96"
          >
            <h2 className="text-xl font-bold">Close Booking Slot {closeBookingData.slotNo}</h2>
           <p>{fareDetails && fareDetails}</p>
            <input
              type="text"
              placeholder="Vehicle No:"
              className="border rounded-md p-2"
              value={CloseBookingDetails.vehicleNo}
              onChange={(e) =>
                setCloseBookingDetails((prev) => ({
                  ...prev,
                  vehicleNo: e.target.value,
                }))
              }
            />
            <div className="flex gap-4">
              <button
                type="button"
                className="bg-gray-500 text-white py-2 px-4 rounded-md"
                onClick={() => setCloseBooking(null)}
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                Close Slot
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

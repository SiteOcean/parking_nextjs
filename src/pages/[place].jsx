import DisplayFareCard from "@/components/displayFareCard";
import Loader from "@/components/loader";
import Navbar from "@/components/navbarComponent";
import ParkingSlotCard from "@/components/parkingSlotCard";
import { fetchAPI } from "@/services/handleApis";
import { useBooking } from "@/store/parkingSlotsData";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { MdOutlineCurrencyRupee } from "react-icons/md";


export default function PlaceDetails() {
  const router = useRouter();
  const { place } = router.query;
 
  const [parkingSlots, setParkingSlots] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSlot, setSelectedSlot] = useState(null)

  const [displayFareStatus, setDisplayStatus] = useState(null)
  const [displayFareData, setDisplayFareData] = useState(null)

  const [formInputs, setFormInputs] = useState({
    customerName:"",
    vehicleNo:""
  })

  const fetchParkingSlotById = async (id) => {
    const response = await fetch('https://parking-nodejs-server.onrender.com/api/parking/getById', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id })  
    });
    
    const data = await response.json();
    setParkingSlots(data); 
    setLoading(false);
  };

  useEffect(() => {
    if(!place) return
    fetchParkingSlotById(place);
  }, [place]); 

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
  
    const bookingData = {
      slotId: selectedSlot._id, 
      vehicleNo: formInputs.vehicleNo,
      customerName: formInputs.customerName,
      inTime: new Date().toLocaleTimeString(),
      parkingStatus: true,  
    };
    setParkingSlots(null)
    try {
      const response = await fetch('https://parking-nodejs-server.onrender.com/api/parking/bookSlot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        fetchParkingSlotById(place);
        setSelectedSlot(null); 
        setFormInputs({
          customerName:"",
          vehicleNo:""
        })
      } else {
        console.error("Error booking slot:", result.message);
      }
    } catch (err) {
      console.error("Booking request failed:", err);
    }
  };
  
  const displayFareFunction=(slot)=>{
    const closingTime = new Date().toLocaleTimeString(); 
    const inTime = slot.inTime.split(":");
    const outTime = closingTime.split(":");
  
    const inTimeTotalMinutes = parseInt(inTime[0]) * 60 + parseInt(inTime[1]);
    const outTimeTotalMinutes = parseInt(outTime[0]) * 60 + parseInt(outTime[1]);

    const durationInMinutes = outTimeTotalMinutes - inTimeTotalMinutes;
 
    const totalFare = durationInMinutes * parkingSlots.price;
    setDisplayFareData({outTime: new Date().toLocaleTimeString(),
       TotalFare:totalFare,
      slotId:slot._id,
    minutes: durationInMinutes})
    setDisplayStatus(true)
  }

  const parkingCompleted = async () => {
    const slot = parkingSlots.slots.find((s) => s._id === displayFareData.slotId);
    const bookingData = {
      _id: parkingSlots._id,        
      slotId: slot._id,    
      outTime: displayFareData.outTime, 
      parkingStatus: false,         
      TotalFare: displayFareData.TotalFare,   
    };
    setParkingSlots(null)
    try {
     
  
      const result = await fetchAPI("closeParking", bookingData);
  
      if (result) {
        console.log( result.slot);
        fetchParkingSlotById(place);
        setSelectedSlot(null); 
        setDisplayStatus(null)
      } else {
        console.error('Error updating slot:', result.message);
      }
    } catch (err) {
      console.error('Parking update request failed:', err);
    }
  };
  
  if (!parkingSlots) {
    return <Loader/>;
  }

  

  return (
    <div>
      <Navbar/>
    <div className="p-8 relative capitalize min-h-[100vh] z-0 flex flex-col items-center text-center bg-gray-100 rounded-lg shadow-lg">
      
  <h1 className="text-2xl font-extrabold text-blue-600 mb-6">
    Welcome to <span className="text-[30px] underline">{parkingSlots.name}</span> Parking Place
  </h1>
  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-x-20 text-lg text-gray-700 pb-4">
    <p className="flex items-center gap-2">
      <span className="font-bold text-blue-900">Location:</span> {parkingSlots.location}
    </p>
    <p className="flex items-center gap-1 underline underline-offset-2">
      <span className="font-bold text-blue-900 underline  underline-offset-2">Price:</span><span className="flex items-center underline text-[#34ac34]"> {parkingSlots.price}<MdOutlineCurrencyRupee className="text-[#34ac34]"/>Per Minute</span> 
    </p>
  </div>

      <div className="grid grid-cols-3 gap-4 ">
        {parkingSlots && parkingSlots.slots && parkingSlots.slots.map((slot, i) => (
        <ParkingSlotCard key={i} slot={slot} displayFareFunction={displayFareFunction} setSelectedSlot={setSelectedSlot}/>
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
              value={formInputs.customerName}
              onChange={(e) =>
                setFormInputs((prev) => ({
                  ...prev,
                  customerName: e.target.value,
                }))
              }
            />
            <input
              type="text"
              placeholder="Vehicle No"
              className="border rounded-md p-2"
              value={formInputs.vehicleNo}
              onChange={(e) =>
                setFormInputs((prev) => ({
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

      {displayFareStatus && (
            <DisplayFareCard displayFareData={displayFareData} setDisplayStatus={setDisplayStatus} parkingCompleted={parkingCompleted}/>
      )}
    </div>
    </div>
  );
}

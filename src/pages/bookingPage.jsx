import Loader from "@/components/loader";
import Navbar from "@/components/navbarComponent";
import ParkingPlaceCard from "@/components/parkingPlaceCard";
import { useBooking } from "@/store/parkingSlotsData";
import { useEffect, useState } from "react";

export default function BookingDashboard() {
  const [parkingSlots, setParkingSlots] = useState(null);

  async function fetchFun() {
    const res = await fetch('https://parking-nodejs-server.onrender.com/api/parking/');
    const data = await res.json();
  
    if (res.ok) {
      setParkingSlots(data);
    }
  }

  useEffect(() => {
    fetchFun();
  }, []);

  if (!parkingSlots) return <div><Loader/></div>;

  return (
    <div>
      <Navbar />
      <div className="p-8 capitalize bg-gradient-to-r from-blue-100 to-purple-100 min-h-[90vh]">
        <h1 className="text-3xl font-bold mb-6 text-center">Booking Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {parkingSlots.map((place) => (
           <ParkingPlaceCard place={place}/>
          ))}
        </div>
      </div>
    </div>
  );
}

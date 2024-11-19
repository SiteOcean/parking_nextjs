import Loader from "@/components/loader";
import Navbar from "@/components/navbarComponent";
import { useBooking } from "@/store/parkingSlotsData";
import Link from "next/link";
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
            <div key={place._id} className="shadow-xl">
              <div
                className={`shadow-lg rounded-tr-full rounded-bl-md p-6 border border-gray-200 ${
                  place.status ? "bg-[#def8de]" : "bg-[#f5e4e7]"
                }`}
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {place.name}
                </h2>
                <p className="text-gray-600">
                  <span className="font-medium">Location:</span> {place.location}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Price:</span> {place.price}
                </p>
                <p
                  className={`mt-2 text-sm mb-3 font-bold ${
                    place.status ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {place.status ? "Available" : "Parking Full"}
                </p>
                <Link
                  href={`/${place._id}`}
                  className="mt-4 text-lg font-medium bg-blue-500 px-3 py-1 rounded-md text-white"
                >
                  {place.status ? "Book Now" : "Check"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

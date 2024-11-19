import { useBooking } from "@/store/parkingSlotsData";
import Link from "next/link";

export default function BookingDashboard() {
  const { bookingPlace } = useBooking();

  return (
    <div className="p-8 capitalize">
      <h1 className="text-3xl font-bold mb-6 text-center">Booking Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookingPlace.map((place) => (
          <div
            key={place.id}
            className={`shadow-lg rounded-lg p-6 border border-gray-200 ${
              place.status ? "bg-[#cdfccd]" : "bg-[#ffd7dd]"
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
              className={`mt-2 text-sm font-medium ${
                place.status ? "text-green-500" : "text-red-500"
              }`}
            >
              {place.status ? "Available" : "Parking Full"}
            </p>
            {place.status && <Link href={`/${place.name}`} className="mt-4 text-lg font-medium bg-[blue] px-3 py-1 rounded-md text-white">Book</Link>}
           
          </div>
        ))}
      </div>
    </div>
  );
}

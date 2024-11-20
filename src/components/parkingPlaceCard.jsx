import React from 'react';
import Link from "next/link";

export default function ParkingPlaceCard ({place}){

    return( <div className="shadow-xl">
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
    )

}
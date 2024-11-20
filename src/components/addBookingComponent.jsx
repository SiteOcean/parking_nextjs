import React from 'react';

export default function AddBookingComponent ({handleBookingSubmit, selectedSlot, formInputs, setFormInputs, setSelectedSlot}){

    return( <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-10">
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
    )

}
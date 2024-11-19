import { createContext, useContext, useState } from "react";



const BookingContext = createContext();

export const BookingProvider = ({ children }) => {

  const [bookingPlace, setBookingPlace] = useState([
    {
      id: 1,
      name: "parking slot 1",
      location: "Town Hall",
      price: 3,
      status: true,
      slots: Array.from({ length: 10 }, (_, index) => ({
        slotNo: index + 1,
        parkingStatus: false,
        vehicleNo: "",
        customerName: "",
        inTime: 0,
        outTime: 0,
        Totalfare: 0,
      })),
    },
    {
      id: 2,
      name: "parking slot 2",
      location: "Mall Parking",
      price: 5,
      status: true,
      slots: Array.from({ length: 10 }, (_, index) => ({
        slotNo: index + 1,
        parkingStatus: false,
        vehicleNo: "",
        customerName: "",
        inTime: 0,
        outTime: 0,
        Totalfare: 0,
      })),
    },
    {
      id: 3,
      name: "parking slot 3",
      location: "Airport Parking",
      price: 10,
      status: false,
      slots: Array.from({ length: 10 }, (_, index) => ({
        slotNo: index + 1,
        parkingStatus: false,
        vehicleNo: "",
        customerName: "",
        inTime: 0,
        outTime: 0,
        Totalfare: 0,
      })),
    },
  ]);

  const getParticularPlaceData=(place)=>{
    let placeData= bookingPlace.find((value)=> value.name === place)
    return placeData
  }

  const setBookingSlot = (placeName, slotId, updateData) => {
    setBookingPlace((prev) =>
      prev.map((place) =>
        place.name === placeName
          ? {
              ...place,
              slots: place.slots.map((slot) =>
                slot.slotNo === slotId
                  ? { ...slot, ...updateData } 
                  : slot
              ),
            }
          : place
      )
    );
  };
  const closeBookingSlot = (placeName, slotId, updateData) => {
    setBookingPlace((prev) =>
      prev.map((place) =>
        place.name === placeName
          ? {
              ...place,
              slots: place.slots.map((slot) =>
                slot.slotNo === slotId
                  ? { ...slot, ...updateData } 
                  : slot
              ),
            }
          : place
      )
    );
  };
  

  return (
    <BookingContext.Provider value={{ bookingPlace, setBookingPlace, getParticularPlaceData, setBookingSlot,
      closeBookingSlot
     }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);

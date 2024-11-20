import React from 'react';

export default function DisplayFareCard ({displayFareData, setDisplayStatus, parkingCompleted}){

    return(<div className="fixed inset-0 h-screen w-screen bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg shadow-lg p-8 w-[90%] max-w-lg text-center">
          <h2 className="text-blue-600 font-bold text-2xl mb-4">
            Total Parking Fare
          </h2>
          <p className="text-gray-800 text-xl mb-6">
            Your total parking rent is: 
            <span className="text-blue-500 font-semibold">
              {displayFareData?.TotalFare}
            </span>
          </p>
          <p className="text-gray-800 text-md mb-6">
            Your total parking Minutes is: 
            <span className="text-blue-500 font-semibold">
              {displayFareData?.minutes} minutes
            </span>
          </p>
          <div className="flex gap-4 justify-center">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md transition duration-300"
              onClick={() => setDisplayStatus(null)}
            >
              Cancel
            </button>
            <button
              onClick={parkingCompleted}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    )

}
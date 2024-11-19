import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative capitalize bg-gradient-to-r from-blue-600 via-blue-400 to-blue-300 p-8 ">
      <div className=" mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="text-center md:text-left flex-1 min-h-[80vh] flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Parking, Instantly!
          </h1>
          <p className="text-lg text-white mb-6">
            Simplify your parking experience with our car parking app. Book your spot in seconds and save time!
          </p>
          <Link href={'/bookingPage'} className="px-6 py-3 capitalize bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
            click to book
          </Link>
        </div>

        {/* Right Content (Image) */}
        <div className="mt-8 md:mt-0 md:ml-8 flex-1 grid items-center justify-center">
          <Image
            src="/vercel.svg" 
            alt="Car Parking App"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

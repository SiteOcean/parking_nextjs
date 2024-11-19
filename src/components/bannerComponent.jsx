import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <div className="relative capitalize bg-gradient-to-r from-blue-100 via-purple-100 to-blue-300 p-8 ">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left flex-1 min-h-[80vh] flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Find Parking, Instantly!
          </h1>
          <p className="text-lg mb-6 text-purple-700">
            Simplify your parking experience with our car parking app. Book your spot in seconds and save time!
          </p>
          <p className="text-md mb-6 text-purple-700">
            This Wallet Parking App is built using modern web technologies: 
            <span className="font-semibold"> Frontend with Next.js and styled using Tailwind CSS</span>, powered by a 
            <span className="font-semibold"> Node.js backend with Express.js framework</span>. 
            The frontend is deployed on <span className="font-semibold">Vercel</span>, 
            while the backend server runs on <span className="font-semibold">Render.com</span>, and 
            data is stored in a <span className="font-semibold">MongoDB database</span>.
          </p>
          <Link
            href={'/bookingPage'}
            className="px-6 text-center py-3 capitalize bg-gradient-to-r from-blue-400 to-blue-400 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-100"
          >
            Click to Book
          </Link>
        </div>

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

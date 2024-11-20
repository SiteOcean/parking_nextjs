import Navbar from "./navbarComponent";

export default function Loader() {
    return (
      <div>
        <Navbar/>
        <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16  border-t-4 order-b-4  rounded-full animate-spin border-purple-500">
          
      </div>
    </div></div>
    );
  }
  
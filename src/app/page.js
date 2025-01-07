import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center p-4 bg text-white font-bold text-[24px]">
      <div className="p-2">
        <div>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;****(Under Investigation)****</h2>
        </div>
        <div className="w-[100%] text-[20px] font-semibold my-4 p-8 text-red-700 bg-blue-400 rounded">
          <ol>
            <li>Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Alishba</li>
            <li>Qualification: &nbsp;&nbsp;&nbsp;&nbsp;BS(Math)</li>
            <li>Address City: &nbsp;&nbsp;&nbsp;&nbsp;Gujrawala</li>
            <li>Date of Birth: &nbsp;&nbsp;&nbsp;&nbsp;12 Jan</li>
            <li>Eye color: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Light brown</li>
            <li>Hair color: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Brown</li>
            <li>Height: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.2`</li>
            <li>Weight: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;50kg</li>
            <li>Fav-color: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pink & Light Blue</li>
            <p>Love: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Barfi</p>
          </ol>
            <p className="text-[21px] font-bold text-black pt-4">Note:</p>&nbsp;Very Fat in her family
        </div>
      </div>

    </div>
  );
}

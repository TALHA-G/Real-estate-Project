import Image from "next/image";

export default function Home() {
  return (
    <div className="w-[100%] h-[100vh] flex justify-center items-center p-4 bg-black text-white font-bold text-[24px]">
      <div className="p-2">
        <h2>**************(Under Investigation)***************</h2>
        <div className="text-[18px] font-semibold m-4 p-4 px-8 text-yellow-700 bg-blue-400 rounded">
          <ol>
            <li>Name : Alishba</li>
            <li>Qualification: BS(Math)</li>
            <li>Address City: Gujrawala</li>
            <li>Date of Birth: 12 January</li>
            <li>Eye color: Light brown</li>
            <li>Hair color: Brown</li>
            <li>Height: 5.2`</li>
            <li>Weight: 50kg</li>
            <li>Favourite color: Pink & Light Blue</li>
            <p>Love: Barfi</p>
            <p>Important Note: Fat in her family</p>
          </ol>
        </div>
      </div>

    </div>
  );
}

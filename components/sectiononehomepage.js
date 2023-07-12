import { FaHashtag } from "react-icons/fa";
import Image from "next/image";
import Image1 from "../public/image_01-6.jpg";
import Image2 from "../public/image_01-5.jpg";
import Image3 from "../public/image_10-1.jpg";
import Image4 from "../public/image_10-2.jpg";
import Image5 from "../public/image_03-2.jpg";
const Contents = () => {
  return (
    <div className="container mx-auto py-24  space-y-20 w-full">
      <div className=" lg:flex lg:flex-row justify-center px-12">
        <div>
          <Image src={Image1} alt="Picture of the author" />
        </div>
        <div className="mt-12">
          <Image src={Image2} alt="Picture of the author" />
        </div>
      </div>
      <div className="px-12 flex flex-col justify-center items-center text-center space-y-6">
      <label className="font-extrabold text-3xl  text-blue-600 " >Vision </label>
        <FaHashtag className="w-12 h-12 text-blue-600  p-1" />
        <p className="text-3xl font-light text-gray-600">
          To be a world class police service, with a people-friendly, responsive and professional workforce.
          <br/>
          
        </p>
        <p className="text-xl text-gray-500">.....</p>
      </div>
      <div className="lg:grid lg:grid-cols-2 px-12">
        <div className="col-span-1 space-y-6 py-12 text-center px-8">
          <p className="text-3xl font-medium text-blue-600">
            Mission
          </p>
          <p className="text-2xl font-light text-gray-500">
          To provide quality services to meet the expectations of
          our customers by upholding the rule of law, creating and
          maintaining strong community partnership for conducive,
          social and economic development of Kenya.
          </p>
          <button
            type="button"
            className="text-white  bg-blue-600 hover:bg-blue-800   rounded-3xl  px-8 py-3 text-center mr-2 mb-2 "
          >
            CONTACT US
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          <div className="col-span-1 row-span-2">
            <Image src={Image3} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image4} alt="Picture of the author" />
          </div>
          <div className="col-span-1 row-span-1">
            <Image src={Image5} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contents;

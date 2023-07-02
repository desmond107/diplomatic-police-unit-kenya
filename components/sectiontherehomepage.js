import Image from "next/image";
//import Image1 from "../public/img23.jpg";

const ContentThere = () => {
  return (
    <div className="flex flex-col space-y-12 items-center justify-center  w-full py-12">
      <div className="text-center space-y-3 ">
        <p className="text-xl font-medium text-blue-600">Service to all</p>
        <p className="text-4xl font-light text-gray-600">
          Justice, peace & democracy to all
        </p>
      </div>
      <div className="">
        {/* <Image src={Image1} alt="Picture of the author" /> */}
      </div>
    </div>
  );
};
export default ContentThere;

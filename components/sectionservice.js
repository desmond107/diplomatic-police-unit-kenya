import { FaEnvira, FaCodepen, FaBusAlt, FaDrawPolygon } from "react-icons/fa";
const Service = () => {
  return (
    <div className="container mx-auto lg:grid lg:grid-cols-8 gap-6 py-24 px-12 items-center place-content-center justify-center">
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaEnvira className="w-16 h-16 text-blue-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Law and order</p>
        <p className="text-gray-600">
          To promote, promote, protect and respect the human rights of our customers.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaCodepen className="w-16 h-16 text-blue-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Integrity</p>
        <p className="text-gray-600">
          To cultivate and maintain partnerships for a conducive social, economic and political development of Kenya.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaBusAlt className="w-16 h-16 text-blue-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Protection</p>
        <p className="text-gray-600">
          To exercise integrity and courtesy at all time.
        </p>
      </div>
      <div className="col-span-2 flex flex-col space-y-4 items-center justify-center text-center">
        <FaDrawPolygon className="w-16 h-16 text-blue-600 bg-gray-100 rounded-full p-1" />
        <p className="text-2xl font-medium text-gray-600">Justice</p>
        <p className="text-gray-600">
          To be fair and firm in all our undertakings.
        </p>
      </div>
    </div>
  );
};
export default Service;

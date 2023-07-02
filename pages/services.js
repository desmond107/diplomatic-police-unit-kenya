import { FaFeatherAlt } from "react-icons/fa";
const Services = () => {
  return (
    <div>
      {/* Content */}
      <div>
        <div
          className="bg-no-repeat bg-cover bg-center  h-72"
          style={{
            backgroundImage: `url(/heading_02.jpg)`,
          }}
        >
          <div className="bg-black   bg-opacity-50 w-full h-full  flex items-center justify-center">
            <p className="text-white text-5xl font-light  p-8">Our Services</p>
          </div>
        </div>
        <div className="container mx-auto lg:grid lg:grid-cols-2 gap-16 py-24 px-16">
          <div className="col-span-1 space-y-8 text-blue-600">
            <p className="text-xl font-medium">
              Services of the Kenya Police Service
            </p>
            <p className="text-gray-500">
              As outlined in Part III, section 24 of the National Police Service Act, the functions of the Kenya Police are:<br/> 
•    Provide assistance to the public when in need<br/> 
•    Maintenance of law and order<br/> 
•    Preservation of peace<br/> 
•    Protection of life and property<br/> 
•    Investigation of crimes<br/> 
•    Collection of criminal intelligence<br/> 
•    Prevention and deduction of crime<br/> 
•    Apprehension of offenders<br/> 
•    Enforcement of laws and regulations with which it is charged<br/> 
•    Performance of any other duties as may be assigned by the Inspector General in accordance with the law<br/> 
            </p>
          </div>
          <div className="col-span-1 flex flex-row space-x-3 ">
            <FaFeatherAlt className="w-24 h-24 text-blue-600" />
            <div className="">
              <p className="text-3xl  font-light text-gray-500">
                The Office of the directorate of Police Reforms is headed by the director who reports directly to the Inspector General of the National Police Service.
 
Major Duties and Responsibilities:

• Day to day administration of the functions of the Reform Directorate
• Implementing the decisions of the IG.
• Facilitating preparation and implementation of the Service strategic and annual work plans.

              </p>
              <p className="text-xl  font-light text-right text-gray-500">
                Major Duties and Responsibilities.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex items-center justify-center text-center">
          <div className="container mx-auto py-24 px-16 space-y-2">
            <p className="text-4xl font-light text-gray-600">
              Service to all
            </p>
            <div className="py-16 lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:space-y-0 space-y-2 w-full">
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_01-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CRIME WATCH
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_02-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CRIME REPORT
                  </p>
                </div>
              </div>
              <div
                className="col-span-2 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_02-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    CRIME STOPPER
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_04-4.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    DIPLOMATIC COMPLAINT
                  </p>
                </div>
              </div>
              <div
                className="col-span-1 row-span-1 bg-no-repeat bg-cover bg-center  h-64"
                style={{
                  backgroundImage: `url(/image_05-2.jpg)`,
                }}
              >
                <div className="bg-black  hover:bg-opacity-5 bg-opacity-30 w-full h-full  flex items-end justify-start">
                  <p className="text-white text-2xl font-medium p-8">
                    FIRE & RESCUE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Content */}
    </div>
  );
};
export default Services;

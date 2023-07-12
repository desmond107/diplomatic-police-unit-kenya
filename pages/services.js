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
              Activities of the Diplomatic Police Unit.
            </p>
            <p className="text-gray-500 text-2xl">
              The Diplomatic police unit operates within the framework
              of the international law and diplomacy to ensure the
              safety and security of diplomatic missions, personnel and
              their facilities.<br/><br/>

our key aspects:<br/> 
1.Legal Authority.<br/>
2. protection of Diplomatic missions.<br/>
3. security for diplomatic personnel.<br/>
4. crowd and traffic control.<br/>
5. Investigation and intelligence gathering.<br/>
6. liaison with host country authorities.<br/>
7. Training and Professionalism.<br/>
8. International cooperation.<br/>
9. Respect human rights.while.<br/>
10. crisis response.<br/>
 
            </p>
          </div>
          <div className="col-span-1 flex flex-row space-x-3 ">
            <FaFeatherAlt className="w-24 h-24 text-blue-600" />
            <div className="">
            <p className="text-xl font-medium text-blue-600">RELATIONS WITH THE DIPLOMATIC CORPS IN KENYA</p>
                                                              
              <p className="text-2xl  font-light text-gray-500">
                The position regarding the Diplomatic corps vis-a-vis Police is as
follows:-
<br/><br/>
(i) The privileges and immunities to which accredited diplomats of
Foreign and Commonwealth missions are entitled are laid down in
the Vienna Convention on Diplomatic Relations to which Kenya is
a signatory.<br/><br/>

(ii) Ambassadors and consular officers or employees and certain
representatives of the United Nations Agencies shall not be liable
to legal proceedings in respect of acts performed in their official
capacity, which acts fall within the functions of such officers.<br/><br/>
 
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

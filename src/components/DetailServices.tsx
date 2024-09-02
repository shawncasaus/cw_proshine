import DetailTile from "./DetailTile";
import DetailInfo from "../data/detail-info";

function DetailServices() {
  return (
    <>
      <div className="flex justify-center bg-grey left-0 w-full">
        <div className="lg:w-[80%] md:w-full">
          <div className="p-5 flex w-full justify-center flex-col">
            <h1 className="text-5xl text-[#ffffff] text-center">
              Our Services
            </h1>
            <div className="flex flex-wrap justify-between detail-services-container">
              {DetailInfo.map((item) => (
                <DetailTile
                  heading={item.heading}
                  image={item.image}
                  items={item.items}
                />
              ))}
            </div>
            <h1 className="text-4xl text-[#ffffff] text-center p-3">
              How We Price Our Services
            </h1>
            <h3 className="text-xl md:text-2xl text-[#ffffff] text-left p-1 mb-5">
              Each car and owner is unique, so prices vary. We'll finalize your
              price after seeing your vehicle, but we can give you a range over
              the phone or text!
            </h3>
            <h1 className="text-4xl text-[#ffffff] text-center p-3">
              Specialty Services
            </h1>
            <ul className="text-white text-lg">
              <li key={0} className="flex items-center">
                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                <span>Business Fleet Detailing and Maintenance Cleaning</span>
              </li>
              <li key={1} className="flex items-center">
                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                <span>Paint Correction</span>
              </li>
              <li key={2} className="flex items-center">
                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                <span>Ceramic Coatings</span>
              </li>
              <li key={3} className="flex items-center">
                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                <span>Headlight Restoration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailServices;

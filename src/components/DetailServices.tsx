import DetailTile from './DetailTile'
import DetailInfo from '../data/detail-info'

function DetailServices() {
    return (
        <>
            <div className="flex justify-center bg-grey w-screen left-0 absolute">
                <div className="lg:w-[80%] md:w-full">
                    <div className="p-5 flex w-full justify-center flex-col">
                        <h1 className="text-4xl text-[#ffffff] text-center p-5">Detail Services</h1>
                        <div className="flex flex-row w-full">
                        {DetailInfo.map((item) => (
                            <DetailTile heading={item.heading} imagePath={item.imagepath} items={item.items} />
                        ))}
                        </div>
                        <h1 className="text-3xl text-[#ffffff] text-center p-1">Detail Services</h1>
                        <h3 className="text-2xl text-[#ffffff] text-center p-1 mb-5">We have different prices based on how big and dirty your car is. It can take our experts 2 to 5 hours to clean it up and make it super nice. Just call us to find out how much it'll cost for your car to look amazing!</h3>
                        <h1 className="text-3xl text-[#ffffff] text-center p-1">Specialty Services (Call for Pricing)</h1>
                        <ul className="text-white">
                            <li key={0} className="flex items-center text-sm">
                                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                                <span>Business Fleet Detailing and Maintenance Cleaning</span>
                            </li>
                            <li key={1} className="flex items-center text-sm">
                                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                                <span>Paint Correction</span>
                            </li>
                            <li key={2} className="flex items-center text-sm">
                                <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                                <span>Ceramic Coatings</span>
                            </li>
                            <li key={3} className="flex items-center text-sm">
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

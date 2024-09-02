import ReviewTile from "./ReviewTile";
import ReviewInfo from "../data/review-info";

function Reviews() {
  return (
        <>
          <div className="flex justify-center left-0 w-full">
            <div className="lg:w-[80%] md:w-full">
              <div className="p-5 flex w-full justify-center flex-col">
                <h1 className="text-5xl text-[#ffffff] text-center">
                  Our Reviews 
                </h1>
                <div className="flex flex-wrap justify-between detail-services-container">
                  {ReviewInfo.map((item) => (
                    <ReviewTile
                      stars={item.stars}
                      name={item.name}
                      reviewText={item.reviewText}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
  );
}

export default Reviews;

interface DetailServiceProps {
    stars: number;
    reviewText: string;
    name: string;
  }

  const makeStars = (num: number) => {
    let stars = [];
    for (let i = 0; i < num; i++) {
      stars.push(<i className="fa fa-fw fa-star text-[#F9BB07] mt-1"></i>);
    }
    return stars;
  }
  
  function ReviewTile({ stars, reviewText, name }: DetailServiceProps) {
    return (
      <>
        <div className="max-w-full md:max-w-[33%] p-2 flex flex-col items-center">
          <ul className="text-white">
            <li key={stars} className="flex justify-center text-md p-1">
              {makeStars(stars)} 
            </li>
          </ul>
          <h1 className="text-white text-center font-bold p-4 text-sm">"{reviewText}"</h1>
          <h1 className="text-white text-center font-bold p-2 text-md">- {name}</h1> 
        </div>
      </>
    );
  }
  
  export default ReviewTile;
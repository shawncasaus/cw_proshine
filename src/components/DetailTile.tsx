interface DetailServiceProps {
  heading: string;
  image: string;
  items: string[];
}

function DetailTab({ heading, image, items }: DetailServiceProps) {
  return (
    <>
      <div className="max-w-full md:max-w-[25%] p-4 flex flex-col items-start">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-white text-center font-bold p-4 md:p-8 text-lg md:text-xl">
            {heading}
          </h1>
          <div className="relative w-full pb-9/16">
            <img
              src={image}
              alt="Description of the image"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <ul className="text-white mt-4">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-sm md:text-md p-1">
              <i className="fa fa-fw fa-check text-blue-600 mt-1 mr-2"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DetailTab;

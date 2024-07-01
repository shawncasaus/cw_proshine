interface DetailServiceProps {
  heading: string;
  image: string;
  items: string[];
}

function DetailTab({ heading, image, items }: DetailServiceProps) {
  return (
    <>
      <div className="max-w-full md:max-w-[25%] p-4 flex flex-col items-center">
        <h1 className="text-white text-center font-bold p-8 text-xl">{heading}</h1>
        <img
          src={image}
          alt="Description of the image"
          className="w-64 h-64"
        />
        <ul className="text-white">
          {items.map((item, index) => (
            <li key={index} className="flex items-start text-md p-1">
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

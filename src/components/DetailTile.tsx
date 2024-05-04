interface DetailServiceProps {
  heading: string;
  imagePath: string;
  items: string[];
}

function DetailTab({ heading, imagePath, items }: DetailServiceProps) {
    return (
        <>
            <div>
                <h1 className="text-white font-bold">{heading}</h1>
                <img src={imagePath} alt="Description of the image" className="w-64 h-64" />
                <ul className="text-white">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center text-sm">
                        <i className="fa fa-fw fa-check text-blue-600 mr-2"></i>
                        <span>{item}</span>
                    </li>
                ))}
                </ul>
            </div>
        </>
    );
}

export default DetailTab;

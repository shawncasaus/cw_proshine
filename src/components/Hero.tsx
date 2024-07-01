import backgroundImage from "../assets/camaro1.jpg";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-cover bg-center min-h-screen text-center text-white text-stroke-3-black"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-center items-center p-4">
        <img src={logo} alt="logo" className="w-50 h-50 object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center p-4">
        <div className="mb-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            We are not a{" "}
            <span className="text-[#427BCA]">Car Wash.</span>
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold">
            We are{" "}
            <span className="text-[#427BCA]">Detailers!</span>
          </h2>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold">
            Call us for a free quote!
          </h1>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            (925) 785-3385
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;

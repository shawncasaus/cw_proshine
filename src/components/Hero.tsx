import backgroundImage from "../assets/camaro1.jpg";
import logo from "../assets/logo.png";

function Hero() {
  return (
    <>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-cover bg-center h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center p-4">
          <img src={logo} alt="logo" className="w-[50%] h-[50%] object-cover" />
        </div>
        <div className="flex justify-center items-center flex-col p-4">
          <div
            className="text-center text-white p-5"
            style={{ fontSize: "36px", borderColor: "#f5f5f5" }}
          >
            <b>
              Shield Your Jewel: Ceramic Coating for Ultimate Paint Protection
            </b>
            <br />
          </div>
          <div
            className="mt-30 mt-5"
            style={{
              outline: "currentColor",
              cursor: "pointer",
              fontFamily: "Poppins, Helvetica, sans-serif !important",
            }}
            aria-disabled="false"
          >
            <h1
              className="text-center text-white text-2xl"
              style={{ fontSize: "32px" }}
            >
              <b>
                <a
                  href="#"
                  className=""
                  target="_parent"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                >
                  Call us for a free quote!
                </a>
              </b>
            </h1>
          </div>
          <div
            className="mt-30 mt-5"
            style={{
              outline: "currentColor",
              cursor: "pointer",
              fontFamily: "Poppins, Helvetica, sans-serif !important",
            }}
            aria-disabled="false"
          >
            <h1
              className="text-center text-white text-2xl"
              style={{ fontSize: "32px" }}
            >
              <b>
                <a
                  href="#"
                  className=""
                  target="_parent"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                >
                  (925) 785-3385
                </a>
              </b>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

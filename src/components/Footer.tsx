import React from "react";

interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className="relative flex flex-col p-5 text-center">
      <div className="container mx-auto">
        <p className="text-sm text-[#ffffff]">
          &copy; {year} {companyName}
        </p>
        <p className="text-xs text-[#ffffff] mt-2">
          Designed By:{" "}
          <a href="https://github.com/shawncasaus">Shawn Renee Casaus</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Ajhua from "../../Assests/logoBanner/ajhua.webp.png";
import Arsh from "../../Assests/logoBanner/aksh-optifibre-limited-min.webp.png";
import Alankit from "../../Assests/logoBanner/alankit.webp.png";
import Alba from "../../Assests/logoBanner/alba-smart.webp.png";
import Altilium from "../../Assests/logoBanner/Altilium.webp.png";
import Alpari from "../../Assests/logoBanner/alpari.webp.png";

function LogoBanner() {
  return (
    <div className="bg-gradient-to-r from-[#F8971D] to-[#CB2027] h-auto mt-9 flex flex-wrap items-center justify-center lg:justify-between p-4">
      <img src={Ajhua} alt="Alhua Logo" className="h-16 w-auto m-4 lg:h-20" />
      <img
        src={Arsh}
        alt="ARSH OPTIFIBRE LIMITED Logo"
        className="h-16 w-auto m-4 lg:h-20"
      />
      <img
        src={Alankit}
        alt="Alankit Logo"
        className="h-16 w-auto m-4 lg:h-20"
      />
      <img
        src={Alba}
        alt="ALBA SMART Logo"
        className="h-16 w-auto m-4 lg:h-20"
      />
      <img
        src={Altilium}
        alt="Altilium DS Logo"
        className="h-16 w-auto m-4 lg:h-20"
      />
      <img src={Alpari} alt="Alpari Logo" className="h-16 w-auto m-4 lg:h-20" />
    </div>
  );
}

export default LogoBanner;

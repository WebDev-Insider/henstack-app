import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Twitter from "../assets/logos/whatsapp-svgrepo-com.svg";
import Facebook from "../assets/logos/phone-call-alt-1-svgrepo-com.svg";
import Linkedin from "../assets/logos/gmail-svgrepo-com.svg";

function Footer() {
  return (
    <section className="bg-gray-800">
      <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
          <div className="flex gap-10"></div>
          <div className="w-fit">
            <h2>Get the app</h2>
            <StoreLinks type={BtnTypes.Variant} />
          </div>
        </div>
        <div className="mt-14 flex justify-between border-t-2 border-t-gray-700 pt-10">
          <p className="w-[16ch] text-gray-400 md:w-full">
            &copy; 2025 Henstack. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://wa.link/nm1eej" target="_blank">
              <img
                src={Twitter}
                alt="Twitter logo"
                width="30px"
                height="30px"
              />
            </a>
            <a href="tel:+2349023456021" target="_blank">
              <img
                src={Facebook}
                alt="Facebook logo"
                width="30px"
                height="30px"
              />
            </a>
            <a href="mailto:henrydustin95@gmail.com" target="_blank">
              <img
                src={Linkedin}
                alt="Linkedin logo"
                width="30px"
                height="30px"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import { assets, footer_data } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-primary/3 w-full">
        <div className="max-w-7xl mx-auto px-[2%] xl:px-0 ">
          <div className="flex md:flex-row flex-col justify-between gap-5 py-10 items-start text-gray-500 border-b border-gray-500/30">
            <div>
              <img src={assets.logo} alt="logo" className="w-32" />
              <p className="max-w-[400px] mt-6">
                This is your place to think out loud, to share what matters, tp
                write without filter.Whether It's one work one ora thousand,
                your story starts right here. Search for blogs Search
              </p>
            </div>
            <div className="flex sm:flex-row flex-col justify-between w-full md:w-[45%] gap-5">
              {footer_data.map((section, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-base text-gray-900 mb-2 md:mb-5">
                    {section.title}
                  </h3>
                  <ul className="space-y-1 text-sm">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <Link to={"/"}>{link}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
            Copyright-2025 @ QuickBlog - All Right Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

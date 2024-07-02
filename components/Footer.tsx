import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { SignupFormDemo } from "./Form";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <h1 className="heading"> <span className="text-purple">Contact</span></h1>
      {/* background grid */}
      <div className="flex flex-col items-center">

        <p className="text-white-200 md:mt-5 my-5 text-center">
          Reach out to us today and let&apos;s discuss how we can help you
          achieve your goals.
        </p>

        {
          /******************from there  */
        }
        <SignupFormDemo />
        {

          /*************************** * till here  */

        }

      </div>
      <div className="flex mt-16 md:flex-row">
        <p className="font-light text-xs mx-auto">
          © 2024 Created By 3WE IT Solutions All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
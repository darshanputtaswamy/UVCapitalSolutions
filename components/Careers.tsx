import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { GlareCard } from "./ui/GlareCard";

const Careers = () => {
  return (
    <section className="w-full py-20" id="careers">
      <div className="">
        <h1 className="heading">
          <span className="text-purple">Cereers</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 py-5 justify-items-center">
          <GlareCard className="flex flex-col p-8">
            <p className="font-bold text-white text-lg">Work Environment</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              We provide a dynamic work environment, where robust debate is balanced by shared values and a willingness to learn and adapt to a changing environment.
            </p>
          </GlareCard>

          <GlareCard className="flex flex-col p-8">
            <p className="font-bold text-white text-lg">Investing in our team</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              We believe that education is a continuous process and we invest heavily into developing the skills and knowledge of our people.
            </p>
          </GlareCard>
          <GlareCard className="flex flex-col p-8">
            <p className="font-bold text-white text-lg">Join Us</p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              We Seek the best global talent, across disciplines and geographies, and provides them with the resources they need to thrive and build successful careers.
            </p>
          </GlareCard>
        </div>
      </div>
    </section>
  );
};

export default Careers;
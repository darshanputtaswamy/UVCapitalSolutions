"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "@/components/ui/BentoGrid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";


const items = [
  {
    title: "Why Yuvi Capital Solutions",
    description: "",
    list: [
      "Extensive network of financial sponsors",
      "Proven history of successful transactions",
      "Efficiency in process management",
      "Deep domain expertise",
      "Practical experience in advising and managing complex transactions",
      "Collaborating with clients for long-term value creation",
      "Rapid completion of complex and strategic deals",
      "Offering seamless solutions for VC, PE funding, and M&A advisory",
      "Established relationships with VC funds, PE funds, family offices, and large corporations",
      "Client-focused approach creating tailored solutions for entrepreneurs, investors, and boards",
      "Highly experienced team with over 25 years of expertise",
      "Fast turnaround times",
      "Industry-agnostic strategy"
    ],
    header: "",
    className: "md:col-span-3",
    icon: "",
  },
  {
    title: "Portfolio Covered",
    description: "",
    header: "",
    list: ["MSME Lending Platform",
      "Retail Lending Platform",
      "Agriculture and Allied Activities Lending Platform",
      "Co- Lending Solution"],

    className: "md:col-span-3",
    icon: "",
  },
  {
    title: "Fundraising For StartUps & Corporates",
    description: "",
    header: "",
    list: [

      "End to end Private Equity (PE) & Venture Capital (VC) fundraising solutions",
      "Merger and Acquisition (M&A) Advisory",
      "Preparation of detailed Investment Memorandum or Pitch Deck",
      "Building Financial Model and Valuation",
      "Assist in negotiations and securing a term sheet",
      "Successful closure of the transaction"
    ],
    className: "md:col-span-3",
    icon: "",
  },
  {
    title: "Our Solution For AIFS & Family Offices",
    description: "",
    list: [
      "Fund placement into relevant opportunities",
      "Raising follow-on rounds for portfolio companies",
      "Raising debt for portfolio companies",
      "Raising capital from institutional investors for new funds",
      "Fund Portfolio valuation"
    ],
    header: "",
    className: "md:col-span-3",
  },
];



const Whyus = () => {
  return (
    <section id="whyus" className="py-10">
      <h1 className="heading"> <span className="text-purple">Why us</span></h1>


      <div className="pt-10" >

        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
              list={item.list}
              index={i}
            />
          ))}
        </BentoGrid>
      </div>

    </section>
  );
};

export default Whyus;
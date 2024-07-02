import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Services = () => {
    const features = [
        {
            name: 'Debt Solutions',
            functionalities: [
                'Promoter Funding',
                'Acquisition Funding',
                'Lease Rental Discounting',
                'Bill Discounting',
                'Leveraged Buyouts',
                'Project Finance',
                'Term Loans',
                'Working Capital',
                'External Commercial Borrowings'
            ]
        },
        {
            name: 'Equity & Capital Market Solutions',
            functionalities: [
                'Preferential Allotment & Qualified Industrial Placement',
                'ESOP Advisory',
                'SME & Direct Listing',
                'Pre – IPO Advisory',
                'Takeovers, Buyback Offers & De- Listing',
                'Venture Debt',
                'Corporate Bond',
                'Venture Capital',
                'Private Equity',
                'Initial Public Offer (IPO) Follow Public Offer (FPO) & Rights Issue'
            ]
        },
        {
            name: 'Advisory Solutions',
            functionalities: [
                'Financial Modelling',
                'Preparations of Bid Documents',
                'Bid Process Management',
                'Contractual Agreement',
                'Legal Advice',
                'Feasibility Study, Projects Structuring & Report',
                'Concession Agreement',
                'Detailed Project Report',
                'Asset Monetisation'
            ]
        },
        {
            name: 'Investment Solutions Offered',
            functionalities: [
                'Venture Capital & Private Equity Funding',
                'Capital Structuring',
                'Equity Planning'
            ]
        },
        {
            name: 'Strategic Solutions Offered',
            functionalities: [
                'Mergers & Acquisitions',
                'Divestiture & De-Mergers',
                'Buyouts',
                'Collaborations & Joint Ventures'
            ]
        }
    ];;
    return (

        <section id="services" className="w-full pt-20 pb-10">
            <h1 className="heading">
                <span className="text-purple">Services</span>
                <p className="text-xl pt-4">Comprehensive Financial Solutions for Your Prosperity</p>
                <p className="text-base pt-4">
                    We provide tailored financial solutions to guide you confidently through your journey. Our comprehensive services, from debt resolution to legal advice, are designed to meet your unique needs. We are committed to delivering exceptional service with integrity and transparency, ensuring you achieve your financial goals.

                </p>
            </h1>

            <div className="container mx-auto p-4">
                <FeatureCards features={features} />
            </div>
        </section>

    );
};

export default Services;


const FeatureCards = ({ features }: any) => {

    if (!Array.isArray(features)) {

        return null;
    }

    return (
        <div className="flex flex-wrap justify-center">
            {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
            ))}
        </div>
    );
};

const FeatureCard = ({ feature }: { feature: any }) => {


    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-2">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{feature.name}</h5>
            <ul role="list" className="space-y-5 my-7">
                {feature.functionalities.map((func: any, index: any) => (
                    <li key={index} className="flex items-center">
                        <svg
                            className="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{func}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};



/*
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{Feature name}</h5>

<ul role="list" class="space-y-5 my-7">
<li class="flex items-center">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{functionality}</span>
</li>
<li class="flex">
    <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
    </svg>
    <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{functionality}</span>
</li>
</ul>
</div>

*/
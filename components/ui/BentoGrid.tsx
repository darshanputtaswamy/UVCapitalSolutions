
"use client";
import { cn } from "@/lib/utils";
import { Button } from "./MovingBorders";
import { HiArrowCircleRight } from "react-icons/hi";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    list,
    index,
}: {
    index: number,
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    list?: any
}) => {


    return (

        <div
            key={index}
            style={{
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                background: "rgb(4,7,29)",
                backgroundColor:
                    "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                // add this border radius to make it more rounded so that the moving border is more realistic
                borderRadius: `calc(1.75rem* 0.96)`,
                backgroundImage: "url('/grid.svg')"
            }}
            // remove bg-white dark:bg-slate-900
            className="rounded-sm text-blac my-10 border border-b-0 border-slate-800 "
        >

            <div className="flex flex-col p-3">
                <h1 className="text-start text-xl md:text-2xl font-bold lg:max-w-[50vw] lg:min-w-[50vw] ">
                    {title}
                </h1>
                <div>
                    <ul className="space-y-2 text-start text-white-100 mt-3 font-semibold">
                        {list.map((e: any, index: any) =>
                            <li key={index} className="transition-all duration-500 ease-in-out hover:bg-sky-950 hover:pt-[2px] hover:pb-[2px] hover:pl-3"> <span className="flex flex-row"> <span className="px-2 py-1"><HiArrowCircleRight /></span><span>{e}</span></span></li>)
                        }
                    </ul>
                </div>
            </div>
        </div>

    );
};

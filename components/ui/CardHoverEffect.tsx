import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./MovingBorders";

export const HoverEffect = ({
    items,
    className,
}: {
    items: any;
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className="w-full mt-12 grid grid-cols-1 gap-10"

        >
            {items.map((card: any, idx: any) => (
                <Link
                    href={""}
                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-slate-800/[0.3] block rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>

                    <div
                        key={1}
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
                        className="rounded-xl text-blac border-neutral-200 my-16"
                    >

                        <div className="flex flex-col p-3">
                            <h1 className="text-start text-xl md:text-2xl font-bold lg:max-w-[50vw] lg:min-w-[50vw] ">
                                {card.title}
                            </h1>
                            <div>
                                <ul className="space-y-2 text-start text-white-100 mt-3 font-semibold list-disc">
                                    {card.list.map((e: any) =>
                                        <li className="transition-all duration-500 ease-in-out hover:bg-sky-950 hover:pt-[2px] hover:pb-[2px] hover:pl-3"> <span className="flex flex-row"> {e}</span></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
};

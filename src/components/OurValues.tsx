"use client";

import { motion } from "motion/react";
import Image from "next/image";
import ListAnchor from "./list-anchor";

export default function OurValues() {
  return (
    <section className="bg-stone-50 p-5 pb-32 text-stone-900">
      <div className="container mx-auto flex">
        <div className="flex w-full flex-col gap-12 rounded-xl bg-stone-900 px-5 py-10 md:gap-20 md:px-10 md:py-16 lg:p-16">
          <motion.div
            className="flex w-full flex-col justify-between gap-5 md:flex-row"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="order-2 flex flex-col gap-5 md:order-first md:max-w-[650px] md:gap-10 lg:max-w-[750px]">
              <div className="flex items-center gap-2 font-semibold text-[#fdf36d]">
                <ListAnchor /> Our Values
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white lg:text-5xl">
                  <span className="text-neutral-500">
                    We are committed to delivering
                  </span>{" "}
                  reliable, efficient, and innovative logistics solutions
                  <span className="text-neutral-500">
                    {" "}
                    while maintaining the highest standards of service.
                  </span>
                </h2>
              </div>
            </div>
            <div className="order-1 w-full md:order-last md:max-w-52 lg:max-w-64">
              <Image src={"/ourvalues.svg"} alt="" width={260} height={164} />
            </div>
          </motion.div>
          <motion.div
            className="flex w-full flex-wrap justify-start gap-10 lg:flex-nowrap lg:gap-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Item */}
            <div className="flex flex-col gap-10 lg:w-full">
              <div className="border-b border-solid border-neutral-700 pb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf36d]">
                  <Image src={"/our-1.svg"} alt="" width={24} height={24} />
                </div>
              </div>
              <div className="flex max-w-80 flex-col gap-3.5">
                {" "}
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Reliability
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    We ensure on-time deliveries and seamless logistics
                    operations, giving our clients peace of mind.
                  </p>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-col gap-10 lg:w-full">
              <div className="border-b border-solid border-neutral-700 pb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf36d]">
                  <Image src={"/our-2.svg"} alt="" width={24} height={24} />
                </div>
              </div>
              <div className="flex max-w-80 flex-col gap-3.5">
                {" "}
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Efficiency
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    We optimize routes, reduce costs, and enhance supply chain
                    performance to maximize productivity.
                  </p>
                </div>
              </div>
            </div>
            {/* Item */}
            <div className="flex flex-col gap-10 lg:w-full">
              <div className="border-b border-solid border-neutral-700 pb-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fdf36d]">
                  <Image src={"/our-3.svg"} alt="" width={24} height={24} />
                </div>
              </div>
              <div className="flex max-w-80 flex-col gap-3.5">
                {" "}
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Innovation
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    We embrace the latest logistics technologies to improve
                    tracking, security, and overall service quality.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

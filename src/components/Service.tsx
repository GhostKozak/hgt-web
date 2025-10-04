"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PrimaryButton } from "./Buttons";

export default function Service() {
  return (
    <section className="bg-stone-50 p-5 pb-32 text-stone-900">
      <div className="container mx-auto flex flex-col gap-12">
        <div>
          <motion.div
            className="flex flex-col justify-between gap-5 border-solid border-neutral-200 pb-6 lg:flex-row lg:items-end lg:border-b"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-5xl font-medium lg:text-8xl">Services.</h2>
            </div>
            <div className="max-w-[550px] lg:max-w-96">
              <p className="leading-5 text-neutral-500">
                Our solutions are tailored to meet the unique challenges of
                modern supply chains, providing speed, reliability, and
                flexibility at every stage of the journey.
              </p>
            </div>
          </motion.div>
          <div>
            <motion.div
              className="flex flex-col gap-6 pb-5 md:flex-row lg:flex-col lg:gap-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
              viewport={{ once: true }}
            >
              {/* Item */}
              <motion.div
                className="group relative flex w-full flex-col justify-between gap-6 border-b border-solid border-neutral-200 py-5 transition-all duration-300 ease-in hover:border-stone-900 lg:flex-row lg:items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1">
                  <h4 className="text-3xl font-medium transition-all duration-300 ease-in group-hover:text-neutral-500">
                    Freight Transportation
                  </h4>
                </div>
                <div className="relative order-1 contents lg:order-2">
                  <div className="h-36 w-full overflow-hidden rounded-xl transition-all duration-300 ease-in lg:absolute lg:left-1/2 lg:w-80 lg:-translate-x-1/2 lg:scale-0 lg:rotate-3 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <Image
                      src={"/service-1.jpg"}
                      alt=""
                      width={300}
                      height={150}
                      className="h-full w-full object-cover object-[43%_30.7%]"
                    />
                  </div>
                </div>
                <div className="order-3">
                  <PrimaryButton text="Learn more" bgColor="bg-white" />
                </div>
              </motion.div>
              {/* Item */}
              <motion.div
                className="group relative flex w-full flex-col justify-between gap-6 border-b border-solid border-neutral-200 py-5 transition-all duration-300 ease-in hover:border-stone-900 lg:flex-row lg:items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1">
                  <h4 className="text-3xl font-medium transition-all duration-300 ease-in group-hover:text-neutral-500">
                    Last-Mile Delivery
                  </h4>
                </div>
                <div className="relative order-1 contents lg:order-2">
                  <div className="h-36 w-full overflow-hidden rounded-xl transition-all duration-300 ease-in lg:absolute lg:left-1/2 lg:w-80 lg:-translate-x-1/2 lg:scale-0 lg:rotate-3 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <Image
                      src={"/service-2.jpg"}
                      alt=""
                      width={300}
                      height={150}
                      className="h-full w-full object-cover object-[43%_30.7%]"
                    />
                  </div>
                </div>
                <div className="order-3">
                  <PrimaryButton text="Learn more" bgColor="bg-white" />
                </div>
              </motion.div>
              {/* Item */}
              <motion.div
                className="group relative hidden w-full flex-col justify-between gap-6 border-b border-solid border-neutral-200 py-5 transition-all duration-300 ease-in hover:border-stone-900 lg:flex lg:flex-row lg:items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn", delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="order-2 lg:order-1">
                  <h4 className="text-3xl font-medium transition-all duration-300 ease-in group-hover:text-neutral-500">
                    Supply Chain Optimization
                  </h4>
                </div>
                <div className="relative order-1 contents lg:order-2">
                  <div className="h-36 w-full overflow-hidden rounded-xl transition-all duration-300 ease-in lg:absolute lg:left-1/2 lg:w-80 lg:-translate-x-1/2 lg:scale-0 lg:rotate-3 lg:opacity-0 lg:group-hover:scale-100 lg:group-hover:opacity-100">
                    <Image
                      src={"/service-3.jpg"}
                      alt=""
                      width={300}
                      height={150}
                      className="h-full w-full object-cover object-[43%_30.7%]"
                    />
                  </div>
                </div>
                <div className="order-3">
                  <PrimaryButton text="Learn more" bgColor="bg-white" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="flex w-full max-w-[700px] grow flex-wrap justify-between gap-6 lg:max-w-full"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex min-w-56 flex-col gap-1">
            <h2 className="text-5xl font-medium lg:text-8xl">10+</h2>
            <p className="text-neutral-500">Years of Logistics Excellence</p>
          </div>
          <div className="flex min-w-56 flex-col gap-1">
            <h2 className="text-5xl font-medium lg:text-8xl">1M+</h2>
            <p className="text-neutral-500">Shipments Delivered Safely</p>
          </div>
          <div className="flex min-w-56 flex-col gap-1">
            <h2 className="text-5xl font-medium lg:text-8xl">100+</h2>
            <p className="text-neutral-500">Cities Served Across Regions</p>
          </div>
          <div className="flex min-w-56 flex-col gap-1">
            <h2 className="text-5xl font-medium lg:text-8xl">99%</h2>
            <p className="text-neutral-500">On-Time Delivery Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

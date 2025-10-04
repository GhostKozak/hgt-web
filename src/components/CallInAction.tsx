"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PrimaryButton, StaticButton } from "./Buttons";

export default function CallInAction() {
  return (
    <section className="bg-stone-50 px-5 text-stone-900">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 bg-white lg:flex-row lg:gap-24">
          {/*  */}
          <div className="relative h-[420px] w-full overflow-hidden lg:h-[600px] lg:w-[550]">
            <div className="absolute inset-0">
              <Image
                src={"/cia.jpg"}
                alt=""
                width={1920}
                height={1273}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -inset-1">
              <Image
                src={"/cia-overlay.svg"}
                alt=""
                width={1920}
                height={1273}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          {/*  */}
          <div className="relative flex flex-col justify-center gap-10 px-5 pr-10 pb-10 lg:px-0 lg:pb-0">
            {/* --- 1 --- */}
            <div className="flex max-w-[440px] flex-col gap-5">
              <motion.div
                className="max-w-[300px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium text-stone-900 lg:text-5xl">
                  <span className="text-neutral-500">Partner with</span> Logis
                  <span className="text-neutral-500"> today!</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-neutral-500">
                  Looking for reliable, efficient, and scalable logistics
                  solutions? Let Logis handle your transportation and supply
                  chain needs with precision and care.
                </p>
              </motion.div>
            </div>
            {/* --- 2 --- */}
            <motion.div
              className="flex gap-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <PrimaryButton text="Get a quote" />
              </div>
              <div className="inline-flex items-center">
                <StaticButton text="Work with us" />
              </div>
            </motion.div>
            {/* --- 3 --- */}
            <div className="flex flex-col gap-4">
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                📦 Seamless Deliveries
              </motion.p>
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 0.8,
                }}
                viewport={{ once: true }}
              >
                🚛 Flexible Solutions
              </motion.p>
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  delay: 1.1,
                }}
                viewport={{ once: true }}
              >
                ⏳ On-Time Performance
              </motion.p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}

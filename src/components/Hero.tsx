"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PrimaryButton, StaticButton } from "./Buttons";
import ListAnchor from "./list-anchor";

export default function Hero() {
  return (
    <section className="hero relative z-0 flex min-h-[60dvh] flex-col gap-16 overflow-hidden bg-stone-50 px-5 pt-56 pb-32">
      {/* Hero Content */}
      <motion.div
        className="container mx-auto flex px-1 lg:px-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="content flex w-full flex-wrap-reverse items-end justify-between lg:flex-nowrap">
          <div className="flex flex-col items-start gap-6">
            <p className="text-2xl font-medium lg:text-3xl">
              Efficient logistics solutions, ensuring
              <br /> seamless transportation and supply
              <br /> chain management.
            </p>
            <div className="font-semibol flex items-start gap-8">
              <span className="inline-flex items-center gap-2">
                <ListAnchor />
                In air
              </span>
              <span className="inline-flex items-center gap-2">
                <ListAnchor />
                At sea
              </span>
              <span className="inline-flex items-center gap-2">
                <ListAnchor />
                On road
              </span>
            </div>
            <PrimaryButton text="Our Service" />
          </div>
          <div className="contents">
            <h1 className="mb-6 text-5xl font-medium lg:mb-0 lg:text-right lg:text-7xl xl:text-8xl">
              Swift delivery,
              <br /> smart logistics.
            </h1>
          </div>
        </div>
      </motion.div>
      {/* 3 Card */}
      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap justify-center gap-2.5 rounded-2xl bg-white p-5 shadow md:p-12">
          <motion.div
            className="group flex min-w-72 shrink-0 grow basis-0 cursor-pointer flex-col justify-between gap-8 rounded-lg border border-neutral-200 bg-stone-100 text-black"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeIn", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex min-h-60 flex-col items-start justify-between gap-3 p-8 pb-0">
              <div className="flex flex-col content-start gap-3.5">
                <div className="flex flex-col content-start gap-3">
                  <Image src={"/car.svg"} alt="" width={50} height={50} />
                  <h5 className="text-2xl font-medium text-stone-900">
                    Freight Transportation
                  </h5>
                </div>
                <p className="text-base font-normal text-neutral-500">
                  Reliable and efficient transport solutions for goods of all
                  sizes, ensuring timely and secure deliveries.
                </p>
              </div>
              <StaticButton text="Let's work together" />
            </div>
            <div className="h-40 overflow-hidden rounded-b-lg">
              <div className="h-full w-full transition-all duration-500 ease-in group-hover:scale-110">
                <Image
                  src={"/grid-1.jpg"}
                  alt="Thumbnail"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover object-[43%_30.7%]"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="group flex min-w-72 shrink-0 grow basis-0 cursor-pointer flex-col justify-between gap-8 rounded-lg border border-neutral-200 bg-stone-100 text-black"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeIn", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex min-h-60 flex-col items-start justify-between gap-3 p-8 pb-0">
              <div className="flex flex-col content-start gap-3">
                <div className="flex flex-col content-start gap-3.5">
                  <Image src={"/warehouse.svg"} alt="" width={50} height={50} />
                  <h5 className="text-2xl font-medium text-stone-900">
                    Warehousing & distribution
                  </h5>
                </div>
                <p className="text-base font-normal text-neutral-500">
                  Streamlined storage and distribution services to optimize your
                  supply chain.
                </p>
              </div>
              <StaticButton text="Let's work together" />
            </div>
            <div className="h-40 overflow-hidden rounded-b-lg">
              <div className="h-full w-full transition-all duration-500 ease-in group-hover:scale-110">
                <Image
                  src={"/grid-2.jpg"}
                  alt="Thumbnail"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            className="group flex min-w-72 shrink-0 grow basis-0 cursor-pointer flex-col justify-between gap-8 rounded-lg border border-neutral-200 bg-stone-100 text-black"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeIn", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex min-h-60 flex-col items-start justify-between gap-3 p-8 pb-0">
              <div className="flex flex-col content-start gap-3">
                <div className="flex flex-col content-start gap-3.5">
                  <Image src={"/logistic.svg"} alt="" width={50} height={50} />
                  <h5 className="text-2xl font-medium text-stone-900">
                    Custom logistics solutions
                  </h5>
                </div>
                <p className="text-base font-normal text-neutral-500">
                  Tailored services to meet the unique transportation and
                  logistics needs of your business.
                </p>
              </div>
              <StaticButton text="Let's work together" />
            </div>
            <div className="h-40 overflow-hidden rounded-b-lg">
              <div className="h-full w-full transition-all duration-500 ease-in group-hover:scale-110">
                <Image
                  src={"/grid-3.jpg"}
                  alt="Thumbnail"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Video Background */}
      <div className="video-container absolute top-0 left-0 -z-10 h-[70%] w-full px-1 lg:px-0">
        <div className="absolute top-0 left-0 z-10 h-full w-full bg-black/50"></div>
        <video
          src="/hero-background.mp4"
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          className="h-full w-full object-cover object-center"
          poster="https://framerusercontent.com/images/KSM5xSWcEga3lSTWK61Uk8WBys.jpg"
        ></video>
      </div>
    </section>
  );
}

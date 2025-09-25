"use client";

import Image from "next/image";
import { PrimaryButton } from "./Buttons";
import ListAnchor from "./list-anchor";

export default function AboutUs() {
  return (
    <section className="bg-stone-50 p-5 pb-20 lg:pb-32">
      <div className="container mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-20">
          <div className="flex grow flex-col content-start justify-between">
            <div className="flex items-center gap-2 font-semibold text-stone-900">
              <ListAnchor backgroundColor="#000" /> About Us
            </div>
            <div className="hidden lg:block">
              <PrimaryButton text="About Company" />
            </div>
          </div>
          <div className="flex max-w-[620px] grow flex-col content-start justify-between lg:max-w-full">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-medium text-stone-900 lg:text-5xl">
                <span className="text-neutral-500">
                  We specialize in providing
                </span>{" "}
                seamless and reliable logistics solutions,
                <span className="text-neutral-500">
                  {" "}
                  ensuring businesses stay ahead with efficient transportation
                  and supply chain management.
                </span>
              </h2>
              <p className="text-neutral-500">
                With years of industry experience, we have built a reputation
                for delivering excellence through innovative logistics
                strategies, cutting-edge technology, and a commitment to
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="flex grow flex-col items-start justify-end gap-2.5">
            <div className="inline-flex min-w-64 items-center justify-start gap-3 rounded-full bg-white pr-3 text-base font-semibold text-stone-900">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-yellow-200">
                1
              </span>
              On-Time Deliveries
            </div>
            <div className="inline-flex min-w-64 items-center justify-start gap-3 rounded-full bg-white pr-3 text-base font-semibold text-stone-900">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-yellow-200">
                2
              </span>
              Cost-Effective Solutions
            </div>
            <div className="inline-flex min-w-64 items-center justify-start gap-3 rounded-full bg-white pr-3 text-base font-semibold text-stone-900">
              <span className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-yellow-200">
                3
              </span>
              Scalable Services
            </div>
          </div>

          <div className="h-[390px] grow overflow-hidden rounded-lg">
            <Image
              src={"/about.jpg"}
              alt=""
              width={1920}
              height={997}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="contents lg:hidden">
          <div className="flex justify-start">
            <PrimaryButton text="About Company" />
          </div>
        </div>
      </div>
    </section>
  );
}

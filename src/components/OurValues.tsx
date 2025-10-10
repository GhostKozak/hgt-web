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
                <ListAnchor /> Değerlerimiz
              </div>
              <div>
                <h2 className="text-3xl font-medium text-white lg:text-5xl">
                  <span className="text-neutral-500">
                    En yüksek hizmet standartlarını koruyarak
                  </span>{" "}
                  güvenilir, verimli ve yenilikçi lojistik çözümleri sunmaya
                  <span className="text-neutral-500"> kararlıyız.</span>
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
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Güvenilirlik
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    Zamanında teslimatları ve sorunsuz lojistik operasyonları
                    garanti ediyor, müşterilerimize güven sağlıyoruz.
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
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Verimlilik
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    Rotaları optimize ediyor, maliyetleri azaltıyor ve tedarik
                    zinciri performansını artırarak verimliliği en üst düzeye
                    çıkarıyoruz.
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
                <div>
                  <h4 className="text-3xl font-medium text-yellow-200">
                    Yenilikçilik
                  </h4>
                </div>
                <div>
                  <p className="text-neutral-400">
                    Takip, güvenlik ve genel hizmet kalitesini artırmak için en
                    yeni lojistik teknolojilerini benimsiyoruz.
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

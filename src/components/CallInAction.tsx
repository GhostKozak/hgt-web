"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function CallInAction() {
  return (
    <section className="bg-stone-50 px-5 pt-16 text-stone-900 lg:pt-32">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 bg-white lg:flex-row lg:gap-24">
          {/*  */}
          <div className="relative h-[420px] w-full overflow-hidden lg:h-[600px] lg:w-[550]">
            <div className="absolute inset-0">
              <Image
                src={"/cia.jpg"}
                alt="Yolda giden bir kamyon"
                width={1920}
                height={1273}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute -inset-1">
              <Image
                src={"/cia-overlay.svg"}
                alt="Transparan logo"
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
                  <span className="text-neutral-500">HGT ile</span> iş ortağı
                  olun
                  <span className="text-neutral-500">!</span>
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-neutral-500">
                  Güvenilir, verimli ve ölçeklenebilir lojistik çözümleri mi
                  arıyorsunuz? Taşımacılık ve tedarik zinciri ihtiyaçlarınızı
                  HGT ile hassasiyet ve özenle yönetin.
                </p>
              </motion.div>
            </div>
            {/* --- 2 --- */}
            {/* <motion.div
              className="flex flex-col gap-4 lg:flex-row lg:gap-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div>
                <PrimaryButton text="Teklif Al" />
              </div>
              <div className="inline-flex items-center pl-7 lg:pl-0">
                <StaticButton text="Bizimle Çalışın" />
              </div>
            </motion.div> */}
            {/* --- 3 --- */}
            <div className="flex flex-col gap-4">
              <motion.p
                className="font-semibold"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                📦 Sorunsuz Teslimatlar
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
                🚛 Esnek Çözümler
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
                ⏳ Zamanında Performans
              </motion.p>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </section>
  );
}

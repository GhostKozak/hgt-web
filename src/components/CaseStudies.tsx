"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PrimaryButton, StaticButton } from "./Buttons";
import ListAnchor from "./list-anchor";

export default function CaseStudies() {
  return (
    <section className="bg-stone-50 p-5 pb-16 text-stone-900 lg:pb-32">
      <div className="container mx-auto flex">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-28">
          <div className="order-1 flex w-full flex-col gap-8 lg:order-first lg:gap-48">
            <div className="flex flex-col gap-5">
              <motion.div
                className="flex items-center gap-2 font-semibold text-stone-900"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <ListAnchor backgroundColor="#000" /> Başarı Hikayeleri
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-medium text-stone-900 lg:text-5xl">
                  <span className="text-neutral-500">Farklı sektörlerdeki</span>{" "}
                  işletmelerle güçlü ilişkiler kurmaktan gurur duyuyoruz
                  <span className="text-neutral-500">.</span>
                </h2>
              </motion.div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="font-semibold text-black">
                    “Logis lojistik operasyonlarımızı dönüştürdü! Zamanında
                    teslimatları ve profesyonel hizmetleri sayesinde işimizi
                    kolayca büyüttük. Her sevkiyatımızda onlara güveniyoruz!”
                  </p>
                </motion.div>
                <motion.hr
                  className="border-neutral-200"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  viewport={{ once: true }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <p className="text-neutral-500">
                    Michael R., Tedarik Zinciri Müdürü
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <PrimaryButton text="Daha Fazla Oku" />
                </motion.div>
                <motion.div
                  className="inline-flex items-center pl-4 lg:pl-0"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <StaticButton text="Neden Bizi Seçmelisiniz?" />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-xl md:h-96 lg:h-full">
            <motion.div
              className="absolute top-0 left-0"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/person.jpg"}
                alt=""
                width={990}
                height={1020}
                className="block h-full w-full object-cover object-[49%_25.9%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

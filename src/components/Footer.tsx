/** biome-ignore-all lint/a11y/useValidAnchor: fixthis */
"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-slate-50 p-3 pt-16 pb-8 text-stone-900 lg:pt-32">
      <div className="container mx-auto flex flex-col gap-16 px-5 lg:px-0">
        <motion.div
          className="flex flex-col gap-20 lg:flex-row lg:gap-52"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex w-full flex-wrap justify-between gap-10 md:flex-nowrap lg:max-w-[36%] lg:flex-wrap">
            <div className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-2/5">
              <p className="font-semibold text-neutral-500">Hizmetler</p>
              <a href="#">Yük Taşımacılığı</a>
              <a href="#">Son Nokta Teslimatı</a>
              <a href="#">Tedarik Zinciri Optimizasyonu</a>
            </div>
            <nav className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-[35%]">
              <p className="font-semibold text-neutral-500">Şirket</p>
              <a href="#">Hakkımızda</a>
              <a href="#">Fiyatlandırma</a>
              <a href="#">Ekibimiz</a>
            </nav>
            <div className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-2/5">
              <p className="font-semibold text-neutral-500">İletişim</p>
              <a href="#">info@hgttasimacilik.com</a>
            </div>
            <div className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-[35%]">
              <p>&nbsp;</p>
              <a href="#" className="inline-flex items-center gap-3">
                <FaLinkedin className="text-xl" />
                <span className="text-neutral-500">Linkedin</span>
              </a>
            </div>
          </div>
          <div>
            <Image
              src={"./logo.svg"}
              alt=""
              width={210}
              height={60}
              className="mb-10"
            />
            <h2 className="text-3xl font-medium md:text-4xl lg:text-6xl">
              En son güncellemelerden haberdar olmak için abone olun.
            </h2>
          </div>
        </motion.div>
        {/* Copyright */}
        <motion.div
          className="flex flex-col justify-between gap-5 border-t border-solid border-neutral-200 pt-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="text-center font-semibold text-neutral-500 lg:text-left">
              HGT Taşımacılık.<sup>©</sup> 2025 Tüm hakları saklıdır.
            </p>
          </div>
          <div>
            <p className="text-center font-semibold text-neutral-500 lg:text-left">
              Kodlayan:
              <a
                href="https://www.gokhantanriverdi.com"
                className="text-stone-900"
                target="_blank"
                rel="noreferrer noopener"
              >
                {" "}
                GhostKozak
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

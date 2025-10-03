/** biome-ignore-all lint/a11y/useValidAnchor: fixthis */
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-50 p-3 pt-32 pb-8 text-stone-900">
      <div className="container mx-auto flex flex-col gap-16">
        <div className="flex flex-col gap-52 lg:flex-row">
          <div className="flex w-full flex-wrap justify-between gap-10 md:flex-nowrap lg:max-w-[36%] lg:flex-wrap">
            <div className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-2/5">
              <p className="font-semibold text-neutral-500">Service</p>
              <a href="#">Freight Transportation</a>
              <a href="#">Last-Mile Delivery</a>
              <a href="#">Supply Chain Optimization</a>
            </div>
            <nav className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-[35%]">
              <p className="font-semibold text-neutral-500">Company</p>
              <a href="#">About</a>
              <a href="#">Pricing</a>
              <a href="#">Team</a>
            </nav>
            <div className="flex min-w-32 flex-col gap-4 font-semibold lg:min-w-2/5">
              <p className="font-semibold text-neutral-500">Contact Us</p>
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
              src={
                "https://framerusercontent.com/images/HXA1ecuB66Rl3hz4pQ0mjjLfNVo.svg"
              }
              alt=""
              width={210}
              height={60}
              className="mb-10"
            />
            <h2 className="text-3xl font-medium md:text-4xl lg:text-6xl">
              Subscribe to be in touch with latest updates.
            </h2>
          </div>
        </div>
        {/* Copyright */}
        <div className="flex justify-between border-t border-solid border-neutral-200 pt-8">
          <div>
            <p className="font-semibold text-neutral-500">
              HGT Taşımacılık.<sup>©</sup> 2025 Tüm hakları saklıdır.
            </p>
          </div>
          <div>
            <p className="font-semibold text-neutral-500">
              Coded by
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
        </div>
      </div>
    </footer>
  );
}

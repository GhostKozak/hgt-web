import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-100 p-3 pt-16 text-black">
      <div className="content container mx-auto grid grid-cols-2">
        <div className="content flex flex-wrap font-medium">
          <div className="flex basis-1/2 flex-wrap">
            <span className="mb-2 basis-full text-gray-600">Services</span>
            <a href="#" className="basis-full">
              Freight Transportation
            </a>
            <a href="#" className="basis-full">
              Last-Mile Delivery
            </a>
            <a href="#" className="basis-full">
              Supply Chain Optimization
            </a>
          </div>
          <div className="flex basis-1/2 flex-wrap">
            <span className="mb-2 basis-full font-semibold text-gray-600">
              Company
            </span>
            <a href="#" className="basis-full">
              About
            </a>
            <a href="#" className="basis-full">
              Pricing
            </a>
            <a href="#" className="basis-full">
              Team
            </a>
          </div>
          <div className="mt-4 flex basis-1/2 flex-wrap">
            <span className="mb-2 basis-full text-gray-600">Contact Us</span>
            <a href="#">partner@example.com</a>
          </div>
          <div className="mt-4 flex basis-1/2 content-end">
            <a
              href="#"
              className="flex content-center items-end justify-center"
            >
              <FaLinkedin className="mr-0.5 mb-1" /> <span>Linkedin</span>
            </a>
          </div>
        </div>
        <div className="grid">
          <h1>Hızlı Güvenli Teslimat</h1>
        </div>
      </div>
      <div className="container mx-auto pt-12 pb-3">
        <hr />
      </div>
      <div className="content container mx-auto flex justify-between py-4">
        <div className="logo brand">
          <h1 className="">HGT</h1>
        </div>
        <div className="">
          &copy; {new Date().getFullYear()} HGT Taşımacılık. Tüm hakları
          saklıdır.
        </div>
      </div>
    </footer>
  );
}

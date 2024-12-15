import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto h-full px-8 ">
      <div className="mt-24 flex justify-between py-14 text-white">
        <div className="w-full">
          <Link href="/">
            <Image
              src="/assets/cleverank-logo-final-white.png"
              alt="logo"
              width={180}
              height={180}
              quality={100}
              className="object-cover "
            />
          </Link>

          <p className="mt-4 text-sm ">
            Democratizing access to research knowledge, enabling <br /> learners
            from all backgrounds to thrive, demonstrate and grow.
          </p>
          <div className="mt-4">
            <Link href="https://cloud.google.com/vertex-ai" target="_blank">
              <Image
                src="/gemini-powered.png"
                alt=""
                width={160}
                height={150}
                quality={100}
                className="object-cover"
              />
            </Link>
          </div>
        </div>
        <div className="flex gap-24 justify-end w-full ml-8 ">
          <div>
            <div className=" text-lg font-semibold mb-1"> Company </div>
            <Link href="/about-us">
              <div className="text-gray-300 hover:text-gray-100">About</div>
            </Link>
            <Link href="/why">
              <div className="text-gray-300 hover:text-gray-100">Why</div>
            </Link>
            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Vision
            </div>
            <Link href="/mission">
              <div className="text-gray-300 hover:text-gray-100">Mission</div>
            </Link>
            <Link href="/how-it-works">
              <div className="text-gray-300 hover:text-gray-100">
                How It Works
              </div>
            </Link>

            <Link href="/faq">
              <div className="text-gray-300 hover:text-gray-100">FAQ </div>
            </Link>
          </div>
          <div className="">
            <div className=" text-lg font-semibold mb-1">Product</div>

            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Open Access
            </div>
            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Personal Library
            </div>
            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Students
            </div>
            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Professionals
            </div>

            <Link href="/institution">
              <div className="text-gray-300 hover:text-gray-100">
                Institution
              </div>
            </Link>
            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Bounty
            </div>
          </div>

          <div>
            <div className=" text-lg font-semibold mb-1"> Legal</div>
            <Link href="/terms-conditions">
              <div className="text-gray-300 hover:text-gray-100">
                Terms of Service
              </div>
            </Link>
            <Link href="/content-policy">
              <div className="text-gray-300 hover:text-gray-100">
                Content Policy
              </div>
            </Link>
            <Link href="/privacy-policy">
              <div className="text-gray-300 hover:text-gray-100">Privacy</div>
            </Link>

            <div className="text-gray-300 hover:text-gray-100 cursor-pointer">
              Contact Us
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="w-full text-end
       "
      >
        Copyright cleverank Pvt. Ltd 701, The Capital, BKC(E), Mumbai, India
      </div> */}
    </div>
  );
};

export default Footer;

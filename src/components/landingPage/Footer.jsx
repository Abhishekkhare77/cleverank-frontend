import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="mt-24 flex justify-between mb-8 ">
        <div className="w-full">
          <Image
            src="/assets/cleverank-logo-final-black.png"
            alt="logo"
            width={180}
            height={180}
            quality={100}
            className="object-cover "
          />
          <p className="mt-4 text-lg text-[#898989]">
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. A,
            cupiditate.
          </p>
        </div>
        <div className="flex gap-14 justify-start w-full ml-8 text-[#898989]">
          <div>
            <div className="text-black text-lg font-semibold mb-1">Support</div>

            <Link href="/how-it-works">
              <div>How It Works</div>
            </Link>

            <Link href="/faq">
              <div>FAQ </div>
            </Link>
            <Link href="/why">
              <div>Why</div>
            </Link>
          </div>
          <div>
            <div className="text-black text-lg font-semibold mb-1">
              {" "}
              Company Info
            </div>
            <Link href="/about-us">
              <div>About Us</div>
            </Link>
            <Link href="/mission">
              <div>Vision-Mission</div>
            </Link>
            <Link href="/institution">
              <div>Institution</div>
            </Link>
          </div>
          <div>
            <div className="text-black text-lg font-semibold mb-1"> Legal</div>
            <Link href="/privacy-policy">
              <div>Privacy Policy</div>
            </Link>
            <Link href="/terms-conditions">
              <div>Terms and Condition</div>
            </Link>
            <Link href="/content-policy">
              <div>Content Policy</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-[#898989]">
        Copyright cleverank Pvt. Ltd 701, The Capital, BKC(E), Mumbai, India
      </div>
    </div>
  );
};

export default Footer;

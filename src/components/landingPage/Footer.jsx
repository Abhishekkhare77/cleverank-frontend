import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <div className="mt-24 flex justify-between mb-8">
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
            <div className="text-black text-lg font-semibold mb-1">Company</div>
            <div>About Us</div>
            <div>Claverank Work</div>
            <div>Institution</div>
            <Link href="/faq">
              <div>FAQ </div>
            </Link>
            <div>Vission-Mission</div>
            <div>Why</div>
          </div>
          <div>
            <div className="text-black text-lg font-semibold mb-1"> Legal</div>
            <div>Privacy Policy</div>
            <div>Terms and Condition</div>
            <div>Content Policy</div>
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

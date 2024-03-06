import Image from "next/image";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="bg-[#F2F0F1] pt-10">
      <div className="grid grid-cols-1 gap-10 md:container lg:grid-cols-2">
        <div className="container flex flex-col items-start justify-center">
          <h1 className="font-integral text-4xl font-bold text-black md:text-5xl xl:text-6xl">
            Find clothes that matches your style
          </h1>
          <p className="my-5 text-base font-medium text-black/60 md:my-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button type="button">Shop Now</Button>
          <div className="flex-center mt-12 grid-cols-3 flex-wrap gap-8 md:grid">
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold text-black">200+</h3>
              <p className="text-base font-normal text-black/60">
                International Brands
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold text-black">2,000+</h3>
              <p className="text-base font-normal text-black/60">
                High-quality Products
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-4xl font-bold text-black">30,000+</h3>
              <p className="text-base font-normal text-black/60">
                Happy Customers
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 hidden h-[500px] w-full md:inline-block">
          <Image
            className="h-full w-full object-contain"
            src="/assets/hero.png"
            // width={600}
            // height={620}
            fill
            alt="hero image"
            quality={100}
          />
        </div>
        <div className="relative inline-block h-[500px] w-full md:hidden">
          <Image
            className="h-full w-full object-cover"
            src="/assets/hero-mobile.png"
            fill
            alt="hero image"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

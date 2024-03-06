import Image from "next/image";

const ProductsLogo = () => {
  const items = [
    "/assets/versace.svg",
    "/assets/zara.svg",
    "/assets/gucci.svg",
    "/assets/prada.svg",
    "/assets/calvin-klein.svg",
  ];
  return (
    <section className="bg-black py-10">
      <div className="flex-center container grid-cols-5 flex-wrap justify-evenly gap-3 md:grid">
        {items.map((item, i) => (
          <div key={i} className="flex-center">
            <div className="relative h-10 w-[100px] md:w-[150px]">
              <Image src={item} fill alt="logo" className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsLogo;

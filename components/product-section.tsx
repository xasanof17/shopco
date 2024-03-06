import React from "react";

type ProductSectionProps = {
  title: string;
  data?: null;
};

const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
  return (
    <section className="container flex flex-col space-y-[55px] pt-[72px]">
      <h2 className="text-center font-integral text-5xl font-bold text-black">
        {title}
      </h2>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col"></div>
      </div>
    </section>
  );
};

export default ProductSection;

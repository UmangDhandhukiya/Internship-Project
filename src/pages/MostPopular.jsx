import React from "react";

const MostPopular = () => {
  const data = [
    {
      image:
        "//www.thesill.com/cdn/shop/files/the-sill_Medium-Olive-Tree_Medium_Isabella_Dusty-Rose_Variant_1_9a2349fa-ad88-4622-ac80-b76813907c9f.jpg?v=1750708944&width=416",
      name: "Olive Tree",
      desc: "Our Most Popular Plant",
      price: "1200",
    },
    {
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Mermaid-Cactus-Purple_Medium_Grant_Cream_Variant.jpg?v=1752687007&width=416",
      name: "Mermaid Tail Cactus",
      desc: "Rare Plant",
      price: "2300",
    },
    {
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-Fairy-Castle-Cactus_Medium_Grant_Black_Variant.jpg?v=1752703035&width=416",
      name: "Fairy Castle Cactus",
      desc: "Premium Plant",
      price: "2000",
    },
    {
      image:
        "https://www.thesill.com/cdn/shop/files/the-sill_Medium-African_Milk_Cactus_Medium_Grant_Cream_Variant.jpg?v=1752623296&width=416",
      name: "African Milk Tree",
      desc: "Our Most Popular Plant",
      price: "2200",
    },
  ];

  return (
    <div className="h-full p-10 flex flex-col justify-between items-start">
      <h1 className="text-4xl font-light">Our Most Popular Plants</h1>
      <div className="h-auto flex gap-2 items-center">
        {data.map((item, index) => {
          return (
            <div
              className="flex flex-col justify-center items-star p-4 cursor-pointer"
              key={index}
            >
              <img className="" src={item.image} alt="" />
              <p className="text-2xl py-1">{item.name}</p>
              <p className="text-sm font-light py-1">{item.desc}</p>
              <p className="font-light py-1">
                <b>From</b> ₹{item.price}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MostPopular;

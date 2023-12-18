import Image from "next/image";
import React from "react";

type Props = {
  path: string,
  name: string,
  price: string
};

const Product = (props: Props) => {
  return (
    <div className="bg-white flex flex-col rounded-md hover:shadow-xl h-96 pt-5">
      <div className="h-44 bg-black bg-opacity-10 flex justify-center items-center mx-4">
        <Image src={props.path} alt="next" width={100} height={1} />
      </div>
      <div className="text-2xl font-bold capitalize text-center flex-1 mx-4 flex flex-col justify-center items-center gap-2 py-2">
        <div>{props.name}</div>
        <div className="text-sm font-thin text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, molestias aliquam. Pariatur.
        </div>
        <div className="text-[#31C8A5]">${props.price}</div>
      </div>
      <button className="rounded-b-sm bg-[#31C8A5] hover:bg-[#3aa78e] h-14 flex items-center justify-center">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

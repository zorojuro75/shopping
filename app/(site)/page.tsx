import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import Protected from "@/components/Protected";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <Protected>
      <div className=" flex-1 max-w-7xl mx-auto w-full p-5 grid md:grid-cols-4 grid-cols-1 gap-5">
        <Product path="/shoe.png" name="shoe" price="60" />
        <Product path="/shoe1.png" name="shoe1" price="50" />
        <Product path="/tshirt.png" name="T-Shirt" price="10" />
        <Product path="/shoe1.png" name="shoe1" price="45" />
        <Product path="/shoe.png" name="shoe" price="30" />
      </div>
    </Protected>
  );
};

export default page;

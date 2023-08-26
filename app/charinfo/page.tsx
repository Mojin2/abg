import Navbar from "@/components/navbar";
import { Card } from "@chakra-ui/react";
import ContentLayout from "../contentLayout";
import ProductAddToCart from "./card";
import InfoCard from "./infocard";

export default function CharInfo() {
  return (
    <div>
      <Navbar />
      <ContentLayout>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-1 gap-x-2 px-3 justify-center items-center">
          <div className="border-2 border-slate-300 h-[400px] rounded-lg max-w-sm mx-auto w-full " />
          <div className="border-2 border-slate-300 h-[400px] rounded-lg max-w-sm mx-auto w-full " />
          <div className="border-2 border-slate-300 h-[400px] rounded-lg max-w-sm mx-auto w-full " />
          <div className="border-2 border-slate-300 h-[400px] rounded-lg max-w-sm mx-auto w-full" />
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-2 gap-x-2 px-3 justify-center items-center">
          <ProductAddToCart />
          <ProductAddToCart />
          <ProductAddToCart />
        </div>
      </ContentLayout>
    </div>
  );
}

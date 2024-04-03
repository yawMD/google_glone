"use client"
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col mt-24 items-center justify-center w-full">
        <Image
          width="300"
          height="100"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
          alt={"Google logo"}
        />
        <HomeSearch />
      </div>
    </>
  );
}

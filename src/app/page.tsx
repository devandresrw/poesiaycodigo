import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-dvw h-dvh flex flex-col 
      justify-center items-center gap-5">
        <div className="">
          <Image
            src={'/logo.svg'}
            width={500}
            height={500}
            alt="logo"
            className="w-full h-auto 
          max-w-xs sm:max-w-sm 
          md:max-w-md lg:max-w-lg 
          xl:max-w-xl"
          />
        </div>

      </div>
    </>
  );
}

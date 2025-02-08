import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-bannerHome bg-cover bg-center bg-no-repeat w-full h-screen flex justify-center items-center">
      <div className="w-full h-screen bg-black opacity-55" />
      <div className="absolute w-full h-full flex flex-col justify-center items-center">
        <Link href="/dashboard">
          <Image
            className="rounded-full pokebola-home"
            src="/pokebola-button-home.jpg"
            alt="title-pokemon-home"
            width={300}
            height={300}
          />
        </Link>
      </div>
    </div>
  );
}

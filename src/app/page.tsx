import Image from "next/image";
import style from '@/app/styles.module.css'

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <Image
          src={'/logo.svg'}
          width={500}
          height={500}
          alt="logo"
        />
      </div>
    </>
  );
}

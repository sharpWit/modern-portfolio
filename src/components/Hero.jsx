import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "../components/GetStarted";
export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center font-bold py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph}`}>
            <span className=" text-stone-100">20%</span>
          </p>
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px] ml-2"
          />
          تخفیف برای
          <p className={`${styles.paragraph} mr-2`}>
            <span className=" text-stone-100">اشتراک 1 ماهه</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-sans font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px]  leading-[75px]">
            نسل <br className="sm:block hidden" />
            {""}
            <span className="text-gradient">جدید {""}</span>
            {""}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-sans font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          دنیای مجازی
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] transform -scale-x-100"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] left-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

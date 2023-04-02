import React from "react";
import styles from "../style";
import { arrowUp } from "../assets";

export default function GetStarted() {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-sans font-bold text-[23px] leading-[32px]">
            <span className="text-gradient">ثبت‌نام</span>
          </p>
        </div>
        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-sans font-bold text-[23px] leading-[32px]">
            <span className="text-gradient">می‌کنم</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="w-[30px] h-[30px] mt-2 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

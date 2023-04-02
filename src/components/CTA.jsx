import styles from "../style";
import Button from "./Button";
const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>
        لطفا خدمات ما را برای یکبار هم شده امتحان کنید!
      </h2>
      <p className={`${styles.paragraph} max-w-[470] mt-5`}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:mr-10 mr-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);
export default CTA;

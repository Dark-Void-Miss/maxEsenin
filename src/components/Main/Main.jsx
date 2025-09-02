import s from "./Main.module.css";
export const Main = () => {
  return (
    <>
      <div className={s.container}>
        <div>
          <h1 className={s.taitl}>Find all your favorite character</h1>
          <div className={s.title}><p>You can find out all the information about favorite characters</p></div>
        <div><button className={s.button}>See more...</button></div>
        </div>
         <div className={s.img}><img src="/public/rect.svg" alt="" /></div>
      </div>
     
    </>
  );
};

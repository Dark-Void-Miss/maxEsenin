import s from "./Header.module.css";
export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.container}>
          <div>
            <img src="/public/Logo.svg" alt="" />
          </div>
          <div className={s.nav}>
            <div className={s.activ}>Home</div>
            <div>Chatacters</div>
          </div>
        </div>
      </header>
     
    </>
  );
};

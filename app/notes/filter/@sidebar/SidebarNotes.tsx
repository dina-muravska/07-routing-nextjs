import css from "./SidebarNotes.module.css";
import Link from "next/link";

export default function SidebarNotes() {
  return (
    <div>
      <ul className={css.menuList}>
        {/* список тегів */}
        <li className={css.menuItem}>
                 {" "}
          <a href={`/notes/filter/all`} className={css.menuLink}>
                      All notes        {" "}
          </a>
               {" "}
        </li>
        <li className={css.menuItem}>
          <a
            href={`url до сторінки за відповідним тегом`}
            className={css.menuLink}
          >
            Назва тегу
          </a>
        </li>
      </ul>
    </div>
  );
}

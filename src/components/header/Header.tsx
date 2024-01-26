import { ListHeader } from "./headercomponents/ListHeader";
import Image from "next/image";
import "styles/header/contentHeader.css";

export default function Header() {
  return (
    <header>
      <div className="content-all-header ">
        <div className="logo-header text-yellow-400">
          <div className="logo-domus-header"></div>
        </div>

        <div className="nav-header">
          <ListHeader liheader="¿quienes somos?" />
          <ListHeader liheader="¿que hacemos?" />
          <ListHeader liheader="colabora con nosotros" />
          <ListHeader liheader="voluntariado" />
          <ListHeader liheader="noticias" />
          <ListHeader liheader="domus para todos" />
          <ListHeader liheader="contacta con nostros" />
        </div>
      </div>
    </header>
  );
}

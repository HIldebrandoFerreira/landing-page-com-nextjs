import Image from "next/image";
import Link from "next/link";

import searchIcon from "../../public/icon-search.svg";
import iconUser from "../../public/icon-user.svg";
import logoImg from "../../public/logo.svg";
import { GridContainer } from "./grid";

const arrayMenu = [
  "Inicio",
  "Beneficios",
  "Pra quem é o curso",
  "Preço promocionais",
  "Sobre nós",
];

export function Header() {
  const activedStyle = "bg-green-active text-opacity-100 rounded-full";
  return (
    <header className="relative w-full h-24 bg-green-primary flex items-center">
      <GridContainer className="flex items-center justify-between">
        <Image src={logoImg} alt="teste" width={100} />
        <div className="flex items-center gap-20">
          <nav className="flex gap-2">
            {arrayMenu.map((item, index) => (
              <Link
                key={index}
                href="#"
                className={`px-3 py-1 text-white hover:text-opacity-100 transiction-all ${
                  index === 0 ? activedStyle : "text-opacity-40"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image src={searchIcon} alt="pesquisar" />
            </button>
            <button className="flex items-center gap-2">
              <Image src={iconUser} alt="user" />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}

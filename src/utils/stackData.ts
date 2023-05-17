import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { DiJsBadge } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: DiCss3,
  },
  {
    title: "JS",
    img: DiJsBadge,
  },
  {
    title: "Node JS",
    img: FaNode,
  },
  {
    title: "Styled Components",
    img: SiStyledcomponents,
  },
  {
    title: "React",
    img: FaReact,
  },
  {title: "Python", img: FaPython},
  { title: "TypeScript", img: SiTypescript },
  { title: "Docker", img: FaDocker },
  {title: "Python", img: SiPostgresql},
];

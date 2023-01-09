//icon, height, fill, fillOnHover,
import NextJSIcon from "../../public/icons/nextJS";
import TailwindCSSIcon from "../../public/icons/tailwindCSS";
import { SVG_ICONS_NAMES } from "../shared/CONSTS";

export default function SVGIconRender(props) {
  const IconSwitch = () => {
    switch (props.icon) {
      case SVG_ICONS_NAMES.nextJS:
        return <NextJSIcon fill={props.fill} height={props.height} />;
      case SVG_ICONS_NAMES.tailwindCSS:
        return <TailwindCSSIcon fill={props.fill} height={props.height} />;
    }
  };
  return <IconSwitch />;
}

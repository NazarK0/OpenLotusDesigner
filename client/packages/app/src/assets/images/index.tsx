//window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
import LogoIcon from "./Logo.png";
import { ReactComponent as LogoWithNameIcon } from "./logo-with-name-home.svg";
import { ReactComponent as LogoHomeIcon } from "./logo-with-name-home.svg";

export { default as favicon } from "./favicon.ico";

export const Logo = (props: { branding?: boolean }) => {
  return (
    <div>
      <img src={LogoIcon} alt="Description of the asset" />
    </div>
  );
};

export const LogoWithName = (props: { branding?: boolean }) => {
  return <LogoWithNameIcon />;
};

export const LogoHome = () => {
  return <LogoHomeIcon />;
};

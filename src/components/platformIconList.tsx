import { Platform } from "./hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";

interface PlatformIconListProps {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: PlatformIconListProps): JSX.Element => {
  const platformIcons: { [key: string]: JSX.Element } = {
    PC: <FaWindows />,
    PlayStation: <FaPlaystation />,
    Xbox: <FaXbox />,
    iOS: <MdPhoneIphone />,
    macOS: <FaApple />,
    Linux: <FaLinux />,
    Android: <FaAndroid />,
    Nintendo: <SiNintendo />,
    Web: <BsGlobe />,
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      {platform.map((p) => (
        <span key={p.id} style={{ fontSize: "1.5rem" }}>
          {platformIcons[p.name]}
        </span>
      ))}
    </div>
  );
};

export default PlatformIconList;

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";
import { Link } from "react-scroll";

const socials = [
    {
        path:'#',
        icon:<RiInstagramFill/>
    },
    {
        path:'#',
        icon:<RiYoutubeFill/>
    },
    {
        path:'#',
        icon:<RiSpotifyFill/>
    },
    {
        path:'#',
        icon:<RiSoundcloudFill/>
    },
];

const Socials = ({containerStyles,iconStyles}) => {
  return <div className={`${containerStyles}`}>
    {socials.map((item, index) => {
        return <Link href={item.path} key={index}>
            <div className={`${iconStyles}`}>
                {item.icon}
            </div>
        </Link>
    })}
  </div>;
};

export default Socials;

import { Stack } from "@mui/material";
import ButtonSecondary from "./ButtonSecondary";
import Text from "./Text";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Divider from "@mui/material/Divider";
import Font from "./Font";
import { Fullscreen } from "@mui/icons-material";

export default function Footer() {
    return (
       <Stack>
         <Stack sx={{
            background: "#18BA51",
            p: 4
        }}>
            <Stack alignItems="center" direction="column" spacing={10}>
                <Stack direction="row" spacing={1}  alignItems="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="33" height="27" viewBox="0 0 33 27" fill="none">
                        <path d="M5.85954 2.53992L1.65401 10.4115C1.12919 11.3967 0.866211 12.4779 0.866211 13.5605C0.866211 14.6433 1.12919 15.7243 1.65401 16.7095L5.85954 24.5812C6.63469 26.0352 8.15062 26.9433 9.8003 26.9433H14.2674V24.7134H14.2659C13.4418 24.7134 12.6838 24.26 12.2962 23.5331L8.09225 15.6599C7.74091 15.0036 7.56581 14.2829 7.56581 13.5605C7.56581 12.8381 7.74091 12.1174 8.09225 11.4613L12.2962 3.58808C12.6838 2.86102 13.4418 2.40779 14.2659 2.40779H14.2674V0.177734H9.8003C8.15062 0.177734 6.63469 1.08598 5.85954 2.53992Z" fill="white" />
                        <path d="M31.3455 10.4116L27.1401 2.53998C26.3648 1.08588 24.849 0.177792 23.1993 0.177792H18.7321V2.40768H18.7337C19.5579 2.40768 20.3158 2.86108 20.7033 3.58797L24.9072 11.4612C25.2587 12.1175 25.4335 12.8382 25.4335 13.5606C25.4335 14.2829 25.2587 15.0036 24.9072 15.6599L20.7033 23.533C20.3158 24.26 19.5579 24.7133 18.7337 24.7133H18.7321V26.9433H23.1993C24.849 26.9433 26.3648 26.0352 27.1401 24.5811L31.3455 16.7095C31.8701 15.7244 32.1333 14.6432 32.1333 13.5606C32.1333 12.4779 31.8701 11.3967 31.3455 10.4116Z" fill="white" />
                    </svg>
                    <ButtonSecondary > Food  delivery</ButtonSecondary>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <Text>нүүр</Text>
                    <Text>холбоо барих</Text>
                    <Text>хоолны цэс</Text>
                    <Text>үйлчилгээний нөхцөл</Text>
                    <Text>хүргэлтийн бүс</Text>
                    <Text>нууцлалын бодлого</Text>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <FacebookRoundedIcon sx={{color:"#fff"}}/>
                    <InstagramIcon sx={{color:"#fff"}}/>
                    <TwitterIcon sx={{color:"#fff"}}/>
                </Stack>

                <Divider   orientation="horizontal" flexItem sx={{  color: "#fff"}}/>
                <Stack direction="column" spacing={1} alignItems="center">
                <Font>© 2024 Pinecone Foods LLC</Font>
                <Font>Зохиогчийн эрх хуулиар хамгаалагдсан.</Font>
                </Stack>
            </Stack>
        </Stack>
        <Stack>
            
        </Stack>
       </Stack>
    )
}
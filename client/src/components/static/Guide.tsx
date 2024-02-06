import { Card, Stack, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";


export default function Guide({Icon , title, desc}: {title:string, desc:string , Icon:OverridableComponent<SvgIconTypeMap<{}>>}){
    return(
      <Stack py={5}>
        <Card sx={{ alignSelf:"center", width:"264px", height:"155px" , backgroundColor:"#fff" , p:2 }}>
     <Stack color="#18BA51" py={3}>{<Icon />}</Stack>
      <Typography fontWeight={"bold"}>{title}</Typography>
      <Typography fontSize={"14px"}>{desc}</Typography>
      </Card>
      </Stack>
    )
}
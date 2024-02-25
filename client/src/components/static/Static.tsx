import { Stack } from "@mui/material";
import Guide from "./Guide";
import ImportContactsOutlinedIcon from "@mui/icons-material/ImportContactsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";

export default function Static() {
    return(
        <Stack direction="row" justifyContent={"space-around"}>
        <Guide
          title="Хүргэлтийн төлөв хянах"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={ImportContactsOutlinedIcon}
        />
        <Guide
          title="Шуурхай хүргэлт"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={AccessTimeOutlinedIcon}
        />
        <Guide
          title="Эрүүл, баталгаат орц"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={RamenDiningOutlinedIcon}
        />
        <Guide
          title="Хоолны өргөн сонголт"
          desc="Захиалга бэлтгэлийн явцыг хянах"
          Icon={ImportContactsOutlinedIcon}
        />
      </Stack>
    )
}
import { Button, Stack } from "@mui/material";
import FoodCard from "./FoodCard";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useEffect, useState } from "react";
import axios from "axios";
import { log } from "console";
import useSWR from "swr";
export default function FoodCards() {
  const api = "http://localhost:8000/category";
  const fetcher = (args:any) => axios.get(args).then((res) => res.data);
  
  const { data, isLoading, error } = useSWR(api, fetcher);
  console.log(data);

  // const [menu, setMenu] = useState([]);
  // const [name, setName] = useState("");
  // const drawMenu = async () => {
  //   const res = await axios.get(api);
  //   setMenu(res.data);
  // };
  // useEffect(() => {
  //   drawMenu();
  // }, []);

  const dataCard = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tleh-odbeAFX74VqI~Td2K3eA5N-jxt2h3Rit7DN3M6cOcnc6DOHC3H8xV7mkK1TjQZTS0U5oVdH8oJw6IcggdO9ZzQQ3lTfU5ir6l8PtfBwqcRT9W57NBiCiTv1mlnL7HngYW039cyNbwEhSQDuZ0SFupsHUlRzTzVWS68QSMbB21Yyua4X9r0QFu-kJO9exoq7qP~YxxfY5x3e8KzJFtCJPxOSARw2XsHj7aWAO8evRmbYseDMhXOKOHtc~xd4vg8ZoKFA54v9pCJXAetsjcVzoMK5dKkqLoDTNmjNsR8rqZmDhjpCEj6tc0U12hSBB~UN1qNRdu52Pg~kRePO8A__",
      title: "Амттан",
      price: 5000,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WdaTCwNkEgS3OYnWbOK8lQBqywmWVzmgrsU~DlluE9WLsCN8OYPiy9W48~q0pG1g-WBQPg2clYeTKRluWoAjSqIrcvPDXPxKP~v-z7dzCZ2vTr8Z3InVjuumV1X7UDKo-dRM5SczoI80Th99KBhPKYw40TBtVL1iIKIv-mOAwIdhw7n3JETXDyghMp5UK3Kr41-0HyNicRveKmoSBipQolwo72s3qo7R6hdC5N4Ycr8YgHUTS~Hni-2v0W7~E2ROAdDUBxZWcl5gqEr4q2mXGvNOnmlyeXl-zZPhr20ipnxh~Uel6zmgRuFvVnkyiSw5IQ9MiFFfv5pGavWotGSIXQ__",
      title: "Өглөөний хоол",
      price: 16000,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/212a/1c96/f7a2a9e4728cdfcd39a141afa4d32e5c?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fHIrrcbjBwVHu79ycHRy6R1U9SQus03nbh44ZCXClnV1sOsiUeP8qU2uwnvqJ4fdJcijnxCJXx0N5HHjo5zjQQJe3XPmw3RnTlXhsqy-~Rg~IiFBB57DaT4Rd-A8P~w57MVz1wNupkjg-WXfxGV-NouxU-ym92uBXzGrHAQljcRS102EelCOk-nLpZmbdD1A2IpWzo5rff~jhg-~ULil-vaqNsah1VtDn7nzsfdYAg8o7Ra-q94JNOpltvqIGI8WfMe92wqWDiwm2a5fdxOeHedRuTxOlk-bxohxjli7i-Evfm1CJdBXxn9WW6sTmYShouMrabDovygyBJXrteGdZQ__",
      title: "Зутан шөл",
      price: 20000,
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/3527/9f71/293873e46dff98a580a78ab4b4726c6b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TeoH12qPxaYi3Ya5Ln7wKM29CK-rT~sQ7N0vruGkZQ8rsiYxAixzWm9dpWekoeNOaokcZnlPP9DYGRByuj8SA3u8sP6jBxO~vuhPbILpR18KXzOz-0arQcqxgUi0RaEtndwRrhfhXsC9XBUKng~XjEVBCvfycJ~ADWcidVa4luRNbox48e5BqJNgGQPUN3XtR20giUZ76Ii4waJupCtySXLgMalxssv4gOutelii~lrOgsm4ZdEOp192S7frm028pw9VRrgY0ixHNctaYBssz9zgy0DV9H89u-E5W0gzkZIH1Gs4~o5mBIPAgrTeNmqbExPu-TWZ6L888-RbErrSow__",
      title: "Салад ба зууш",
      price: 15000,
    },
  ];

  return (
    <>
      {data &&
        data.map((el: any) => {
          // console.log(el, "el");
          return (
            <Stack direction={"column"} gap={4} p={5}>
              <Stack
                direction={"column"}
                justifyContent={"space-between"}
                px={16}
                gap={2}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  px={16}
                >
                  <Button startIcon={<StarIcon />}>{el.name}</Button>
                  <Button endIcon={<ArrowForwardIosIcon />}>
                    Бүгдийг харах
                  </Button>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-around"}>
                  {dataCard.map((el) => {
                    return (
                      <FoodCard
                        image={el.image}
                        title={el.title}
                        price={el.price}
                      />
                    );
                  })}
                </Stack>
              </Stack>
            </Stack>
          );
        })}
    </>
  );
}

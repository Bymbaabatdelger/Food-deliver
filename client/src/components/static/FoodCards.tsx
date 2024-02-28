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

  const apiFood = "http://localhost:8000/food/foods";

 
  const [dataCard, setDataCard] = useState([]);
  const drawMenu = async () => {
    const res = await axios.get(apiFood);
    setDataCard(res.data);
  };
  useEffect(() => {
    drawMenu();
  }, []);

  // const dataCard = [
  //   {
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fNSJcSBOAAYhOJuKgrW29EatAKEr-h5uZ8dLYcIr4Q~sMHfPlHEcYTVJYmsDgn0dFcpzR-ByYLG3XLAUUeLKDBlEwDn59y0Qogc68gMz86HJQBULPC0-0lqlTgq346NrxUupWB8-B0h94tLg8Z7VGKOXdTBleJomppTXePt9VxAawKg7B6odbAHMkmMR1bpUpUyIqPsJvjIirsaHZ2exShYxTnN9giwz7WXnAbuESFDy5jnIfdLcJYHvq5HMGdQ5p7M1H0d9kpy8d2Rq47JRA6N5w8wKOMI7ct8KYNU8jM~ZXn3Ew1LAnoTR5Jjad~l7P~rl-R3qABsFeXz0O93i7A__",
  //     title: "Амттан",
  //     price: 5000,
  //   },
  //   {
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/669a/97ce/f4ad7e823b2a1cb020f7b7e74bce1ed7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ce3JD5WS-bYMIVmSFbljBiaIINfDQvqOMkQTaHxWieXwXgre~Bb2PdK3eD5odftQXPxx0pSlWHk0LJWZhDCuyHf4ActS87DO5h7bJbEFmi9SfG2Cpm6kC9WEA6q8OgUEecorIC7uX~qCUt~DE6rB5aRKh~~a~ttL4nIcCWDQkoYbNAP35BlfWh-Lx6Oxrwr1Me9C0LaouBj7tx5crQ0yZaqLiGsHQWVdiUt0nosQWUE7a0W~dN3rTPduJSd~VlE4b8iPABs9XGYTEGHEtZ9W8IA6kvyuPk2xYADhcGQCpAU4aPOJkNYaZ4h7LpZOBdOtz3UgxeE-DNfOft8hnFKwtw__",
  //     title: "Өглөөний хоол",
  //     price: 16000,
  //   },
  //   {
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/212a/1c96/f7a2a9e4728cdfcd39a141afa4d32e5c?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ffi0Un~zEYmfQaOPYDgChVYniuN0kFN3~f-Xaexnx2omGCXdCCNoA9sGicocN7R7Km8n9bEe6IrBVetEQ2mD73Bz9kM0kK1QmZADVWOY9-oO8hU4k3vnCxi277t6C~7MELTNNAITOfWtl0q7v~vhRzbcx1odPsbm5Sv-0BHNdKAZqUkAlRukSgLOf31xWVPlNG~2ijaMdHaDGqv1SHXgYVPF6VZSVUFf52mCZd-NPpxRwm9NeAvpXOd7rEIwLbfagsrtxScymLBhoSXM3JAs-RAHY6QqnHi5Jvz5wPPHY7b0Qc8OXhcyH02EnePhWCiAJTvZvcb63p9xa57xP7Yxpw__",
  //     title: "Зутан шөл",
  //     price: 2000,
  //   },
  //   {
  //     image:
  //       "https://s3-alpha-sig.figma.com/img/3527/9f71/293873e46dff98a580a78ab4b4726c6b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SD6zmZMnt5gPkxrUtW8TOk1Qq3FqlrduRKS69GTNn1F68CoPVhF~2PUOyMLD8jkFH1S93aVrtuykXe4ZWCXM7mKfjA9RXka8TEazrzxxgDRBUuWB6HxX50~WERsUofel5C1jfGH4sWK0XhdYhqDcdjbgyau8pu3HiuJo3-X5Elz3Ohxl5ukZigPf3iIYVWYjb67~HQ--l1ac7UxD-b~rSVNR6s9hMcb96obtsTdgGRX063pIyYDyNpg8AlRXS4fp-nBGamQdWiz1OS102D7NnXx-qpVhfIu8~driSur1pZSQ8qYShFeBQEkYUvlh2kFmEosup0OnTxPrd6nQuMYH3Q__",
  //     title: "Салад ба зууш",
  //     price: 15000,
  //   },
  // ];

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
                  <Button sx={{color:"#18BA51" ,fontWeight:"bold" ,fontSize:24}} startIcon={<StarIcon />}>{el.name}</Button>
                  <Button sx={{color:"#18BA51"}} endIcon={<ArrowForwardIosIcon />}>
                    Бүгдийг харах
                  </Button>
                </Stack>
                <Stack direction={"row"} justifyContent={"space-around"}>
                  {dataCard.map((el:any) => {
                    return (
                      <FoodCard
                        image={el.image}
                        name={el.name}
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

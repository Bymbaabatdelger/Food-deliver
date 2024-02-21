import { Box, Divider, Stack, Typography } from "@mui/material"



export default function Main() {
    return (
        <Stack bgcolor="#18BA51" width="full" height="788px"  direction="row">
            <Stack direction="column" justifyContent="center" alignItems="center" width="50%" p={30}>
                <Stack py={5}>
                    <Typography fontWeight="bold" color="white" fontSize={50}>Pinecone</Typography>
                    <Typography fontWeight="bold" color="white" fontSize={50}>Food delivery</Typography>
                </Stack>
                <Divider  orientation="horizontal" flexItem></Divider>
                <Typography py={5} color="white">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</Typography>
            </Stack>
            <Stack alignItems="center" justifyContent="center" direction={"row"}>
            <Box
              position={"relative"}
              component="img"
              sx={{
              borderRadius:"50%",
              height: 600,
              width: 700,
              
              }}
              alt="The house from the offer."
              src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZ9ESkJp7lcaRWZv1pozJ6zTDRZIs3wXyYgxPfOfqp~7tBbMlJx3tCSN9V~yUlc9l8RMiJq1LNGfqWwwcKbGYdA82JXntFZRSpNtH5~e5k0IdwYLhbzlQ~0XV2pUsFtdhYzGwb0ySFqhtYipbpqqwGsyaI0ipm7~FLJXppGr8C6s0y7srJCtgWMyj0XBG8p~7sydouPM0txqx69LaBhBk3Cd-aZwvFDZrGzKQ-dNf-VFf7D9nsHxvME7zTzrmnCgtJgEGMD82v76P7ohWex8zsXfQd7oPV35D08E-AFDAthBx2tOrOeb16YbetJqr-3~nlzVF2J4GcIMLfw1SZdtoQ__"
              />
                <Box
                position={"absolute"}
                right={"19%"}
                top={"35%"}
                borderRadius="50%"
                component="img"
                sx={{
                height: 320,
                width: 400,
               
                }}
                alt="The house from the offer."
                src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bsfJDblASiA5bcjEhHPFGuic8CCNEqlUDGQvVHA97BcxvO-NgOc90V-ca0A-l3kz0qf18SXtI3wxZeBRtqum2otCfSyroAEZWqI7MWPVcGeyyv62c4mVhzpCKDQq7~RaBZk0fSzeWjmrIT3qqoZa5OePnryOmkVYN8TVSKBpJ8BgTY7T~nytYjbxHM7j7mQaqzd6SFDjAiR2zXGY4yYvloAizB5bpOa3tR5M3X6~PLXmztTm4UADVC8GSaVU80-GI25-FeTwtxK6N7CNm346nCuoIUFtM4zMWJSockZKLqbOFASOzDl12XxfA04ktbGtXruPPVOrNiixSWOPiyg5fA__"
                />

            </Stack>
        </Stack>
    )
}
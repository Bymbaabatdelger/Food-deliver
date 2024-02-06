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
              src="https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oAgJ14nSS24E04nWC~uDFbmzKlF-IlRL8JniwjzlWwOyYDiAyfbPC5Bg0dLTMaym8PyNqEMrWWVtXyRWcZDWcr2XrBhMe2upyhQ5NMnncZudgYeXP38y751GVdPxHMqdUe~U~kTCSDt5OYlwlYNEBbTXJeDW-XPBED5DEdzIzRYINSyAJwhi6KoYVDlF4ru5EyLQwJab1DCbCtF7gQRSIi6khXM4TWhTu5ZuxzupiuaOoNO-Ytadxox73ZjPXNTw5BJXaO55a~c-4hisGfnmbYlh2v18x1otGkgTbDo~UZbLi8Jhzlma8hQob3c0iqRgwb9qtDjC5d5fCPyg~W8D0g__"
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
                src="https://s3-alpha-sig.figma.com/img/7e09/e5d0/2949632a6a2df2f49b384d2050707197?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b9M4eauP8jceRQpl7Mr1ozzxIyt-DJmW-dyVZUVwxInFydK9E~1WU6Fq~R0aYxVSpEa4LAQoO0RVO0Ec70Mcr-guoDunvniAszeYhV-AVhn~yeVj~LuhSTF8SpEh8i3Yo4ylcdtzhaBFBR-8oDcw1G1NG69T9ruY0AfFl1eoAw8gx1LHSxpG~5pgG~omUhNF5Bc1Hml2Ti~~D-WcWntqJ9bg~58ovuN9zsk-zuH8Z3uydfgY9~VlMyohyTbvzwxU1Dh-uPIRv8wV0nZHyTH~CzEY30BqTrk3ElAzp3U2X7k8S3IlE1ezPYl3WH5QiMSGcBXWPRsSIFhJAvVBf-h6Qg__"
                />

            </Stack>
        </Stack>
    )
}
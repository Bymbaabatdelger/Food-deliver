import { Divider, Stack, Typography } from "@mui/material";


export default function Main() {
    return (
        <Stack bgcolor="#18BA51" width="full" height="788px" mt={14} mb={14} direction="row">
            <Stack direction="column" justifyContent="center" alignItems="center" width="50%">
                <Stack>
                    <Typography fontWeight="bold" color="white" fontSize={30}>Pinecone</Typography>
                    <Typography fontWeight="bold" color="white" fontSize={30}>Food delivery</Typography>
                </Stack>
                <Divider  orientation="horizontal" flexItem></Divider>
                <Typography  color="white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quia atque est nemo, totam maiores consequatur, quas quasi consequuntur non libero, sequi porro vitae quo! Quae quaerat obcaecati illo iusto!</Typography>
            </Stack>
            <Stack>

            </Stack>
        </Stack>
    )
}
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function OrderClick({orderCLick}:any) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerContent = (
  
      <Stack>
        hello
      </Stack>
     
  );

  return (
    <Stack>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={orderCLick}>
        {DrawerContent}
      </Drawer>
    </Stack>
  );
}
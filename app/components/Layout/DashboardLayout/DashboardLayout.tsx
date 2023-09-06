import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'Home', href: '/', icon: HomeIcon },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Divider />
        <List>
          {LINKS.map(({ text, href, icon: Icon }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton component={Link} href={href}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ mt: 'auto' }} />
      </Drawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          ml: `${DRAWER_WIDTH}px`,
          mt: ['48px', '56px', '64px'],
          p: 3,
        }}
      >
        {children}
      </Box>
    </>
  );
}

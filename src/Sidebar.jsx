
           

//             // import React from 'react';
//             // import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
//             // import InboxIcon from '@mui/icons-material/Inbox';
//             // import MailIcon from '@mui/icons-material/Mail';
//             // import { styled } from '@mui/system';
//             // import theme from './Theme';
            
//             // const DrawerContainer = styled('div')({
//             //   display: 'flex',
//             //   flexDirection: 'column', // Change to column for a typical sidebar layout
//             //   width: '20px', // Adjust width according to your design
//             //   flexShrink: 0, // Should be 0 or 1 depending on your design
//             // });
            
//             // const DrawerPaper = styled(Drawer)({
//             //   width: '40px', // Adjust width according to your design
//             //   backgroundColor: theme.palette.primary.main,
//             //   color: theme.palette.common.white,
//             // });
            
//             // const Sidebar = () => {
//             //   return (
//             //     <DrawerContainer>
//             //       <DrawerPaper variant="permanent" anchor="left">
//             //         <List>
//             //           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             //             <ListItem button key={text}>
//             //               <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//             //               <ListItemText primary={text} />
//             //             </ListItem>
//             //           ))}
//             //         </List>
//             //       </DrawerPaper>
//             //     </DrawerContainer>
//             //   );
//             // };
            
//             // export default Sidebar;


// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import InboxIcon from '@mui/icons-material/Inbox';
// import MailIcon from '@mui/icons-material/Mail';
// import { styled } from '@mui/system';
// import theme from './Theme'; // Make sure the path to Theme.js is correct

// const Sidebar = ()=>{

// const DrawerContainer = styled('div')({
//   display: 'flex',
//   flexDirection: 'column', // Change to column for a typical sidebar layout
//   width: '20%',
//   flexShrink: 0, // Should be 0 or 1 depending on your design

  
// });

// const DrawerPaper = styled(Drawer)({
//   width: '20%', // Adjust width according to your design
//   backgroundColor: theme.palette.primary.main,
//   color: theme.palette.common.white,
// });

//   return (
//     <>
//     <DrawerContainer>
//       <DrawerPaper variant='permanent' anchor='left'>
//         <List>
//           {['Dashboard', 'Analytics', 'Customer', 'Services','Payments','Invoice','Transactions','Settings','Support & Feedback'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>{index % 8 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//       </DrawerPaper>
//     </DrawerContainer>

   
// </>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonIcon from '@mui/icons-material/Person';
// import ServicesIcon from '@mui/icons-material/RoomService';
// import PaymentsIcon from '@mui/icons-material/Payment';
// import InvoiceIcon from '@mui/icons-material/Description';
// import TransactionsIcon from '@mui/icons-material/AccountBalance';
// import SettingsIcon from '@mui/icons-material/Settings';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import { styled} from '@mui/material/styles';
// import themes from './Themes';

// const Sidebar = () => {
//   const DrawerContainer = styled('div')({
//     display: 'flex',
//     flexDirection: 'column',
//     width: '20%',
//     flexShrink: 0,
//   });


//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon /> },
//     { text: 'Customer', icon: <PersonIcon /> },
//     { text: 'Analytics', icon: <PaymentsIcon /> },
//     { text: 'Services', icon: <ServicesIcon /> },
//     { text: 'Payments', icon: <PaymentsIcon /> },
//     { text: 'Invoice', icon: <InvoiceIcon /> },
//     { text: 'Transactions', icon: <TransactionsIcon /> },
//     { text: 'Settings', icon: <SettingsIcon /> },
//     { text: 'Support & Feedback', icon: <FeedbackIcon /> },
//   ];

//   return (
//     <ThemeProvider theme={themes}>
//       <DrawerContainer>
//         <Drawer
//           variant='permanent'
//           anchor='left'
//           sx={{
//             width: '20%',
//             backgroundColor: "#292929",
//     color: "#292929",
//           }}
//         >
//           <List>
//             {menuItems.map(({ text, icon }, index) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{icon}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>
//       </DrawerContainer>
//     </ThemeProvider>
//   );
// };

// export default Sidebar;

// import React from 'react';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider } from '@mui/material';
// import DashboardIcon from '@mui/icons-material/Dashboard';
// import PersonIcon from '@mui/icons-material/Person';
// import ServicesIcon from '@mui/icons-material/RoomService';
// import PaymentsIcon from '@mui/icons-material/Payment';
// import InvoiceIcon from '@mui/icons-material/Description';
// import TransactionsIcon from '@mui/icons-material/AccountBalance';
// import SettingsIcon from '@mui/icons-material/Settings';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import { styled } from '@mui/material/styles';
// import themes from './Themes';

// const Sidebar = () => {
//   const DrawerContainer = styled('div')({
//     display: '-webkit-flex',
//     flexDirection: 'column',
//     width: '80%',
//     flexShrink: 0,
//   });

//   const DrawerPaper = styled(Drawer)({
//     width: '20%',
//     backgroundColor: "#1E90FF", // Set background color to blue
//     color: "#fff", // Set text color to white
//   });

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon /> },
//     { text: 'Customer', icon: <PersonIcon /> },
//     { text: 'Analytics', icon: <PaymentsIcon /> },
//     { text: 'Services', icon: <ServicesIcon /> },
//     { text: 'Payments', icon: <PaymentsIcon /> },
//     { text: 'Invoice', icon: <InvoiceIcon /> },
//     { text: 'Transactions', icon: <TransactionsIcon /> },
//     { text: 'Settings', icon: <SettingsIcon /> },
//     { text: 'Support & Feedback', icon: <FeedbackIcon /> },
//   ];

//   return (
//     <ThemeProvider theme={themes}>
//       <DrawerContainer>
//         <DrawerPaper variant='permanent' anchor='left'>
//           <List>
//             {menuItems.map(({ text, icon }) => (
//               <ListItem button key={text}>
//                 <ListItemIcon>{icon}</ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </DrawerPaper>
//       </DrawerContainer>
//     </ThemeProvider>
//   );
// };

// export default Sidebar;

import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ThemeProvider, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ServicesIcon from '@mui/icons-material/RoomService';
import PaymentsIcon from '@mui/icons-material/Payment';
import InvoiceIcon from '@mui/icons-material/Description';
import TransactionsIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { ThemeProvider as StyledThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import themes from './Themes';

const Sidebar = () => {
  const DrawerContainer = styled('div')({
    display: '-webkit-flex',
    flexDirection: 'column',
    width: '80%',
    flexShrink: 0,

  });

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Customer', icon: <PersonIcon /> },
    { text: 'Analytics', icon: <PaymentsIcon /> },
    { text: 'Services', icon: <ServicesIcon /> },
    { text: 'Payments', icon: <PaymentsIcon /> },
    { text: 'Invoice', icon: <InvoiceIcon /> },
    { text: 'Transactions', icon: <TransactionsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Support & Feedback', icon: <FeedbackIcon /> },
  ];

  const DrawerPaper = styled(Drawer)({
    '& .MuiDrawer-paper': {
      width: '20%',
      backgroundColor: "#4D4DFF", // Set background color to a dark color
      color: "#fff", // Set text color to a dark color
    },
  });

  return (
    <ThemeProvider theme={themes}>
      <StyledThemeProvider theme={themes}>
        <DrawerContainer>
          <DrawerPaper variant='permanent' anchor='left'>
            <List>
              {menuItems.map(({ text, icon }) => (
                <ListItem button key={text}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>
                    <Typography variant="inherit" style={{ fontSize: '1rem' }}>
                      {text}
                    </Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </DrawerPaper>
        </DrawerContainer>
      </StyledThemeProvider>
    </ThemeProvider>
  );
};

export default Sidebar;

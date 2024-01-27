// import React from 'react';
// import { styled, ThemeProvider } from '@mui/system';
// import themes from './Themes';

// // Styled components for custom styling
// const HeaderContainer = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: themes.spacing(2),
//   backgroundColor: themes.palette.primary.main,
//   color: themes.palette.common.black,
//   marginRight:'20%'
// });

// const HeaderTitle = styled('div')({
//   fontSize: '2rem',
//   fontWeight: 'bold',
//   marginLeft: '20%',
// });

// const HeaderImage = styled('img')({
//   borderRadius: '50%',
//   marginRight: themes.spacing(2),
// });



// const Header = () => {
//   return (
//     <ThemeProvider theme={themes}>
//       <HeaderContainer>
//           <HeaderImage src="https://via.placeholder.com/150" alt="Mia James" className="header-image" />
//             <HeaderTitle>Good Morning Mia!!!</HeaderTitle>
//             <HeaderTitle>admin</HeaderTitle>
        
//       </HeaderContainer>
//     </ThemeProvider>
//   );
// };

// export default Header;

// import React from 'react';
// import { styled, ThemeProvider } from '@mui/system';
// import themes from './Themes';
// import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// // Styled components for custom styling
// const HeaderContainer = styled('div')({
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: themes.spacing(2),
//   backgroundColor: themes.palette.primary.main,
//   color: themes.palette.common.black,
// });

// const LeftSide = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   marginLeft:'20%'
// });

// const RightSide = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
// });

// const HeaderTitle = styled('div')({
//   fontSize: '1.5rem',
//   fontWeight: 'bold',
//   color:themes.palette.common.black
// });

// const UserInfo = styled('div')({
//   display: 'flex',
//   alignItems: 'center',
//   marginLeft: themes.spacing(2),
// });

// const UserName = styled('div')({
//   marginRight: themes.spacing(1),
// });

// const AdminInfo = styled('div')({
//   fontSize: '0.8rem',
//   color: themes.palette.common.black,
//   alignItems:'center'
  
// });

// const BellIcon = styled(NotificationsIcon)({
//   color: themes.palette.common.black
// });

// const ArrowDownIcon = styled(ArrowDropDownIcon)({
//   color: themes.palette.common.black
// });

// const Header = () => {
//   return (
//     <ThemeProvider theme={themes}>
//       <HeaderContainer>
//         <LeftSide>
//           <HeaderTitle>Good Morning, Mia!</HeaderTitle>
//         </LeftSide>
//         <RightSide>
//         <IconButton color="inherit">
//             <BellIcon />
//           </IconButton>
//           <UserInfo>
//           <Avatar alt="Dummy Profile" src="https://via.placeholder.com/150"/>
//             <UserName>Mia James</UserName>
//           </UserInfo>
         
//           <IconButton color="inherit">
//             <ArrowDownIcon />
//           </IconButton>
//           <AdminInfo>Admin</AdminInfo>
//         </RightSide>
//       </HeaderContainer>
//     </ThemeProvider>
//   );
// };

// export default Header;


import React from 'react';
import { styled, ThemeProvider } from '@mui/system';
import themes from './Themes';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Styled components for custom styling
const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: themes.spacing(2),
  backgroundColor: "#fff",
  color: themes.palette.common.black,
  borderBottom: '1px solid #ddd',
});

const LeftSide = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '20%',
});

const RightSide = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

const HeaderTitle = styled('div')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: themes.palette.common.black,
});

const UserInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column', // Display items in a column
  alignItems: 'center',
  marginLeft: themes.spacing(2),
});

const UserName = styled('div')({
  fontWeight:'bold',
  marginTop: themes.spacing(1), // Added space between Avatar and UserName
});

const AdminInfo = styled('div')({
  fontSize: '0.8rem',
  color: themes.palette.common.black,
  marginTop: themes.spacing(1), // Added space between UserName and AdminInfo
});

const BellIcon = styled(NotificationsIcon)({
  color: themes.palette.common.black,
});

const ArrowDownIcon = styled(ArrowDropDownIcon)({
  color: themes.palette.common.black,
});

const Header = () => {
  return (
    <ThemeProvider theme={themes}>
      <HeaderContainer>
        <LeftSide>
          <HeaderTitle>Good Morning, Mia!</HeaderTitle>
        </LeftSide>
        <RightSide>
          <IconButton color="inherit">
            <BellIcon />
          </IconButton>
          <UserInfo>
            <Avatar alt="Dummy Profile" src="https://via.placeholder.com/150" />
            <UserName>Mia James</UserName>
            <AdminInfo>Admin</AdminInfo>
          </UserInfo>
          <IconButton color="inherit">
            <ArrowDownIcon />
          </IconButton>
        </RightSide>
      </HeaderContainer>
    </ThemeProvider>
  );
};

export default Header;

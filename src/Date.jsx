import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import { styled } from '@mui/system';
import themes from './Themes';

const HeaderContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: themes.spacing(2),
  backgroundColor: "#fff",
  color: themes.palette.common.black,
  // Add a light dark line at the bottom
  width: '100%', // Set the width to 100%
  marginLeft:'20%'
});

const HeaderDateContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginRight: '20%',
  width: '40%',
  fontSize: '1rem',
});

const DateIcon = styled(EventIcon)({
  marginRight: themes.spacing(1),
});

const FormattedDate = styled('div')({
  whiteSpace: 'nowrap', // Prevent the text from breaking into multiple lines
});

const formatDate = (date) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options).toUpperCase();
};

const Time = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  return (
    <HeaderContainer>
      <HeaderDateContainer>
        <DateIcon />
        <FormattedDate>Last Updated: {formattedDate}</FormattedDate>
      </HeaderDateContainer>
    </HeaderContainer>
  );
};

export default Time;

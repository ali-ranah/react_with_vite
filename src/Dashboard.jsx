import themes from './Themes';
import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Time from './Date';

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    { id: 1, color: 'green', title: 'Lorem ipsum...', text: 'Lorem ipsum...', progress: 74 },
    { id: 2, color: 'yellow', title: 'Lorem ipsum...', text: 'Lorem ipsum...', progress: 54 },
    { id: 3, color: 'red', title: 'Lorem ipsum...', text: 'Lorem ipsum...', progress: 88 },
    { id: 4, color: 'blue', title: 'Lorem ipsum...', text: 'Lorem ipsum...', progress: 33 },
  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <Container fluid>
      <Row style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', marginRight: '40%', fontSize: '20px', fontWeight: 'bold', color: '#202020', marginTop: '1%' }}>
          <Time />
        </div>
        <div style={{ position: 'absolute', marginRight: '40%', fontSize: '20px', fontWeight: 'bold', color: '#202020', marginTop: '8%' }}>
          Dashboard
        </div>
        {cards.map((card, index) => (
          <Col
            key={card.id}
            style={{
              marginTop: '10%',
              marginBottom: '15px',
              marginRight: index < cards.length - 1 ? '15px' : '0',
              maxWidth: '200px',
              flex: '1', // Make each column take equal space
              minWidth: '200px', // Set a minimum width for each column
              '@media (max-width: 768px)': {
                maxWidth: '100%', // Adjust styling for smaller screens
              },
            }}
          >
            <Card
              onMouseEnter={() => handleMouseEnter(card.id)}
              onMouseLeave={handleMouseLeave}
              style={{
                backgroundColor: card.color,
                borderRadius: '10px',
                marginLeft: '60%',
                height: '50%',
                width: '80%',
                color: '#fff',
                marginTop: '20%',
                boxShadow: hoveredCard === card.id ? '0px 8px 16px rgba(0, 0, 0, 0.2)' : '0px 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <div style={{ whiteSpace: 'nowrap' }}>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </div>
              <div
                style={{
                  width: '35%',
                  height: '45px',
                  borderRadius: '35%',
                  background: 'rgba(255, 255, 255, 0.8)',
                  display: '-webkit-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#202020' }}>+{card.progress}%</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;

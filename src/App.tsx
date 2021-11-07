/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import {
  Route, Link, Routes,
} from 'react-router-dom';
import {
  Box,
  Button,
  Grommet,
  ResponsiveContext,
  Header,
  Menu,
  Heading,
} from 'grommet';
import { Home } from 'grommet-icons';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient/client';
import { ListOfCustomers, ListOfOrders } from './Lists';

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class App extends React.Component {
  render() {
    return (
      <Grommet theme={theme} full>
        <ApolloProvider client={client}>
          <ResponsiveContext.Consumer>
            {() => (
              <Box fill>
                <Header background="brand">
                  <Box direction="row">
                    <Link to="/"><Button icon={<Home />} hoverIndicator /></Link>
                  </Box>
                  <Routes>
                    <Route path="/" element={<Heading level="3" margin="none">List of customers</Heading>} />
                    <Route path="orders" element={<Heading level="3" margin="none">List of orders</Heading>} />
                  </Routes>
                  <Menu label="account" items={[{ label: 'logout' }]} />
                </Header>
                <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                  <Box flex align="center" justify="start">
                    <Routes>
                      <Route path="/" element={<ListOfCustomers />} />
                      <Route path="orders" element={<ListOfOrders />} />
                    </Routes>
                  </Box>
                </Box>
              </Box>
            )}
          </ResponsiveContext.Consumer>
        </ApolloProvider>
      </Grommet>
    );
  }
}

export default App;

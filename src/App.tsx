import {
  Link,
  Route, Routes,
} from 'react-router-dom';
import {
  Box,
  Grommet,
  ResponsiveContext,
} from 'grommet';
import { Home } from 'grommet-icons';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient/client';
import { ListOfOrders } from './ListOfOrders';
import { ListOfCustomers } from './ListOfCustomers';
import './App.css';
import { AppHeader } from './AppHeader';

const theme = {
  global: {
    colors: {
      brand: '#bb454e',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

const App = (): JSX.Element => {
  return (
    <Grommet theme={theme} full>
      <ApolloProvider client={client}>
        <ResponsiveContext.Consumer>
          {() => (
            <Box fill>
              <AppHeader
                appName="Customer's sheet"
                appIcon={<Link to="/"><Home /></Link>}
              />
              <Box flex margin={{ horizontal: 'large' }} overflow={{ horizontal: 'hidden' }} align="center" justify="start" className="main">
                <Routes>
                  <Route path="/" element={<ListOfCustomers />} />
                  <Route path="orders" element={<ListOfOrders />} />
                </Routes>
              </Box>
            </Box>
          )}
        </ResponsiveContext.Consumer>
      </ApolloProvider>
    </Grommet >
  );
};

export default App;

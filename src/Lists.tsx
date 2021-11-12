import {
  Table, TableHeader, TableRow, TableCell, TableBody,
  Spinner, Box, Avatar,
  CardHeader, CardBody, Card, Text,
} from 'grommet';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import './Lists.css';
import { User } from 'grommet-icons';

const CLIENT_LIST = gql`
query GetClientList {
  client_list {
    id
    client_name
    date_of_birth
    vip
    orders_aggregate {
      aggregate {
        count
      }
    }
  }
}
`;

interface OrdersList {
  'client_id': number,
  'id': number,
  'order_date': string,
  'price': string,
  'sum_of_products': number
}

interface ClientsList {
  'id': number,
  'client_name': string,
  'date_of_birth': string,
  'vip': boolean,
  'orders'?: Array<OrdersList>,
  'orders_aggregate': {
    'aggregate': {
      'count': number,
      'sum'?: {
        'price': string,
        'sum_of_products': number
      }
    }
  }
}

interface CustomersList {
  'client_list': Array<ClientsList>
}

const vipEl = (con: boolean) =>{
  if (con) {
    return <Text style={{ fontWeight: 'bold' }}>VIP</Text>;
  }
};


function getFormattedDate(stringDate: string): string {
  const date = new Date(stringDate);
  return date.toLocaleDateString().toString();
}

function ListOfCustomers(): React.ReactElement {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<CustomersList>(CLIENT_LIST);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <Table className="mainTable" alignSelf="stretch">
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Client ID
          </TableCell>
          <TableCell scope="col" border="bottom">
            Customer
          </TableCell>
          <TableCell scope="col" border="bottom">
            Date of birth
          </TableCell>
          <TableCell scope="col" border="bottom">
            Vip
          </TableCell>
          <TableCell scope="col" border="bottom">
            Sum of orders
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.client_list.map(({
          id, client_name, date_of_birth, vip, orders_aggregate,
        }) => (
          <TableRow
            key={id}
            style={{ cursor: 'pointer' }}
            className="mainTableRow"
            onClick={() => {
              navigate(`/orders?id=${id}`);
            }}
          >
            <TableCell scope="row">
              {id}
            </TableCell>
            <TableCell scope="row">
              <strong>{client_name}</strong>
            </TableCell>
            <TableCell>{getFormattedDate(date_of_birth)}</TableCell>
            <TableCell>{vip ? '✅' : '❌'}</TableCell>
            <TableCell>{orders_aggregate.aggregate.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ListOfOrders(): React.ReactElement {
  const paramValue = new URLSearchParams(window.location.search).get('id');
  const ORDER_LIST = gql`
  query GetOrderList {
    client_list(where: {id: {_eq: ${paramValue}}}) {
      client_name
      date_of_birth
      id
      vip
      orders {
        client_id
        id
        order_date
        price
        sum_of_products
      }
      orders_aggregate {
        aggregate {
          count
          sum {
            price
            sum_of_products
          }
        }
      }
    }
  }
`;

  const { data, loading, error } = useQuery<CustomersList>(ORDER_LIST);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const client = data.client_list[0];
  const clientDyn = data.client_list[0].orders_aggregate.aggregate;
  return (
    <Box gap="medium" alignSelf="stretch" justify="between">
      <Card direction="row" margin="small" background="light-1">
        <CardHeader pad="small" justify="start">
          <Avatar background="accent-4">
            <User />
          </Avatar>
          <Text alignSelf="center">{client.client_name}</Text>{vipEl(client.vip)}
        </CardHeader>
        <CardBody pad="small" direction="row">
          <Text alignSelf="center" margin="small">
            {`Id: ${client.id}`}
          </Text>
          <Text alignSelf="center" margin="small">
            {`Date of birth: ${getFormattedDate(client.date_of_birth)}`}
          </Text>
          <Text alignSelf="center" margin="small">
            {`Orders: ${clientDyn.count}`}
          </Text>
          <Text alignSelf="center" margin="small">
            {`Products: ${clientDyn.sum.sum_of_products}`}
          </Text>
          <Text alignSelf="center" margin="small">
            {`Lifetime spendings: ${clientDyn.sum.price}`}
          </Text>

        </CardBody>
      </Card>
      <Table className="mainTable" alignSelf="stretch">
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              ID
            </TableCell>
            <TableCell scope="col" border="bottom">
              Date of order
            </TableCell>
            <TableCell scope="col" border="bottom">
              Price
            </TableCell>
            <TableCell scope="col" border="bottom">
              Products
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.client_list[0].orders.map(({
            id, order_date, price, sum_of_products,
          }) => (
            <TableRow
              key={id}
              className="mainTableRow"
            >
              <TableCell scope="row">
                {id}
              </TableCell>
              <TableCell scope="row">
                <strong>{getFormattedDate(order_date)}</strong>
              </TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>{sum_of_products}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export { ListOfCustomers, ListOfOrders };

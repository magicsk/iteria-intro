import {
  Table, TableHeader, TableRow, TableCell, TableBody,
  Spinner, Box, Avatar,
  CardHeader, CardBody, Card, Text,
} from 'grommet';
import { useQuery } from '@apollo/client';
import './Lists.css';
import { User } from 'grommet-icons';
import { ORDER_LIST } from './ApolloClient/queries';
import { CustomersList } from './models/CustomersList';
import { getFormattedDate } from './util/getFormattedDate';
import { getColumnString } from './util/getColumnString';

const vipEl = (con: boolean) => {
  if (con) {
    return <Text style={{ fontWeight: 'bold' }}> VIP </Text>;
  }
};

export function ListOfOrders(): React.ReactElement {
  const paramValue = new URLSearchParams(window.location.search).get('id');

  const { data, loading, error } = useQuery<CustomersList>(ORDER_LIST(paramValue));

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const client = data.client_list[0];
  const clientDyn = data.client_list[0].orders_aggregate.aggregate;
  const columns = Object.keys(data.client_list[0].orders[0]);
  columns.pop();
  columns.shift();

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
          {columns.map(column => (
            <TableCell key={column} scope="col" border="bottom">
              {getColumnString(column)}
            </TableCell>
          ))}
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

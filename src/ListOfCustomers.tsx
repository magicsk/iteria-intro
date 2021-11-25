import {
  Table, TableHeader, TableRow, TableCell, TableBody,
  Spinner, Text,
} from 'grommet';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import './Lists.css';
import { CLIENT_LIST } from './ApolloClient/queries';
import { CustomersList } from './models/CustomersList';
import { getFormattedDate } from './util/getFormattedDate';
import { getColumnString } from './util/getColumnString';

export function ListOfCustomers(): React.ReactElement {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery<CustomersList>(CLIENT_LIST);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const columns = Object.keys(data.client_list[0]);
  columns.pop();

  return (
    <Table className="mainTable" alignSelf="stretch">
      {console.log(columns)}
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
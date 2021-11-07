import {
  Table, TableHeader, TableRow, TableCell, TableBody,
} from 'grommet';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import './Lists.css';

const CLIENT_LIST = gql`
  query GetClientList {
    client_list {
      id
      client_name
      date_of_birth
      vip
      sum_of_orders
    }
  }
`;

function getFormattedDate(stringDate: string): string {
  const date = new Date(stringDate);
  return date.toLocaleDateString().toString();
}

function ListOfCustomers(): React.ReactElement<{}> {
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(CLIENT_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table className="mainTable" alignSelf="stretch">
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Id
          </TableCell>
          <TableCell scope="col" border="bottom">
            Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Date of birth
          </TableCell>
          <TableCell scope="col" border="bottom">
            Vip status
          </TableCell>
          <TableCell scope="col" border="bottom">
            Sum of orders
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.client_list.map(({
          id, client_name, date_of_birth, vip, sum_of_orders,
        }) => (
          <TableRow
            key={id}
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
            <TableCell>{date_of_birth}</TableCell>
            <TableCell>{vip ? 'valid' : 'invalid'}</TableCell>
            <TableCell>{sum_of_orders}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function ListOfOrders(): React.ReactElement<{}> {
  const paramValue = new URLSearchParams(window.location.search).get('id');
  const ORDER_LIST = gql`
  query GetOrderList {
    orders_list(where: {client_id: {_eq: ${paramValue}}}) {
      id
      order_date
      price
      sum_of_products
    }
  }
`;

  const { data, loading, error } = useQuery(ORDER_LIST);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Table className="mainTable" alignSelf="stretch">
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Id
          </TableCell>
          <TableCell scope="col" border="bottom">
            Date of order
          </TableCell>
          <TableCell scope="col" border="bottom">
            Price
          </TableCell>
          <TableCell scope="col" border="bottom">
            Sum of products
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.orders_list.map(({
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
  );
}

export { ListOfCustomers, ListOfOrders };

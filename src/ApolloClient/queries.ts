import { DocumentNode, gql } from '@apollo/client';

export const CLIENT_LIST = gql`
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

export const ORDER_LIST = (paramValue: string): DocumentNode => {
  return gql`
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
};

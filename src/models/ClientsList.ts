import { OrdersList } from './OrdersList';

export interface ClientsList {
  id: number,
  client_name: string,
  date_of_birth: string,
  vip: boolean,
  orders?: Array<OrdersList>,
  orders_aggregate: {
    aggregate: {
      count: number,
      sum?: {
        price: string,
        sum_of_products: number
      }
    }
  }
}
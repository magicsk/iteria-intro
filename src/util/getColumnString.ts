export function getColumnString(input: string): string {
  switch (input) {
    case 'id':
      return 'ID';
      break;

    case 'client_name':
      return 'Customer';
      break;

    case 'date_of_birth':
      return 'Date of birth';
      break;

    case 'vip':
      return 'Vip';
      break;

    case 'orders_aggregate':
      return 'Sum of orders';
      break;

    case 'order_date':
      return 'Date of order';
      break;

    case 'price':
      return 'Sum of orders';
      break;

    case 'sum_of_products':
      return 'Sum of orders';
      break;

    default:
      return input;
      break;
  }
}

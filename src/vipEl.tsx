import { Text } from 'grommet';

export const vipEl = (con: boolean): JSX.Element => {
  if (con) {
    return <Text style={{ fontWeight: 'bold' }}> VIP </Text>;
  }
};
import UpdateItem from '../components/UpdateItem';
import { DefaultQuery } from 'next/router';

interface SellProps {
  query: DefaultQuery
}

const Sell = (props: SellProps) => (
  <div>
    <UpdateItem id={props.query.id} />
  </div>
);

export default Sell;

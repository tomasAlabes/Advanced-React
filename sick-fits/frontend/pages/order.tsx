import PleaseSignIn from '../components/PleaseSignIn';
import Order from '../components/Order';
import { DefaultQuery } from 'next/router';

interface OrderPageProps {
  query: DefaultQuery
}

const OrderPage = (props: OrderPageProps) => (
  <div>
    <PleaseSignIn>
      <Order id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default OrderPage;

import Items from '../components/Items';
import { DefaultQuery } from 'next/router';

interface HomeProps {
  query: DefaultQuery
}

const Home = (props: HomeProps) => (
  <div>
    <Items page={parseFloat(props.query.page) || 1} />
  </div>
);

export default Home;

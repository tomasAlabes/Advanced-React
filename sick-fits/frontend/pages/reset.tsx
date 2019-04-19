import Reset from '../components/Reset';
import { DefaultQuery } from 'next/router';

interface ResetPageProps {
  query: DefaultQuery
}

const ResetPage = (props: ResetPageProps) => (
  <div>
    <p>Reset Your Password {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default ResetPage;

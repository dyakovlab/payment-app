import {FC} from 'react';
import {ILoginFormProps} from './types';

const LoginForm: FC<ILoginFormProps> = ({loginHandle}) => {
  return (
    <form onSubmit={loginHandle}>
      <input name="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

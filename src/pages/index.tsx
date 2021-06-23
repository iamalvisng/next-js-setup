import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStateReducer } from '../hooks';
import { decrement, increment } from '../redux/counter';
import { selectCounterValue } from '../redux/counter/selectors';
import useAuth from '../services/useAuth';
import { prefetch } from '../services/usePokemon';
import { Button } from '../styles/styled-components/Button';
import LoginForm from '../components/LoginForm';

type TForm = { email: string; password: string };

export default function Home() {
  const dispatch = useDispatch();
  const counterValue = useSelector(selectCounterValue);
  const [name] = useState<string>('pikachu');
  const [shouldAuth] = useState(false);
  const [form] = useStateReducer<TForm>({
    email: '',
    password: '',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { auth } = useAuth(shouldAuth, 'loginweb', {
    email: form.email,
    password: form.password,
  });

  const onIncrease = () => {
    dispatch(increment());
  };
  const onDecrease = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Head>
        <title>Welcome</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="bg-white dark:bg-gray-800 flex justify-center p-8">
        <div className="container">
          <div>
            <h1 className="text-white text-7xl font-bold">Hello world!</h1>
          </div>

          <div className="my-8">
            <div className="text-center text-5xl font-bold text-pink-500">{counterValue}</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button onClick={onIncrease}>Increment</Button>
            <Button onClick={onDecrease}>Decrement</Button>
          </div>

          <div className="flex justify-center my-8">
            <Link passHref href={`/pokemon?name=${name}`}>
              <Button onMouseOver={() => prefetch(name)}>View Details</Button>
            </Link>
          </div>
        </div>
      </section>

      <LoginForm />
    </div>
  );
}

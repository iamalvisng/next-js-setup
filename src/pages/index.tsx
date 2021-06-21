import Head from 'next/head';
import Header from '../components/Header';
import { ButtonSecondary, Button } from '../styles/styled-components/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">Be Warned, you are using talwind now!</p>
        <Header />
      </div>

      <div>
        <Button>Get started</Button>
        <ButtonSecondary>Secondary button</ButtonSecondary>
      </div>
    </div>
  );
}

import { useState } from 'react';
import Button from '../components/Button';
import LogInForm from '../components/LogInForm';
import { Link } from 'react-router-dom';

function LogInPage() {
  const [paths, setPaths] = useState('/login');

  return (
    <div className="px-5 py-8 h-screen relative flex flex-col">
      <h1 className="typography-title">Welcome to Cine-Scape</h1>
      <p className="typography-body pt-3 pb-5">
        You need to log in to be able to make reservations and add movies to
        your watchlist.
      </p>
      <LogInForm></LogInForm>
      <div className='flex-auto'></div>
      <Link to="/" className=" w-full">
        <Button className="typography-primary">Login</Button>
      </Link>
    </div>
  );
}

export default LogInPage;

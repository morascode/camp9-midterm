import React, { useEffect, useState } from 'react';
import SingleInputFieldLogIn from './SingleInputField';
import { LoginUser } from '../utilities/types';
import Button from './Button';
import { useLoginMutation } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { is } from 'date-fns/locale';

type LogInForm = React.FormHTMLAttributes<HTMLFormElement>;

function LogInForm() {
  const [inputValues, setInputValues] = useState<LoginUser>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { mutate, isSuccess } = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate('/');
    }
  }, [isSuccess]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate(inputValues);
  }

  return (
    <>
      <form
        action=""
        onSubmit={e => handleSubmit(e)}
        noValidate
        className="flex flex-col gap-5"
      >
        <SingleInputFieldLogIn
          svg="email"
          placeholder="E-mail"
          type="text"
          id="email"
          inputValue={inputValues.email}
          setInputValue={e =>
            setInputValues({ ...inputValues, email: e.target.value })
          }
        ></SingleInputFieldLogIn>
        <SingleInputFieldLogIn
          svg="key"
          placeholder="Password"
          type="password"
          id="password"
          inputValue={inputValues.password}
          setInputValue={e =>
            setInputValues({ ...inputValues, password: e.target.value })
          }
        ></SingleInputFieldLogIn>
        <Button type="submit" size="md">
          Log In
        </Button>
      </form>
    </>
  );
}

export default LogInForm;

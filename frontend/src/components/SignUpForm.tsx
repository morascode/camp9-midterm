import React from 'react';
import Checkbox from './Checkbox';
import SingleInputField from './SingleInputField';
import { useState } from 'react';
import Radio from './Radio';
import Button from './Button';
import { useSignupMutation } from '../hooks/useUser';
import { SignupUser } from '../utilities/types';

type SignUpForm = React.FormHTMLAttributes<HTMLFormElement>;

function SignUpForm() {
  const [inputValues, setInputValues] = useState<SignupUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { isLoading, isError, data, error, mutate } = useSignupMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutate(inputValues);
  }

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      noValidate
      className="flex flex-col gap-5"
    >
      <SingleInputField
        svg="name"
        placeholder="First name"
        type="text"
        id="firstname"
        inputValue={inputValues.firstName}
        setInputValue={e =>
          setInputValues({ ...inputValues, firstName: e.target.value })
        }
      ></SingleInputField>
      <SingleInputField
        placeholder={'Last name'}
        svg={'name'}
        type="text"
        id="lastname"
        inputValue={inputValues.lastName}
        setInputValue={e =>
          setInputValues({ ...inputValues, lastName: e.target.value })
        }
      ></SingleInputField>
      <SingleInputField
        placeholder={'your@email.com'}
        svg="email"
        type="email"
        id="email"
        inputValue={inputValues.email}
        setInputValue={e =>
          setInputValues({ ...inputValues, email: e.target.value })
        }
      ></SingleInputField>

      <SingleInputField
        placeholder={'Password'}
        svg="key"
        type="password"
        id="password"
        inputValue={inputValues.password}
        setInputValue={e =>
          setInputValues({ ...inputValues, password: e.target.value })
        }
      ></SingleInputField>
      <SingleInputField
        placeholder={'Repeat your password'}
        svg="key"
        type="password"
        id="confirmPassword"
        inputValue={inputValues.confirmPassword}
        setInputValue={e =>
          setInputValues({ ...inputValues, confirmPassword: e.target.value })
        }
      ></SingleInputField>

      <Button type="submit" size="md">
        Sign Up
      </Button>
    </form>
  );
}

export default SignUpForm;

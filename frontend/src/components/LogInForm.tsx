import React, { useEffect, useState } from 'react';
import SingleInputFieldLogIn from './SingleInputField';
import { LoginUser, loginSchema } from '../utilities/types';
import Button from './Button';
import { useLoginMutation } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import UseAnimations from 'react-useanimations';
import loading from 'react-useanimations/lib/loading';
import Cookies from 'js-cookie';
import { useQueryClient } from '@tanstack/react-query';

type LogInForm = React.FormHTMLAttributes<HTMLFormElement>;

function LogInForm() {
  const { mutate, isLoading, isError, isSuccess } = useLoginMutation();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  // instead of two way dataBinding use the useForms hook.
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUser>({
    resolver: zodResolver(loginSchema),
  });

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return (
      <div className="flex gap-2 items-end">
        <UseAnimations
          animation={loading}
          strokeColor="rgba(255, 255, 255, 0.4)"
        />
        <h4 className="typography-title text-white-dimmed">Loading.....</h4>
      </div>
    );
  }

  const onSubmit = (data: LoginUser) => {
    mutate(data);
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-5"
      >
        <SingleInputFieldLogIn
          error={errors.email}
          svg="email"
          placeholder="E-mail"
          type="text"
          id="email"
          {...register('email')}
        />

        <SingleInputFieldLogIn
          error={errors.password}
          svg="key"
          placeholder="Password"
          type="password"
          id="password"
          {...register('password')}
        />
        <Button type="submit" size="md">
          Log In
        </Button>
      </form>
      <div className="flex gap-2 w-full items-center py-6">
        <div className="border-white-dimmed-heavy border-b flex-1 h-0"></div>
        <div className="typography-body">or</div>
        <div className="border-white-dimmed-heavy border-b flex-1"></div>
      </div>
      <Button
        variant="secondary"
        size="md"
        onClick={() => {
          Cookies.set('guest', 'true');
          queryClient.invalidateQueries(['checkAuth']);
          navigate('/');
        }}
      >
        Proceed as guest
      </Button>
    </>
  );
}

export default LogInForm;

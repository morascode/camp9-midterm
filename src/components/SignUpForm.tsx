import React from 'react';
import Checkbox from './Checkbox';
import SingleInputFieldLogIn from './SingleInputFieldLogIn';
import { useState } from 'react';
import Radio from './Radio';

type SignUpForm = React.FormHTMLAttributes<HTMLFormElement>;

function SignUpForm() {
  const [selectedOption, setSelectedOption] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <form action="" onSubmit={() => {}}>
        <SingleInputFieldLogIn
          placeholder={'your@email.com'}
          svg={'email'}
          type="email"
        ></SingleInputFieldLogIn>

        <SingleInputFieldLogIn
          placeholder={'Enter your Password'}
          svg={'key'}
          type="password"
        ></SingleInputFieldLogIn>
        <div className=" flex flex-row justify-around">
          <div className="flex flex-col">
            <Radio
              name="age"
              label="I'm over 18"
              value="adult"
              checked={false}
              onChange={handleRadioChange}
            ></Radio>
            <Radio
              name="age"
              label="I'm not over 18"
              value="child"
              checked={false}
              onChange={handleRadioChange}
            ></Radio>
          </div>
          <Checkbox
            label="student"
            name="student"
            checked={false}
            onChange={handleCheckboxChange}
          ></Checkbox>
        </div>
      </form>
    </>
  );
}

export default SignUpForm;

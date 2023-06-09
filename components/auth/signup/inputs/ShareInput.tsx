'use client';

import {
  EmailSelectorContext,
  PhoneSelectorContext,
} from '@/context/selectorContext';
import { cls } from '@/utils/cls';
import { useContext } from 'react';
import { InputProps } from '../types';

const ShareInput = ({
  htmlFor,
  placeholder,
  maxLength,
  type = 'text',
  width,
  register,
}: InputProps) => {
  const { setIsPhoneActive } = useContext(PhoneSelectorContext);
  const { setIsEmailActive } = useContext(EmailSelectorContext);

  const closeSelectorBoard = () => {
    setIsPhoneActive(false);
    setIsEmailActive(false);
  };
  return (
    <input
      onClick={closeSelectorBoard}
      {...register}
      className={cls(
        'px-2 py-[2px] rounded-md bg-transparent border-2 border-gray-200 text-gray-400',
        width ? width : 'w-full'
      )}
      type={type}
      id={htmlFor}
      placeholder={placeholder}
      maxLength={maxLength}
      autoComplete={type === 'password' ? 'current-password' : 'on'}
    />
  );
};

export default ShareInput;

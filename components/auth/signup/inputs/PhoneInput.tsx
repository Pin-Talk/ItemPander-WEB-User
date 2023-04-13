'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ShareInput from './ShareInput';
import Selector from '@/components/selector/Selector';
import { phoneNumbers } from '@/data/signupBoard';

const PhoneInput = () => {
  const [phoneValue, setPhoneValue] = useState('010');
  const { register } = useFormContext();
  return (
    <div>
      <label className='inline-block mb-1 font-bold' htmlFor='phone'>
        휴대폰
      </label>
      <div className='flex items-center space-x-4'>
        <Selector
          boardItems={phoneNumbers}
          value={phoneValue}
          setValue={setPhoneValue}
          width='w-48'
          height='h-28'
        />
        <span>-</span>
        <ShareInput
          placeholder='앞 번호'
          maxLength={4}
          register={register('phone1')}
        />
        <span>-</span>
        <ShareInput
          register={register('phone2')}
          placeholder='뒷 번호'
          maxLength={4}
        />
      </div>
    </div>
  );
};
export default PhoneInput;

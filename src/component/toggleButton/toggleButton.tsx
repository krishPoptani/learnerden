import React, { FC } from 'react';
import clsx from 'clsx';

type ToggleButtonProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const ToggleButton: FC<ToggleButtonProps> = ({ checked, onChange }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={clsx(
        'w-11 h-6 flex items-center rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none',
        checked
          ? 'bg-gradient-to-r from-[#3E4FBB] to-[#C32E6B]'
          : 'bg-[#C1C1C1] border border-[#A0A0A0]'
      )}
    >
      <div
        className={clsx(
          'bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ease-in-out',
          checked ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  );
};

export default ToggleButton;

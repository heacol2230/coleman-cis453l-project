import React from "react";

const SubscriptionOption = ({ 
    title, 
    content,
    subTitle,
    id,
    onChange,
    checked
}) => {

  return (
    <div className="flex items-center justify-between my-2">
      <div className="max-w-[200px] mr-[64px]">
        {title && <p className="text-[#E76405] font-bold">{title}</p>}
        <p className="text-[#E76405]">
          {content}
        </p>
        {subTitle && <p className="text-[#E76405] font-bold">{subTitle}</p>}
      </div>
      <div className="mr-4 flex gap-2">
        <input
          type="radio"
          id={id}
          name="subscription"
          checked={checked}
          onChange={() => onChange(id)}
        />
        <label htmlFor={id}>
          {checked && (
            <svg
              className="w-4 h-4 stroke-[#ff4000] mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          )}
        </label>
      </div>
    </div>
  );
};

export default SubscriptionOption;

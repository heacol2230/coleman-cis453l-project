const SubscriptionOption = ({ 
    title, 
    content,
    subTitle 
}) => {
  return (
    <div className="flex items-center justify-between my-2">
      <div className="max-w-[200px] mr-[64px]">
        { title && <p className="text-[#E76405] font-bold">{ title }</p> }
        <p className="text-[#E76405]">
          { content }
        </p>
        { subTitle && <p className="text-[#E76405] font-bold">{ subTitle }</p> }
      </div>
      <div className="mr-4 flex gap-2">
        <input
          class="relative float-left -ms-[1.5rem] me-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-[#FFF200] before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio"
          name="flexRadioDefault"
          id="radioDefault01"
        />
        <svg
          className="absolute w-4 h-4 pointer-events-none hidden peer-checked:block stroke-[#ff4000] mt-1 outline-none"
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
      </div>
    </div>
  );
};

export default SubscriptionOption;

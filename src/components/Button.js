const Button = ({
    text
}) => {
  return (
    <button className="text-[#ff4000] bg-[#FFF200] rounded-xl py-2.5 px-3.5 w-[280px] font-bold">
        { text }
    </button>
  );
};

export default Button;

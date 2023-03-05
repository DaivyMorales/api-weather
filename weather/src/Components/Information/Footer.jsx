const Footer = () => {
  return (
    <div className="gap-x-2 flex items-center">
      <div className="border 2 border-purple-300 rounded-full">
        <img
          className="w-8 h-8 rounded-full  "
          src="../../public/Emojis/yo.jpg"
        />
      </div>
      <span className="font-bold text-xs text-purple-400  py-2 px-2 bg-gray-200 rounded-r-2xl rounded-bl-2xl">
        Developed by Daivy
      </span>
    </div>
  );
};

export default Footer;

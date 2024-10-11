
const Loader = () => {
    return (
        <div id="preloader" className="fixed inset-0 w-full h-full bg-[#222] flex justify-center items-center">
        <div id="loader" className="relative w-[150px] h-[150px] rounded-full border-[3px] border-transparent border-t-[#9370DB] animate-spin">
          <div className="absolute inset-[5px] rounded-full border-[3px] border-transparent border-t-[#BA55D3] animate-spinMedium"></div>
          <div className="absolute inset-[15px] rounded-full border-[3px] border-transparent border-t-[#FF00FF] animate-spinFast"></div>
        </div>
      </div>
    );
  };
  
  export default Loader;
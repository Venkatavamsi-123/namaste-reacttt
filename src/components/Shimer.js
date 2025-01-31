const Shimer = () => {
    return (
      <div className="shimer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(20).fill("").map((_, index) => (
          <div
            key={index}
            className="shimer-card bg-gray-200 rounded-md p-4 h-48 animate-pulse"
          ></div>
        ))}
      </div>
    );
  };
  
  export default Shimer;
  

     {/* 





You said:
const Shimer=()=>{
    return(
        <div className="shimer-container">
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>
            <div className="shimer-cards"></div>

        </div>
    );
};
export default Shimer; */}
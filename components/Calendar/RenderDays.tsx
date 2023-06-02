const RenderDays = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];
  
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="flex justify-center ml-3" key={i}>
          <div className="grid grid-cols-7 gap-4 border-b border-fuchsia-500">
            <div className="text-center">
              {date[i]}
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="flex flex-row justify-between mr-3">
        {days}
      </div>
    );
  };
  
  export default RenderDays;
  
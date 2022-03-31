const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Weather = (props) => {
  const weathersData = props.weathers;
  const current = props.weathers.current.temp;
  const currentWeather = weathersData.current.weather[0].main;
  const weeklyWeather = weathersData.daily;

  //   小数点切り捨て
  const test = (arg) => {
    const temp = parseInt(arg, 10);
    return temp;
  };

  const getWeek = (item) => {
    const today = new Date();
    const todayDate = today.getDate();
    const d = new Date(item.dt * 1000);
    const dDate = d.getDate();
    let isToday = false;
    let week = null;

    if (dDate === todayDate) {
      isToday = true;
    } else {
      week = d.getDay();
    }

    return {
      item,
      isToday,
      week,
    };
  };

  return (
    <div className="mt-12 w-1/4 border rounded-md h-full">
      <h2 className="text-4xl px-4 py-6 border-b">Tokyo</h2>
      <div className="px-12 py-6">
        <div className="flex justify-between mb-12">
          <div>
            <div className="text-2xl">{currentWeather}</div>
            <div>
              <span className="text-5xl">{test(current)}</span>
              <span className="text-xl">°C</span>
            </div>
          </div>
          <div>
            <img src="/weathers/01.png" alt="" />
          </div>
        </div>
        <ul className="flex justify-between">
          {weeklyWeather
            ? weeklyWeather.map((item, index) => {
                if (index > 3) {
                  return;
                }
                const weekWeather = getWeek(item);

                if (weekWeather.isToday) {
                  return (
                    <li key={index} className="text-center">
                      <div className="text-2xl mb-2">Today</div>
                      <div className="w-12 mx-auto">
                        <img className="w-full h-full" src="/weathers/01.png" alt="" />
                      </div>
                      <div className="text-xl">
                        {test(weekWeather.item.temp.day)}
                        <span className="text-lg">°C</span>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={index} className="text-center">
                    <div className="text-2xl mb-2">{week[weekWeather.week]}</div>
                    <div className="w-12 mx-auto">
                        <img className="w-full h-full" src="/weathers/01.png" alt="" />
                      </div>
                    <div className="text-xl">
                      {test(weekWeather.item.temp.day)}
                      <span className="text-lg">°C</span>
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};
import { useRoundDown } from "../hooks/useRoundDown";

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const Weather = (props) => {
  const weathersData = props.weathers;
  const currentTemp = weathersData.current.temp;
  const currentWeather = weathersData.current.weather[0].main;
  const weeklyWeather = weathersData.daily;

  // 表示するデータがTodayなのか~曜日なのか
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

  const roundDown = (arg) => {
    const temp = parseInt(arg, 10);
    return temp;
  };

  return (
    <div className="mt-12 w-1/4 border rounded-2xl h-full">
      <h2 className="text-4xl px-4 py-6 border-b">{weathersData.timezone}</h2>
      <div className="px-12 py-6">
        <div className="flex justify-between mb-12">
          <div>
            <div className="text-2xl">{currentWeather}</div>
            <div>
              <span className="text-5xl">{roundDown(currentTemp)}</span>
              <span className="text-xl">°C</span>
            </div>
          </div>
          <div>
            <img src={`/weathers/${currentWeather}.png`} alt="" />
          </div>
        </div>
        <ul className="flex justify-between">
          {weeklyWeather.map((item, index) => {
            if (index > 3) {
              return;
            }
            const weekWeather = getWeek(item);
            const weather = weekWeather.item.weather[0].main;

            return (
              <li key={index} className="text-center">
                <div className="text-2xl mb-2">
                  {weekWeather.isToday ? (
                    <span>Today</span>
                  ) : (
                    <span>{week[weekWeather.week]}</span>
                  )}
                </div>
                <div className="w-12 mx-auto mb-1">
                  <img
                    className="w-full h-full"
                    src={`/weathers/${weather}.png`}
                    alt=""
                  />
                </div>
                <div className="text-xl">
                  {roundDown(weekWeather.item.temp.day)}
                  <span className="text-lg">°C</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

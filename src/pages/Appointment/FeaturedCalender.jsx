
import featuredBg from "../../assets/images/bg.png";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const FeaturedCalender = ({selectedDate, setSelectedDate}) => {

  return (
    <div
      style={{
        background: `url(${featuredBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero md:py-36 sm:p-5">
        <div className="hero-content max-w-[1400px] p-0 flex-col lg:flex-row-reverse gap-20">
          <img
            src={chair}
            className="lg:max-w-xl md:max-w-lg sm:max-w-sm rounded-lg shadow-2xl"
            alt="featured-img"
          />
          <div className=" sm:w-2/3 m-auto shadow-2xl rounded-lg">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FeaturedCalender;

import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../contents/AuthProvider";
import { toast } from "react-hot-toast";

const AppointmentBookingModal = ({
  treatment,
  setTreatment,
  selectedDate,
  refetch,
}) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;

  const hendelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const selectedDate = form.date.value;
    const userPhone = form.phone.value;
    const selectedTimeSlots = form.time.value;

    const bookings = {
      treatmentName: name,
      userName,
      userEmail,
      selectedDate,
      selectedTimeSlots,
      userPhone,
    };
    // console.log(bookings);

    fetch("http://localhost:5000/bookingsData/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookings),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setTreatment(null);
          toast.success(`${name} Booking Successfully`);
          refetch();
        } else {
          setTreatment(null);
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-2xl font-bold mb-5">{name}</h3>
          <form onSubmit={hendelBooking}>
            <input
              type="text"
              className="input input-bordered input-success w-full mb-5"
              defaultValue={format(selectedDate, "PP")}
              disabled
              name="date"
            />
            <input
              type="email"
              defaultValue={user?.email}
              className="input input-bordered input-success w-full mb-5"
              disabled
              name="email"
              required
            />

            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-success w-full mb-5"
              name="name"
              required
              defaultValue={user?.displayName}
              disabled
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered input-success w-full mb-5"
              name="phone"
              required
            />
            <select name="time" className="select select-success w-full mb-5">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <button type="submit" className="btn w-full">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AppointmentBookingModal;

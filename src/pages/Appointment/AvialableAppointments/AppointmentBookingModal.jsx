import { format } from "date-fns";
import { useContext } from "react";
import { AuthContext } from "../../../contents/AuthProvider";
import { toast } from "react-hot-toast";

const AppointmentBookingModal = ({ treatment, setTreatment, selectedDate }) => {
  const { user } = useContext(AuthContext);
  const { name, slots } = treatment;

  const hendelBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const selectedDate = form.date.value;
    const userPhone = form.phone.value;
    const selectedTime = form.time.value;

    const booking = {
      treatment: name,
      userName,
      userEmail,
      selectedDate,
      selectedTime,
      userPhone,
    };
    console.log(booking);
    setTreatment(null);
    toast.success(`${name} Booking Successfully`);
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
            <select name="time" className="select select-success w-full mb-5">
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered input-success w-full mb-5"
              name="name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="input input-bordered input-success w-full mb-5"
              name="phone"
              required
            />

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

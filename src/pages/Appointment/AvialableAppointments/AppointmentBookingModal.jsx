import { format } from "date-fns";

const AppointmentBookingModal = ({ treatment, selectedDate }) => {

  const { name, slots } = treatment;
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
          <form action="">
            <input
              type="text"
              className="input input-bordered input-success w-full mb-5"
              defaultValue={format(selectedDate, "PP")}
              disabled
            />
            <select className="select select-success w-full mb-5">
              <option disabled selected>
                Select Appointment Date
              </option>
              {
                slots.map(slot => <option value={slot}>{slot}</option>)
              }
              
            </select>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full mb-5"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full mb-5"
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

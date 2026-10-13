import { useState, type FormEvent } from 'react';

const goals = [
  'General Enquiry',
  'IV Drip Therapy',
  'Injections',
  'Wellness Tests & Screening',
  'Corporate Wellness',
  'Concierge Services',
];

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="booking-form booking-form--success">
        <h3>Thank you!</h3>
        <p>Your request has been received. Our team will be in touch shortly to confirm your session.</p>
      </div>
    );
  }

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__row">
        <label>
          Name &amp; Surname *
          <input type="text" name="name" required />
        </label>
        <label>
          Contact Number *
          <input type="tel" name="phone" required />
        </label>
      </div>

      <label>
        Email Address *
        <input type="email" name="email" required />
      </label>

      <div className="booking-form__row">
        <label>
          Choose a Location *
          <select name="location" required defaultValue="">
            <option value="" disabled>
              Choose a Location
            </option>
            <option value="vaal">Vaal Triangle</option>
            <option value="sandton">Sandton</option>
          </select>
        </label>
        <label>
          Wellness Goal *
          <select name="goal" required defaultValue="">
            <option value="" disabled>
              Choose an Option
            </option>
            {goals.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="booking-form__row">
        <label>
          Preferred Date
          <input type="date" name="date" />
        </label>
        <label>
          Preferred Time
          <input type="time" name="time" />
        </label>
      </div>

      <label>
        Anything you'd like us to know?
        <textarea name="message" rows={4} />
      </label>

      <label className="booking-form__consent">
        <input type="checkbox" name="consent" required />
        <span>
          I consent to being contacted via WhatsApp for booking updates and service-related
          communication, in line with POPIA compliance. *
        </span>
      </label>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

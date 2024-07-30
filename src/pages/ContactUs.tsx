import { FC, useState } from "react";
import { BloodDonorProps } from "./Home";

const ContactUs: FC<BloodDonorProps> = ({ title = "" }) => {
  const [maxlength, setMaxLength] = useState<number>(0);
  return (
    <div className="contact">
      <section className="content">
        <p>Drop us a message</p>
        <p>Fill this and we will be in touch with you soon.</p>
      </section>

      <form>
        <section className="inline">
          <input type="text" placeholder="First name" name="firstname" />
          <input type="text" placeholder="Last name" name="lastname" />
        </section>
        <section className="inline">
          <input type="text" placeholder="Email" name="email" />
          <input type="text" placeholder="Phone number" name="contact" />
        </section>
        <section className="inline">
          <textarea
            placeholder="Your message"
            rows={6}
            maxLength={500}
            onChange={(e) => setMaxLength(e.target.value.length)}
          ></textarea>
        </section>
        <p className="max-length main-color">Max Length: {500 - maxlength}</p>

        <p style={{ textAlign: "center" }}>
          <button type="submit">Submit</button>
        </p>
      </form>
    </div>
  );
};

export default ContactUs;

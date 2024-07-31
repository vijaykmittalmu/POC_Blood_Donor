import { FormEvent } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
  const onLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(1);
  };
  return (
    <section className="auth-wrapper">
      <form onSubmit={onLoginHandler}>
        <p className="title">Registration</p>
        <p>
          <input type="text" placeholder="Full name" name="full name" />
        </p>
        <p>
          <input type="text" placeholder="Email address" name="email address" />
        </p>
        <p>
          <input type="password" placeholder="Password" name="password" />
        </p>
        <p>
          <input
            type="password"
            placeholder="Confirm password"
            name="confirm password"
          />
        </p>
        <section className="inline-wrapper">
          <p>
            <input type="radio" id="male" name="gender" value="male" />
            &nbsp;
            <label htmlFor="male">Male</label>
          </p>
          &nbsp;&nbsp;
          <p>
            <input type="radio" id="female" name="gender" value="female" />
            &nbsp;
            <label htmlFor="female">Female</label>
          </p>
        </section>
        <section className="inline-wrapper">
          <select id="blood-group" name="blood-group">
            <option value="A+">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </section>
        <section className="actionItems">
          <button type="submit">Submit</button>
          <p>
            Do you have an account? <Link to="/auth/login">click here</Link>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Registration;

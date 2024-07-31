import { FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const onLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(1);
  };
  return (
    <section className="auth-wrapper">
      <form onSubmit={onLoginHandler}>
        <p className="title">Login</p>
        <p>
          <input type="text" placeholder="Email address" name="email address" />
        </p>
        <p>
          <input type="password" placeholder="Password" name="password" />
        </p>
        <section className="inline-wrapper">
          <section>
            <input type="checkbox" value="Show password" />{" "}
            <span>Show Password</span>
          </section>
          <section>
            <Link to="/auth/reset-password">Forgot password</Link>
          </section>
        </section>
        <section className="actionItems">
          <button type="submit">Submit</button>
          <p>
            Don't have an account? <Link to="/auth/register">click here</Link>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Login;

import { FormEvent } from "react";

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
            <input type="checkbox" value="Show password" />
            <span>Show Password</span>
          </section>
          <section>
            <a href="#/">Forgot password</a>
          </section>
        </section>
        <section className="actionItems">
          <button type="submit">Submit</button>
          <p>
            Don't have an account? <a href="#/">click here</a>
          </p>
        </section>
      </form>
    </section>
  );
};

export default Login;

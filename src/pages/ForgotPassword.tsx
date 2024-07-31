import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const onLoginHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(1);
  };
  return (
    <section className="auth-wrapper">
      <form onSubmit={onLoginHandler}>
        <p className="title">Forgot password</p>
        <p>
          <input type="text" placeholder="Email address" name="email address" />
        </p>
        <p className="actionItems">
          <button type="button" onClick={() => navigate(-1)}>
            Back
          </button>
          <button type="submit">Submit</button>
        </p>
      </form>
    </section>
  );
};

export default ForgotPassword;

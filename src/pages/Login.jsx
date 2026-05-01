const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="login">
      <div className="loginCard">
        <h2>PlayPulse</h2>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      </div>
    </div>
  );
};

export default Login;
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h2>404</h2>
      <p>Page Not Found</p>
      <Link to="/">Back Home</Link>
    </div>
  );
};
export default Error;

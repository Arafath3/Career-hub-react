import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="text-center">
      <div>
        <h2>Oops!</h2>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <button className="btn">
          <Link to="/">Go Back</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;

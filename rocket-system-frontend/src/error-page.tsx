import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      style={{
        background: `url('../imgs/communityFrame.jpeg')`,
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Oops! It seems you got in wrong timeline</h1>

      <p>
        While they try to pull out the fire, come check our other{' '}
        <Link to="/">content</Link>
      </p>
    </div>
  );
}

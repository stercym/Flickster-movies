function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ color: 'red', padding: '1rem' }}>
      <p>Something went wrong:</p>

      {/* Displays the specific error message if at all there is one encountered */}
      <pre>{error?.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}
export default ErrorFallback;
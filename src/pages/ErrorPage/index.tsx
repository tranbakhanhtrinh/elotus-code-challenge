
const ErrorPage = ({ error }: { error: string }) => {
  return (
    <section className="mt-1">
      <div className="container">
        <div className="alert alert-danger">
          <h2 className="text-center">{error}</h2>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
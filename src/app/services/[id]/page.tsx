export default function page({ params }) {
  const id = params.id;
  return (
    <div>
      <h3>this is dynimic page and ID: {id}</h3>
    </div>
  );
}

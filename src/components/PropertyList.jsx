import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  return (
    <section className="property-section">
      <div className="title-section">
        <h1>Properties for Rent</h1>
      </div>

      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

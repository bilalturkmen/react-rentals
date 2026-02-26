import { Bath, Bed, Maximize } from "lucide-react";

const Feature = ({ icon: Icon, value }) => (
  <span className="feature" style={{ color: "var(--primary)" }}>
    <Icon size={14} />
    <span style={{ color: "var(--white)", marginLeft: "4px" }}>{value}</span>
  </span>
);

export default function PropertyCard({ property }) {
  const {
    image,
    bedrooms,
    bathrooms,
    address,
    rent,
    surface,
    available,
    date,
    type,
  } = property;

  return (
    <article className={`property-card ${!available ? "unavailable" : ""}`}>
      <div className="card-media" style={{ backgroundImage: `url(${image})` }}>
        <span className="badge-type">{type}</span>
        {!available && <div className="badge-status">Let Agreed</div>}
        <div className="card-overlay">
          <Feature icon={Bed} value={bedrooms} />
          <Feature icon={Bath} value={bathrooms} />
          <Feature icon={Maximize} value={`${surface}m²`} />
        </div>
      </div>
      <div className="card-content">
        <p className="address">{address}</p>
        <p className="price">£{rent}/month</p>
        <p className="date">Available: {date}</p>
      </div>
    </article>
  );
}

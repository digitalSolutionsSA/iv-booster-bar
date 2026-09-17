import type { Branch } from '../data/siteContent';

export default function BranchInfoCard({ branch }: { branch: Branch }) {
  const waNumber = branch.whatsapp.replace(/\D/g, '');
  return (
    <div className="branch-info-card">
      <h3>{branch.name}</h3>
      <p className="branch-info-card__label">Address:</p>
      <p>{branch.address}</p>
      <p className="branch-info-card__label">Opening Hours:</p>
      {branch.hours.map((h) => (
        <p key={h}>{h}</p>
      ))}
      <div className="branch-info-card__contacts">
        {branch.phone && <p>Phone: {branch.phone}</p>}
        <p>WhatsApp: {branch.whatsapp}</p>
        <p>Email: {branch.email}</p>
      </div>
      <a
        className="btn btn-outline"
        href={`https://wa.me/27${waNumber.replace(/^0/, '')}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a>
    </div>
  );
}

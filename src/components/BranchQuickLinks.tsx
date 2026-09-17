import { Link } from 'react-router-dom';

const links = [
  { label: 'IV Drip Therapy', to: '/iv-drips' },
  { label: 'Injections', to: '/injections' },
  { label: 'Corporate Wellness', to: '/corporate-wellness' },
  { label: 'Wellness Services', to: '/wellness-tests-screening' },
];

export default function BranchQuickLinks() {
  return (
    <div className="branch-quick-links">
      <span className="eyebrow">Let's get dripping...</span>
      <div className="branch-quick-links__grid">
        {links.map((l) => (
          <Link to={l.to} key={l.to} className="branch-quick-links__item">
            <h4>{l.label}</h4>
            <span>Learn More →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { services } from '../data/siteContent';
import RevealOnScroll from './RevealOnScroll';
import ServiceIcon from './ServiceIcons';

export default function ServiceGrid() {
  return (
    <RevealOnScroll className="service-grid" y={30}>
      {services.map((s) => (
        <Link
          to={s.slug}
          className="service-card"
          key={s.slug}
          style={{ background: s.color, ['--card-color' as string]: s.color }}
        >
          <span className="service-card__icon">
            <ServiceIcon name={s.icon} />
          </span>
          <h3>{s.title}</h3>
          <p>{s.blurb}</p>
          <span className="service-card__link">Learn More</span>
        </Link>
      ))}
    </RevealOnScroll>
  );
}

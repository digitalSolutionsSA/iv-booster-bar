import { useEffect, useState } from 'react';
import { testimonials } from '../data/siteContent';
import RevealOnScroll from './RevealOnScroll';

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <RevealOnScroll className="testimonial-slider">
      <div className="testimonial-slider__track">
        {testimonials.map((t, i) => (
          <div className={`testimonial-card ${i === active ? 'is-active' : ''}`} key={t.name}>
            <span className="testimonial-card__rating">5/5</span>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </div>
      <div className="testimonial-slider__dots">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            className={i === active ? 'is-active' : ''}
            onClick={() => setActive(i)}
            aria-label={`Show testimonial from ${t.name}`}
          />
        ))}
      </div>
    </RevealOnScroll>
  );
}

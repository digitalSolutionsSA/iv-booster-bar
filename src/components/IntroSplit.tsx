import type { ReactNode } from 'react';
import RevealOnScroll from './RevealOnScroll';

interface Props {
  image: string;
  alt: string;
  imagePosition?: string;
  eyebrow?: string;
  title?: ReactNode;
  reverse?: boolean;
  altBg?: boolean;
  children: ReactNode;
}

export default function IntroSplit({ image, alt, imagePosition, eyebrow, title, reverse, altBg, children }: Props) {
  return (
    <section className={`section intro-split${altBg ? ' section--alt' : ''}`}>
      <div className={`container two-col${reverse ? ' two-col--reverse' : ''}`}>
        <RevealOnScroll className="intro-split__media">
          <img src={image} alt={alt} loading="lazy" decoding="async" style={imagePosition ? { objectPosition: imagePosition } : undefined} />
        </RevealOnScroll>
        <RevealOnScroll className="intro-split__body">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2>{title}</h2>}
          {children}
        </RevealOnScroll>
      </div>
    </section>
  );
}

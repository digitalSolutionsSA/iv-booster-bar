import RevealOnScroll from './RevealOnScroll';

interface Item {
  name: string;
  text: string;
}

export default function ItemGrid({ items }: { items: Item[] }) {
  return (
    <RevealOnScroll className="item-grid" y={24} stagger={0.05}>
      {items.map((item) => (
        <div className="item-card" key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </RevealOnScroll>
  );
}

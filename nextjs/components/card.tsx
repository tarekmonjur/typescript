import cardstyles from './card.module.css';
import Link from 'next/link';

const Card = ({ card }: { [key: string]: any }) => (
  <div className={cardstyles.card}>
    <div className={cardstyles.front}>
      <Link href={`/card/${card.id}`}>
        <img src="/juice.jpg" alt="Avatar" className={cardstyles.cardImage} />
        <div className={cardstyles.container}>
          <h3>
            {card.name || 'Default Juice'}{' '}
            <span className={cardstyles.price}>${card.amount | 0}</span>
          </h3>
          <p>{card.description}</p>
        </div>
      </Link>
    </div>
  </div>
);

export default Card;

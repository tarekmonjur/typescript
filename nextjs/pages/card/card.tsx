import cardstyles from './card.module.css';

const Card = ({card}: {[key: string]: any }) => (
    <div className={cardstyles.card}>
      <div className={cardstyles.front}>
        <img src="/juice.jpg" alt="Avatar" className={cardstyles.cardImage} />
        <div className={cardstyles.container}>
          <h3>Vitamin Juice <span className={cardstyles.price}>$24.99</span></h3> 
          <p>{card.description}</p>
        </div>
      </div>
    </div>
  );

export default Card;

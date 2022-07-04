import Card from '../UI/Card';
import EmoItem from './EmoItem/EmoItem';
import classes from './AvailableEmo.module.css';

const DUMMY_EMO = [
  {
    id: 'm1',
    name: 'Sadness',
    description: `It's okay to cry when you're sad`,
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Happiness',
    description: `This world becomes beautiful when you're happy`,
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Jealousy',
    description: 'If you feel jealous, you love something too much',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Confidence',
    description: 'Nothing in life is to be feared',
    price: 18.99,
  },
];

const AvailableEmo = () => {
  const emoList = DUMMY_EMO.map((emo) => (
    <EmoItem
      key={emo.id}
      id={emo.id}
      name={emo.name}
      description={emo.description}
      price={emo.price}
    />
  ));

  return (
    <section className={classes.emo}>
      <Card>
        <ul>{emoList}</ul>
      </Card>
    </section>
  );
};

export default AvailableEmo;

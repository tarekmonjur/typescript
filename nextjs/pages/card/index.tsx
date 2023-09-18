import type {
  InferGetStaticPropsType,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCards,
  cardSelector,
  ICard,
  getCards,
  addCard,
} from './../../store/cardSlice';
import Card from '../../components/card';
import type { NextPageWithLayout } from './../_app';
import { wrapper } from './../../store/store';
import cardData from './data.json';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    (async (conext) => {
      const cardState = store.getState().cardSlice.cards;
      let results: ICard[] = cardState;
      if (results.length < 1) {
        // await new Promise((resolve, rejects) => {
        //   setTimeout(() => {
        //     store.dispatch(getCards(cardData));
        //     results = store.getState().cardSlice.cards;
        //     resolve('true');
        //   }, 3000);
        // });
        await store.dispatch(getCards(cardData));
        results = store.getState().cardSlice.cards;
      }

      return { props: { cards: [...results] } };
    }) satisfies GetStaticProps<{ cards: ICard[] }>
);

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ cards }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const dispatch = useDispatch();
  let results = useSelector(cardSelector);
  console.log('index-render...', results);
  if (results.length < 1) {
    results = cards;
  }

  const addNewCard = async () => {
    const card: ICard = {
      id: 111,
      name: 'tarek',
      amount: Math.round(Math.random() * 5 + 3),
      description: 'new card item',
    };
    dispatch(addCard(card));
  };

  return (
    <>
      <div>
        <button onClick={() => addNewCard()}>Add New Card</button>
      </div>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          width: '100%',
          flexWrap: 'wrap',
        }}
      >
        {results.length > 0 &&
          results.map((card: ICard) => <Card key={card.id} card={card} />)}
      </div>
    </>
  );
};

// per page layout
// Page.getLayout = function getLayout(page: ReactElement) {
//     return (
//       <Layout>
//         monjur
//         {page}
//       </Layout>
//     )
//   }

export default Page;

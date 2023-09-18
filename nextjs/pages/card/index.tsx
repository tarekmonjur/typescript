'use client';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';
import { useDispatch, useSelector } from 'react-redux';
// import type { ReactElement } from 'react';
// import Layout from './../layout';
import { selectCards, ICard, getCards } from './../../store/cardSlice';
import Card from '../../components/card';
import type { NextPageWithLayout } from './../_app';
import { wrapper } from './../../store/store';
import cardData from './data.json';

export const getStaticProps = wrapper.getStaticProps(
  (store) =>
    (async (conext) => {
      const cardState = store.getState().cardSlice.cards;
      let results: ICard[] = cardState;
      if (results.length < 1) {
        // new Promise((resolve, rejects) => {
        //   setTimeout(() => {
        //     store.dispatch(getCards(cardData));
        //     resolve('true');
        //   }, 3000);
        // });
        await store.dispatch(getCards(cardData));
        results = store.getState().cardSlice.cards;
      }

      return { props: { cards: results } };
    }) satisfies GetStaticProps<{ cards: ICard[] }>
);

const Page: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ cards }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('index-render...');
  return (
    <>
      {cards.map((card: ICard) => (
        <Card key={card.id} card={card} />
      ))}
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

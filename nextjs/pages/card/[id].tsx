'use client';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';
import { ICard, selectCards } from './../../store/cardSlice';
import { wrapper } from './../../store/store';

import { useRouter } from 'next/router';
import { NextPageWithLayout } from './../_app';
import Card from '../../components/card';
import Link from 'next/link';

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     (async (conext) => {
//       const cardId: number = parseInt('' + (conext.params?.id || 0), 10);
//       const cards: ICard[] = store.getState().cardSlice.cards;
//       let card: ICard | null = null;
//       const findCard = cards.find((c) => c.id === cardId);
//       if (!findCard) {
//         return {
//           notFound: true,
//         };
//       }
//       card = findCard ? findCard : card;

//       return { props: { card } };
//     }) satisfies GetServerSideProps<{ card: ICard | null }>
// );

// const Page: NextPageWithLayout<
//   InferGetServerSidePropsType<typeof getServerSideProps>
// > = ({
//   card,
// }: InferGetServerSidePropsType<typeof getServerSideProps> | any) => {
//   console.log('single-card render');
//   const router = useRouter();
//   const cardId: number = +(router.query?.id || '');
//   if (!card) {
//     // console.log('safddadfaf', useSelector(selectCards));
//     console.log('safddadfaf', useStore().getState());
//     card = useSelector(selectCards).find((c) => c.id === cardId);
//   }

//   return (
//     <>
//       <Card card={card} />
//       <p>ID: {cardId}</p>
//       <p>ID: {card.id}</p>
//     </>
//   );
// };

const Page: NextPageWithLayout = () => {
  console.log('single-card render');
  const router = useRouter();
  const cardId: number = +(router.query?.id || '');
  const card: ICard = useSelector(selectCards).find(
    (c) => c.id === cardId
  ) as ICard;

  useEffect(() => {
    console.log('card', card);
    if (!card) {
      router.push('/card');
    }
  });

  return (
    <>
      {card && <Card card={card} />}
      <Link href={'/card'}>Back to Card</Link>
    </>
  );
};

export default Page;

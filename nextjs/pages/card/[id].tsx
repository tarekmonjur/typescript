import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
// import { useDispatch, useSelector } from 'react-redux';
import { ICard } from './../../store/cardSlice';
import { wrapper } from './../../store/store';

import { useRouter } from 'next/router';
import { NextPageWithLayout } from './../_app';
import Card from '../../components/card';

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    (async (conext) => {
      const cardId: number = parseInt('' + (conext.params?.id || 0), 10);
      const cards: ICard[] = store.getState().cardSlice.cards;
      let card: ICard | null = {} as ICard;
      const findCard = cards.find((c) => c.id === cardId);
      if (!findCard) {
        return {
          notFound: true,
        };
      }
      card = findCard ? findCard : card;

      return { props: { card } };
    }) satisfies GetServerSideProps<{ card: ICard }>
);

const Page: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  card,
}: InferGetServerSidePropsType<typeof getServerSideProps> | any) => {
  console.log('single-card render');
  const router = useRouter();
  const cardId = router.query?.id;

  return (
    <>
      <Card card={card} />
      <p>ID: {cardId}</p>
      <p>ID: {card.id}</p>
    </>
  );
};

export default Page;

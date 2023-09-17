import Card from "./card"
import Layout from "./../layout"
import type { ReactElement } from "react"
import type { NextPageWithLayout } from "./../_app"

import type { InferGetStaticPropsType, GetStaticProps } from "next"
import jsonData from "./../api/data.json"

type Data = {
  id: number
  animation: string
  description: string
}

export const getStaticProps = ((conext) => {
  const results: Data[] = jsonData
  return { props: { cards: results } }
}) satisfies GetStaticProps<{ cards: Data[] }>

const Page: NextPageWithLayout<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ cards }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {cards.map((card: Data) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  )
}

// per page layout
// Page.getLayout = function getLayout(page: ReactElement) {
//     return (
//       <Layout>
//         monjur
//         {page}
//       </Layout>
//     )
//   }

export default Page

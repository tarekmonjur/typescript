import Card from './card';
import Layout from './../layout';
import type { ReactElement } from 'react';
import type { NextPageWithLayout } from './../_app';

const Page: NextPageWithLayout = () => {
    return (
        <>
            <Card />
            <Card />
            <Card />
        </>
    );
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

export default Page;
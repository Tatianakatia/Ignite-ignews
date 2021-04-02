import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

// There are three ways principal form to do to call
// Client-side - for use in page you don't need to change something, show only 
//               static for all
// Server-side - for need information the user in real time
// Static Site Generation - for share the same page with all

// Context: SSG
// Comments: (Client-Side)

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product} : HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          
          </p>
          <SubscribeButton priceId={product.priceId}/>

        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps  = async () => {
  const price = await stripe.prices.retrieve('price_1IaE30IzFlnESmrG4BF6Yrg1', {
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en',{
      style: 'currency',
      currency: 'EUR',
    }).format(price.unit_amount / 100),
  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 *24, //24 hours
  }
}

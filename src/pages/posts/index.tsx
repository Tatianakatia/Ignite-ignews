import Head from 'next/head';
import styles from './styles.module.scss';

export default function Post() {
  return (
    <>
      <Head>
        <title>Posts | Ignews </title>
      </Head>

      <main>
        <div>
          <a>
            <time>12 of March of 2021</time>
            <strong>How do you make a good README</strong>
            <p>Guia Rocketseat para um README de qualidade. Se você não leu o post O que é README recomendo que leia, se já sabe da importância desse arquivo no projeto, pode continuar por aqui.</p>
          </a>
          <a>
            <time>12 of March of 2021</time>
            <strong>How do you make a good README</strong>
            <p>Guia Rocketseat para um README de qualidade. Se você não leu o post O que é README recomendo que leia, se já sabe da importância desse arquivo no projeto, pode continuar por aqui.</p>
          </a>

          <a>
            <time>12 of March of 2021</time>
            <strong>How do you make a good README</strong>
            <p>Guia Rocketseat para um README de qualidade. Se você não leu o post O que é README recomendo que leia, se já sabe da importância desse arquivo no projeto, pode continuar por aqui.</p>
          </a>

          <a>
            <time>12 of March of 2021</time>
            <strong>How do you make a good README</strong>
            <p>Guia Rocketseat para um README de qualidade. Se você não leu o post O que é README recomendo que leia, se já sabe da importância desse arquivo no projeto, pode continuar por aqui.</p>
          </a>
        </div>
      </main>
    </>
  );
}
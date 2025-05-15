import { GetServerSideProps } from 'next';
import Head from 'next/head';

import './page.scss';

interface PageProps {
  code?: string;
}

export default function Page({ code }: PageProps) {
  return (
    <>
      <Head>
        <title>Estoc Playground</title>
        {code && <meta name="description" content={`Your code: ${code}`} />}
      </Head>
      <form className="page-root" method="GET" action="/">
        <textarea name="code" id="input" placeholder="Enter code here" defaultValue={code} />
        <textarea id="result" placeholder="Output" readOnly={true} />
        <button type="submit">Run</button>
      </form>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async ({ query }) => {
  const code = query['code']?.toString();

  return { props: { ...(code ? { code } : {}) } };
};

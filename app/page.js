import dynamic from 'next/dynamic';

const IndexClient = dynamic(() => import('./page-client'), {
  ssr: false,
})

export default IndexClient;
import dynamic from 'next/dynamic';

const IndexClient = dynamic(() => import('./index-client'), {
  ssr: false,
})

export default IndexClient;
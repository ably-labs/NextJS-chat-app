import Head from 'next/head'
import dynamic from 'next/dynamic'

const AblyChatComponent = dynamic(() => import('../components/AblyChatComponent'), { ssr: false });

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Realtime Chat App with Ably, NextJS and Vercel</title>
        <link rel="icon" href="https://static.ably.dev/motif-red.svg?nextjs-vercel" type="image/svg+xml" />
      </Head>

      <main>
        <h1 className="title">Next.js Chat Demo</h1>
        <AblyChatComponent />
      </main>

      <footer>
        Powered by
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
        and
        <a href="https://ably.com" rel="noopener noreferrer">
          <img src="/ably-logo.svg" alt="Ably Logo" className="logo ably" />
        </a>
        <a href="https://github.com/ably-labs/NextJS-chat-app" className="github-corner" aria-label="View source on GitHub">
          <svg width="80" height="80" viewBox="0 0 250 250" className="svg" aria-hidden="true">
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" className="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path></svg>
            </a>
      </footer>

      <style jsx>{`
        .container {
          display: grid;
          grid-template-rows: 1fr 100px;
          min-height: 100vh;
          background-color: #eee;
        }

        main {
          display: grid;
          grid-template-rows: auto 1fr;
          width: calc(100% - 40px);
          max-width: 900px;
          margin: 20px auto;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.2);
          background-color: white;
        }

        .title {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100px;
          margin: 0;
          color: white;
          background: #005C97;
          background: -webkit-linear-gradient(to right, #363795, #005C97);
          background: linear-gradient(to right, #363795, #005C97);
        }

        footer {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          width: 100vw;
          height: 100px;
        }

        .logo {
          display: block;
          height: 20px;
          margin: 0.5em;
        }

        .svg { 
          fill:#005C97; 
          color:#fff; 
          position: absolute; 
          top: 0; 
          border: 0; 
          right: 0; 
        }

        .octo-arm {
          transform-origin: 130px 106px;
        }

        .github-corner:hover .octo-arm {
          animation: octocat-wave 560ms ease-in-out;
        }
        
        @keyframes octocat-wave {
          0%, 100%{transform:rotate(0)}
          20%,60%{transform:rotate(-25deg)}
          40%,80%{transform:rotate(10deg)}}
        }

        @media (min-width: 600px) {
          .logo {
            height: 40px;
            margin: 1em;
          }
  
          .ably {
            height: 60px;
          }
        }
       
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        [data-author="me"] {
          background: linear-gradient(to right, #363795, #005C97); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          color: white;
          align-self: flex-end;
          border-bottom-right-radius: 0!important;
          border-bottom-left-radius: 10px!important;
        }
        
      `}</style>
    </div>
  )
}

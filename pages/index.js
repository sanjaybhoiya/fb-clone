import Head from 'next/head';
 import Chatbox from '../components/Chatbox';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


export default function Home() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>FB-Clone</title>
      </Head>

      {/* Header */}

      <Header />


      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feeds */}
        <Feed />
        {/* Chatbar */}

        <Chatbox />
      </main>
    </div>
  )
}
import Head from 'next/head';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen max-w-7xl mx-auto ">
        {/*Sidebar*/}
        <Sidebar/>
         {/* Feed */}
        <Feed />
        {/* Widget */}
      
      
        </main>
    </div>
  )
}
//https://saurav.tech/NewsAPI/top-headlines/category/business/us.json
export async function getServerSideProps() {
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());
   // Who to follow section

   let randomUsersResults = [];

   try {
     const res = await fetch(
       "https://randomuser.me/api/?results=30&inc=name,login,picture"
     );
 
     randomUsersResults = await res.json();
   } catch (e) {
     randomUsersResults = [];
   }
  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}
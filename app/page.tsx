import Link from 'next/link';

function Home() {
  return (
    <>
      <h2>Home Page</h2>
      <div className='py-4'>
        <Link href='/blog/postslist' className='p-2 bg-slate-600 rounded-lg'>View Posts List Page</Link>
      </div>
      <div>
        <Link href='/shopping' className='p-2 bg-slate-600 rounded-lg'>View Shopping Page</Link>
      </div>
    </>
  );
}

export default Home;
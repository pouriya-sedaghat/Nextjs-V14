import { Post } from '@/interface/post';

async function PostsList() {

  const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 5 } });
  const responseData: Post[] = await response.json();

  return (
    <>
      <h2 className='mt-3'>post Page</h2>
      <table className='table table-bordered table-dark table-hover table-striped text-center align-middle'>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            responseData.map((item) => (
              <tr key={item.id.toString()}>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
}

export default PostsList;
import { Product } from '@/interface/product';
import { revalidateTag } from 'next/cache';

async function Shopping() {

    async function addProductHandler(e: FormData) {
        'use server';

        const title = e.get('title');
        const price = e.get('price');

        await fetch('http://localhost:5000/products', { method: 'POST', body: JSON.stringify({ title, price }), headers: { 'Content-Type': 'application/json' } });

        revalidateTag('products');
    }

    const response = await fetch('http://localhost:5000/products', {
        cache: 'no-cache',
        next: { tags: ['products'] }
    });
    const responseData: Product[] = await response.json();

    return (
        <>
            <form className='mb-3 bg-dark text-white text-center p-5' action={addProductHandler}>
            <h2 className='mb-3 text-start'>Add Products :</h2>
                <div>
                    <input type='text' name='title' placeholder='title' className='bg-transparent border py-1 px-2 rounded-lg' autoFocus />
                </div>
                <div className='my-2'>
                    <input type='text' name='price' placeholder='price' className='bg-transparent border py-1 px-2 rounded-lg' autoFocus />
                </div>
                <button type='submit' className='btn border text-reset mt-2'>Add Product</button>
            </form>
            <table className='table table-bordered table-dark table-hover table-striped text-center align-middle'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        responseData.map((item) => (
                            <tr key={item.id.toString()}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Shopping;
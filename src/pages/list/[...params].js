import { useRouter } from 'next/router';
import React from 'react';

export default function ListDetail({ results }) {
    // console.log(results)
    const router = useRouter();
    const handleBtnClick = (url) => {
        window.open(url)
    }
    return (
        <section className='p-10 flex flex-col items-center'>
            <h4 className="font-bold text-3xl mb-6">
                {router.query.title || results.list_name}</h4>
            <div className='grid grid-cols-4 grid-flow-row gap-5'>
                {results.books.map(book =>
                    <div key={book.rank}
                        className='bookdiv bg-white'
                    >
                        <img src={book.book_image} />
                        <div className='p-2'>
                            <h4 className='text-lg font-bold'>{book.title}</h4>
                            <h4 className='text-sm'>{book.author}</h4>
                        </div>
                        <button
                            onClick={() => handleBtnClick(`${book.buy_links[0].url}`)}
                            className='buybtn p-2 bg-[var(--main-color-gray)] m-3 rounded-sm textbox'
                        >Buy Now ➜</button>
                    </div>)}
                <style jsx>{`
                .buybtn{
                    border: 3px solid black;
                    &:hover{
          cursor: pointer;
          transform: translateY(-3px);
        }
                }
                img{
                    border-bottom: 3px solid black;
                    margin-bottom: 5px;
                }
                        .bookdiv{
                            border: 3px solid black;
        box-shadow: 5px 5px 0px 1px rgba(0,0,0,0.73);
-webkit-box-shadow: 5px 5px 0px 1px rgba(0,0,0,0.73);
-moz-box-shadow: 5px 5px 0px 1px rgba(0,0,0,0.73);
                        }
                        `}</style>
            </div>
        </section>
    );
}


export async function getServerSideProps({ params: { params } }) {
    const { results } = await (
        await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${params[0]}`)
    ).json();
    return {
        props: {
            results,
        }
    }
}
import { useRouter } from "next/router";

export default function Home({ results }) {
  const router = useRouter();
  const handleListClick = (id) => {
    router.push(`/list/${id}`)
  }
  return (
    <section className='p-10 '>
      <h1 className="font-extrabold text-5xl mb-6">The New York Times Best Seller Explorer</h1>
      <div className="flex whitespace-pre flex-wrap">
        {results.map(list =>
          <div key={list.list_name_encoded}
            onClick={() => handleListClick(list.list_name_encoded)}
            className="p-2 bg-white m-3 rounded-sm textbox"
          >
            <span>{list.display_name}</span>
          </div>
        )}
      </div>
      <style jsx>{`
      .textbox{
        border: 3px solid black;
        box-shadow: 3px 5px 0px 1px rgba(0,0,0,0.73);
-webkit-box-shadow: 3px 5px 0px 1px rgba(0,0,0,0.73);
-moz-box-shadow: 3px 5px 0px 1px rgba(0,0,0,0.73);
        &:hover{
          cursor: pointer;
          transform: translateY(-3px);
        }
      }`}</style>
    </section>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`https://books-api.nomadcoders.workers.dev/lists`)
  ).json();
  return {
    props: {
      results,
    }
  }
}
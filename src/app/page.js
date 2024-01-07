import Results from "@/components/Results";


const API_KEY = process.env.API_KEY;

export default async function Home({searchParams}) {
  const genre = searchParams.genre || 'fetchTrending';
  const res =await fetch(`https://api.themoviedb.org/3/${genre === "fetchTopRated" ?  "trending/all/week" :"trending/all/day" }?api_key=${API_KEY}&Language=en-US&page=1`, {next: {revalidate:10000}});
  
  if(!res.ok){
    throw new Error('failed to results');
  }
  const data = await res.json();

  const results = data.results;
  // console.log(results);
  

  

    
  return (
    <div>
      <Results results={results}></Results>
    </div>
  )
}

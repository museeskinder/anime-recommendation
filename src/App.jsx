import { AnimeHome } from "./assets/components/AnimeHome/AnimeHome";
import { AnimeTrending } from "./assets/components/AnimeTrending/AnimeTrending";
import { useEffect, useState } from "react";
import { fetchAnime, fetchTrendingAnime } from '../src/api/anime';
import  './global.css';
export const App = () => {
  const [randomAnime, setRandomAnime] = useState();
  const [trendingAnimeList, setTrendingAnimeList] = useState();

  const getRandomAnime =  async () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    const anime =  await fetchAnime(randomNum);
    setRandomAnime(anime);
  };

  const getTrendingAnime = async () => {
    const trendingAnime = await fetchTrendingAnime();
    setTrendingAnimeList(trendingAnime);
  };

  useEffect(() => {
    getRandomAnime();
    getTrendingAnime();
  }, []);

  return (
    <div>
      { randomAnime && <AnimeHome anime={randomAnime} /> }
      { trendingAnimeList && <AnimeTrending animeList={trendingAnimeList} />}
    </div>
  );
};

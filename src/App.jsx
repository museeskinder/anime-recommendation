import { AnimeHome } from "./assets/components/AnimeHome/AnimeHome";
import { AnimeTrending } from "./assets/components/AnimeTrending/AnimeTrending";
import { useEffect, useState } from "react";
import { AnimeAPI } from "./api/anime";
export const App = () => {
  const [randomAnime, setRandomAnime] = useState();

  const getRandomAnime =  async () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    const anime =  await AnimeAPI.fetchAnime(randomNum);
    setRandomAnime(anime);
  };

  useEffect(() => {
    getRandomAnime();
  }, []);

  return (
    <div>
      { randomAnime && <AnimeHome anime={randomAnime} /> }
      <AnimeTrending />
    </div>
  );
};

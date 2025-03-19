import { AnimeHome } from "./assets/components/AnimeHome/AnimeHome";
import { AnimeTrending } from "./assets/components/AnimeTrending/AnimeTrending";
import { useEffect, useState } from "react";
import { AnimeAPI } from "./api/anime";
export const App = () => {
  const [randomAnime, setRandomAnime] = useState();

  const getRandomAnime =  () => {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum)
    const anime = AnimeAPI.fetchAnime(randomNum);
    setRandomAnime(anime);
  };

  useEffect(() => {
    getRandomAnime();
  }, []);

  return (
    <div>
      <AnimeHome anime={randomAnime}/>
      <AnimeTrending />
    </div>
  );
};

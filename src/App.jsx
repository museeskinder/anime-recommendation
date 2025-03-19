import { AnimeView } from "./assets/components/AnimeView/AnimeView";
import { AnimeTrending } from "./assets/components/AnimeTrending/AnimeTrending";
import { useEffect, useState } from "react";
import { AnimeAPI } from "./api/anime";
export const App = () => {
  const [randomAnime, setRandomAnime] = useState();

  const getRandomAnime = () => {
    let randomNum = Math.floor(Math.random() * 10);
    const anime = AnimeAPI.fetchAnime(randomNum);
    setRandomAnime(anime);
  };

  useEffect(() => {
    getRandomAnime();
  });

  return (
    <div>
      <AnimeView anime={randomAnime}/>
      <AnimeTrending />
    </div>
  );
};

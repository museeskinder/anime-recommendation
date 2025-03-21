import { useEffect } from "react";
import { useState } from "react";
import { AnimeTrendingListItem } from "../AnimeTrendingListItem/AnimeTrendingListItem";
import s from './style.module.css';
export const AnimeTrendingList = ({ list }) => {
  const [animeList, setAnimeList] = useState([]);

  useEffect(()=> {
    if(list?.data) {
        setAnimeList(list?.data);
    }
  }, []);

  return (
    <div className={s.container}>
      {animeList.map((anime) => {
        const attributes = anime?.attributes;
        const { ageRating, ageRatingGuide } = attributes;
        const posterImg = attributes?.posterImage?.tiny;
        const titleEn = attributes?.titles?.en_us || "Title not available";

        return (
          <AnimeTrendingListItem
            rating={ageRating || "N/A"}
            ratingGuide={ageRatingGuide || "N/A"}
            imgSrc={posterImg}
            title={titleEn}
            key={anime.id}
          />
        );
      })}
    </div>
  );
};

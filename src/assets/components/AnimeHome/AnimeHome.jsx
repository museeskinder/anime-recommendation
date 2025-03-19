import { AnimeTrending } from "../AnimeTrending/AnimeTrending";
import { AnimeView } from "../AnimeView/AnimeView";
import s from './style.module.css';

export const AnimeHome = ({ anime }) => {
    return (
        <div className={s.container}>
                <AnimeView  className={s.view} anime={anime}/>
                <AnimeTrending className={s.trending}/>
        </div>
    );
};
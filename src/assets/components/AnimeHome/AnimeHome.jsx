import { AnimeTrending } from "../AnimeTrending/AnimeTrending";
import { AnimeView } from "../AnimeView/AnimeView";
import s from './style.module.css';

export const AnimeHome = (props) => {
    return (
        <div className={s.container}>
            <div className={`row`}>
                <AnimeView className={`col`} anime={props}/>
                <AnimeTrending className={`col`} />
            </div>
        </div>
    );
};
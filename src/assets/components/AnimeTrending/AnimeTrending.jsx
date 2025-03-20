import s from './style.module.css';
import { AnimeTrendingList } from '../AnimeTrendingList/AnimeTrendingList'
export const AnimeTrending = ({animeList}) => {
    return (
        <div>
            <AnimeTrendingList list={animeList}/>
        </div>
    );
}
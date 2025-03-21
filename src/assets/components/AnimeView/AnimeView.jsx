import s from './style.module.css'
import { AnimeDetail }  from '../AnimeDetail/AnimeDetail';
export const AnimeView = ({ anime }) => {
    console.log(anime)
    const coverImageUrl = anime?.data?.attributes?.coverImage?.large 
    return (
        <div style={{
            backgroundImage: `url(${coverImageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
        }} className={s.container}>
            <AnimeDetail anime={anime} />
        </div>
    );
};
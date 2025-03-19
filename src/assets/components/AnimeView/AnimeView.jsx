import s from './style.module.css';
import { useState, useEffect } from 'react';
import { AnimeAPI } from "../../../api/anime";

export const AnimeView = ({ anime }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [coverImageUrl, setCoverImageUrl] = useState('');
    let randomNum = Math.floor(Math.random() * 10) + 1;

    useEffect(() => {
        if (anime?.data?.attributes?.coverImage?.large) {
            setCoverImageUrl(anime.data.attributes.coverImage.large);
            setIsLoading(false);

        } else {
            setIsLoading(true);
            if(setIsLoading){
                AnimeAPI.fetchAnime(randomNum)
            }
        }
    }, [anime,randomNum]);

    if (isLoading) {
        return <div className={s.container}>Loading...</div>;
    }

    return (
        <div
            style={{
                backgroundImage: `url(${coverImageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                opacity: 0.5,
            }}
            className={s.container}
        />
    );
};

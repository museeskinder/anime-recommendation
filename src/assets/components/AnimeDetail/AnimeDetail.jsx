import s from './style.module.css';
export const AnimeDetail =  ({ anime }) => {
    const attributes = anime?.data?.attributes || {};

    const {  ageRating, popularityRank, description, startDate, endDate, status } = attributes;

    const titleEn = attributes?.titles?.en;
    const titleJp = attributes?.titles?.ja_jp;
    const posterImg = attributes?.posterImage?.small;


    return (
        <div className={s.container}>
            <div className={s.poster}>
                <img src={posterImg} alt={'Anime Poster'} />
            </div>
            <div className={s.details}>
                <h1 className={s.anime_name}>{titleEn}</h1>
                <h3 className={s.anime_name_jap}>{titleJp}</h3>
                <p>{description}</p>
                <div className={s.details_list}>
                    <ul>
                        <li><span>Age Rating: </span>{ageRating}</li>
                        <li><span>Popularity Rank: </span>{popularityRank}</li>
                        <li><span>Start Date: </span>{startDate}</li>
                        <li><span>End Date: </span>{endDate}</li>
                        <li><span>Status: </span>{status}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
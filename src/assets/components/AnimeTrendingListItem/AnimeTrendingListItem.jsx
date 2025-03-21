import s from './style.module.css';
export const AnimeTrendingListItem = ({rating, ratingGuide, imgSrc, title}) => {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <img className={'img-fluid'} src={imgSrc} alt={'cover image'} />
            </div>
            <h3>{title}</h3>
            <p>{rating}</p>
            <p>{ratingGuide}</p>
        </div>
    );
};
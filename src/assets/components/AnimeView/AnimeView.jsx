import s from './style.module.css'
export const AnimeView = ({ anime }) => {
    const coverImageUrl = anime.data.attributes.coverImage.large;
    return (
        <div style={{
            backgroundImage: `url(${coverImageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            opacity: 0.5,
        }} className={s.container}>
        </div>
    );
};
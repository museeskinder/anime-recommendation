import s from './style.module.css'
export const AnimeView = ({ anime }) => {
    return (
        <div style={{
            backgroundImage: `url(${anime.attributes.coverImage.large})`,
            backgroundPosition: 'center',
            backgroundSize: 'conver',
            backgroundRepeat: 'no-repeat'
        }} className={s.container}>

        </div>
    );
};
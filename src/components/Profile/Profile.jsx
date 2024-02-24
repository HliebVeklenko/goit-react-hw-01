import css from "./Profile.module.css";

function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div className={css.gallery}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.info}>@{tag}</p>
        <p className={css.info}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.item}>
          <span className={css["stats-title"]}>Followers</span>
          <span className={css["stats-value"]}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css["stats-title"]}>Views</span>
          <span className={css["stats-value"]}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css["stats-title"]}>Likes</span>
          <span className={css["stats-value"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

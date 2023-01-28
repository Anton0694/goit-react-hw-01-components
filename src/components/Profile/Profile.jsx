import css from 'components/Profile/Profile.module.css';

const MetaInfo = ({ text }) => {
    return <div>{text}</div>;
}

const Metrics = ({ stats }) => {
    return 
}

export const Profile = ({username, tag, location, avatar, stats}) => {
    return <div className={css.profile}>
        <img
            src={avatar}
            alt={`${username}`}
            width="90" />
        <p>{username}</p>
        <MetaInfo text={`@${tag}`} />
        <MetaInfo text={`${location}`} />
        
    </div>
}




Profile.propTypes = {

}
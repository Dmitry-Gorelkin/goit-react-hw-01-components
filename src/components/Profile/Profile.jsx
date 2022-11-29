import PropTypes from 'prop-types';
import {
  CardProfile,
  Description,
  StatsList,
  StatItem,
  Avatar,
  Name,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <CardProfile>
      <Description>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>
      <StatsList>
        <StatItem>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </StatItem>
        <StatItem>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </StatItem>
        <StatItem>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </StatItem>
      </StatsList>
    </CardProfile>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../../../src/components/FriendListItem/FriendListItem";

function FriendList({ prop }) {
  return (
    <ul className={css.list}>
      {prop.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            name={friend.name}
            avatar={friend.avatar}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

export default FriendList;

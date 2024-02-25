import css from "../FriendList/FriendList.module.css";
import FriendListItem from "../../../src/components/FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <ul className={css.list}>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            <FriendListItem
              name={friend.name}
              avatar={friend.avatar}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;

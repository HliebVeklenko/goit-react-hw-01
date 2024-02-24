import "./App.css";
import friends from "../src/friends.json";
import userData from "../src/userData.json";
import transactions from "../src/transactions.json";
import Profile from "../src/components/Profile/Profile";
import FriendList from "../src/components/FriendList/FriendList";
import TransactionHistory from "../src/components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList prop={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

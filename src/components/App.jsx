import { Profile } from './Profile/Profile';
import user from './user.json';
import data from './data.json';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101'
      }}
    >
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

import user from 'data/user.json';
import ProfileUser from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from 'data/data.json';
import friends from 'data/friends.json';
import FriendList from './FriendList/FriendList';
import transactions from 'data/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';



export const App = () => {
  return (<>
    <ProfileUser
      username={user.username}
      tag={user.tag}
      location={user.location}
      imgUrl={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes} />    
    <Statistics title="Upload stats" stats={data} />   
    <FriendList friends={friends} />
   <TransactionHistory items={transactions} />
    </>
  );
};
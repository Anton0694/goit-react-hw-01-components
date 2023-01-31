import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
/* import { ThemeProvider } from '@emotion/react'; */

import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json'

import css from './App.module.css'



export const App = () => {
  return (
    <div className={css.style}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
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
     {/*  <ThemeProvider theme={theme}> */}

        <Statistics title={data.title} stats={data} />
       {/*  </ThemeProvider> */}
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};

import React from "react";

import Profile from "./components/social-profile/Profile";
import user from "./components/social-profile/user.json";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

import FriendList from "./components/friend-list/FriendList";
import friends from "./components/friend-list/friends.json";

import TransactionHistory from "./components/transaction-history/TransactionsHistory";
import transactions from "./components/transaction-history/transactions.json";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

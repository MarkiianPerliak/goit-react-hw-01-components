import PropTypes from 'prop-types';
import './App.css';
import { Social } from './Social.jsx';
import { Statistics } from './Statistics.jsx';
import { FriendList } from './FriendList.jsx';
import { Transaction } from './TransactionHistory.jsx';

const user = {
  username: "Petra Marica",
  tag: "@pmarica",
  location: "Salvador, Brasil",
  avatar: "https://cdn-icons-png.flaticon.com/512/1077/1077012.png",
  stats: ["1000", "2000", "3000"]
}

const stats = [
  {
    percnt: "32%",
    type: ".docx",
    color: "rgb(84, 183, 245)"
  },
  {
    percnt: "4%",
    type: ".pdf",
    color: "rgba(167, 0, 201, 1)"
  },
  {
    percnt: "17%",
    type: ".mp3",
    color: "rgba(216, 58, 84, 1)"
  },
  {
    percnt: "47%",
    type: ".psd",
    color: "rgba(0, 255, 213, 1)"
  },
]
const text = "Upload stats";

const friends = [
  {
    avatar: "idk",
    name: "Mango",
    isOnline: true
  },
  {
    avatar: "idk",
    name: "Kiwi",
    isOnline: false
  },
  {
    avatar: "idk",
    name: "Ajax",
    isOnline: true
  },
  {
    avatar: "idk",
    name: "Jay",
    isOnline: true
  },
  {
    avatar: "idk",
    name: "Poly",
    isOnline: false
  }
];

const transaction = [
  {
    id: 1,
    type: "Invoice",
    amount: 125.00,
    currency: "USD"
  },
  {
    id: 2,
    type: "Withdrawal",
    amount: 85.00,
    currency: "USD"
  },
  {
    id: 3,
    type: "Deposit",
    amount: 103.10,
    currency: "BWP"
  },
  {
    id: 4,
    type: "Payment",
    amount: 862.44,
    currency: "AUD"
  },
  {
    id: 5,
    type: "Withdrawal",
    amount: 371.43,
    currency: "MUR"
  }
]

export const App = () => {
  return (
    <div className='App'>
      <Social
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title={text}
        stats={stats}
      />
      <FriendList friends={friends} />
      <Transaction history={transaction} />
    </div>
  )
}

App.propTypes = {
  user: PropTypes.object,
  transaction: PropTypes.array,
  stats: PropTypes.array,
  friends: PropTypes.array,
  text: PropTypes.string
}
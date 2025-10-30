import style from "./FriendList.module.css";


export const FriendList = (data) => {

    return (
        <div className="FriendList">
            <ul className={style.friends__list}>
{data.friends.map((friend, index) => {
          let statusEmoji = "";
          if (friend.isOnline === true) {
            statusEmoji = "🟢";
          } else {
            statusEmoji = "🔴";
          }

          return (
            <li key={index} className={style.friends__item}>
              <span className={style.status}>{statusEmoji}</span>
              {/* <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48" /> */}
              <p className={style.name}>{friend.name}</p>
            </li>
          );
        })}
        </ul>
        </div>
    )
}
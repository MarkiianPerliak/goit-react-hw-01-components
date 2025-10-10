export const FriendList = (data) => {
    return (
        <div className="FriendList">
            <ul>
                <li class="item">
                    <span class="status">{data.friends[0].isOnline}</span>
                    <img class="avatar" src={data.friends[0].avatar} alt="User avatar" width="48" />
                    <p class="name">{data.friends[0].name}</p>
                </li>
                                <li class="item">
                    <span class="status">{data.friends[1].isOnline}</span>
                    <img class="avatar" src={data.friends[1].avatar} alt="User avatar" width="48" />
                    <p class="name">{data.friends[1].name}</p>
                </li>
                                <li class="item">
                    <span class="status">{data.friends[2].isOnline}</span>
                    <img class="avatar" src={data.friends[2].avatar} alt="User avatar" width="48" />
                    <p class="name">{data.friends[2].name}</p>
                </li>
                                <li class="item">
                    <span class="status">{data.friends[3].isOnline}</span>
                    <img class="avatar" src={data.friends[3].avatar} alt="User avatar" width="48" />
                    <p class="name">{data.friends[3].name}</p>
                </li>
                                <li class="item">
                    <span class="status">{data.friends[4].isOnline}</span>
                    <img class="avatar" src={data.friends[4].avatar} alt="User avatar" width="48" />
                    <p class="name">{data.friends[4].name}</p>
                </li>
            </ul>
        </div>
    )
}
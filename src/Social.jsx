export const Social = (data) => {
    return (
        <div className="Social">
              <div class="description">
    <img
      src={data.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p class="name">{data.username}</p>
    <p class="tag">{data.tag}</p>
    <p class="location">{data.location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{data.stats[0]}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{data.stats[1]}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{data.stats[2]}</span>
    </li>
  </ul>
        </div>
    )
}
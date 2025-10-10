export const Statistics = (data) => {
    return (
        <div className="Statistics">
  <h2 class="title">{data.title}</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">{data.stats[0]}</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">{data.stats[1]}</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">{data.stats[2]}</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">{data.stats[3]}</span>
    </li>
  </ul>
        </div>
    )
}
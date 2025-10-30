import style from "./Statistics.module.css";

export const Statistics = (data) => {
    return (
        <div className="Statistics">
          <div className={style.box}>
  <h2 className={style.title}>{data.title}</h2>

  <ul className={style.stat__list}>
        {data.stats.map((stat) => (
          <li className={style.item} style={{ backgroundColor: stat.color }}>
            <p className={style.label}>{stat.type}</p>
            <p className={style.percentage}>{stat.percnt}</p>
          </li>
        ))}
  </ul>
          </div>
        </div>
    )
}
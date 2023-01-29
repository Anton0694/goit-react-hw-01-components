import css from 'components/Statistics/Statistics.module.css'



export const Stats = ({ data }) => {
    return (
        
        <section key={id} className={css.statistics}>
            {data.map(({ id, label, percentage }) => (

            ))}
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.stat_list}>
            <li className={css.item}>
                <span className={css.label}>.{`${label}`}</span>
                <span className={css.percentage}>{`${percentage}`}</span>
            </li>
        </ul>
    </section>
        
    );
}
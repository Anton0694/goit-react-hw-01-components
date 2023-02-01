import css from 'components/Statistics/Statistics.module.css'
import PropTypes from 'prop-types';



export const Statistics = ({data}) => {
    return (
        
            <section className={css.statistics}>
        <h2 className={css.title}> title </h2>

            <ul className={css.statList}>
            
                    {data.map(({ id, label, percentage }) => (
                    <li key={id} className={css.item}>
                <span className={css.label}>.{label}</span>
                <span className={css.percentage}>{percentage}%</span>
            </li>))}
                
            
        </ul>
    </section>
        
    );
}

/* Statistics.propTypes = {
    title: PropTypes.string,
    statistics: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }),
}; */

    

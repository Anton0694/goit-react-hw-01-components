import css from 'components/TransactionHistory/TransactionHistory.module.css'
import PropTypes from 'prop-types';



export const TransactionHistory = (transactions) => {
    return (<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {transactions.map(({ id, type, amount, currency }) => (
                <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
            ))} 
        
  </tbody>
</table>)
}

TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,

}
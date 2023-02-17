import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';


export const TransactionHistory = ({ items }) => {
  return (
      <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th key="type" className={css.tableHeader+' '+css.leftCell}>Type</th>
      <th key="amount" className={css.tableHeader}>Amount</th>
      <th key="currency" className={css.tableHeader+' '+css.rightCell}>Currency</th>
    </tr>
  </thead>

            <tbody>
                {items.map(item => (
                  <tr key={item.id} className={css.tableRow}>
                        <td className={css.tableCell}>{ item.type}</td>
                        <td className={css.tableCell}>{ item.amount}</td>
                        <td className={css.tableCell}>{ item.currency}</td>
                    </tr>
                ))}
    
  </tbody>
      </table>

    )
}

TransactionHistory.propTypes= {
    items: PropTypes.exact({
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
        id:PropTypes.number.isRequired,
    })
};
import css from "../../../src/components/TransactionHistory/TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.table}>
        <thead className={css.head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tbody}>
          {items.map((item) => {
            return (
              <tr className={css.row} key={item.id}>
                <td className={css.type}>{item.type}</td>
                <td className={css.amount}>{item.amount}</td>
                <td className={css.currency}>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;

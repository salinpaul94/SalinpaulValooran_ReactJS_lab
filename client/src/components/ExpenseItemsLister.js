import Table from 'react-bootstrap/Table';


const ExpenseItemsLister = ({expenseItems}) => {
  function expenseItemsTable() {
    return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Description</th>
          <th>Payee</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {
          expenseItems.map( (expenseItem, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{expenseItem.expenseDescription}</td>
                <td>{expenseItem.payeeName}</td>
                <td>{expenseItem.date}</td>
                <td>{expenseItem.price}</td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
    );
  }

  return (
    expenseItemsTable()
  )
}

export {ExpenseItemsLister}
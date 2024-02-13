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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
    );
  }
}

import {useEffect} from "react"

import {getAllExpenseItems} from "../services/expense"
import { ExpenseItemsLister } from "./ExpenseItemsLister"

import { useState } from "react"

const ExpenseTrackerApp = () => {
  
  const [expenseItems, setExpenseItems] = useState([]);

  useEffect( () => {
    
    const getAllExpenseItemsInvoker = async () => {

      const response = await getAllExpenseItems();
      console.log("Expense Items");
      console.log(JSON.stringify(response));

      setExpenseItems(response);
    }

    getAllExpenseItemsInvoker();
  }, [])

   
  return (
    <div>
      <h2>Expense Items</h2>
      <ExpenseItemsLister expenseItems={expenseItems}></ExpenseItemsLister>
    </div>
  )
}

export {ExpenseTrackerApp}
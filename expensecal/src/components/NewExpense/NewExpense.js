import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{

    const ExpenseDataHandler=(data)=>{
        const expenseData={
            ...data,
            id: Math.random().toString()
        };
props.onAddExpense(expenseData);
    }
    return(

        <div className="new-expense">
   
   <ExpenseForm onSaveData={ExpenseDataHandler}/>
        </div>
    )


}

export default NewExpense;
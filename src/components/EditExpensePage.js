import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  console.log(props.match.params.id);
  const id = props.match.params.id;
  

  // return <div>This is from my edit expense page {props.match.params.id} </div>;
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          const id = props.match.params.id;
          props.dispatch(editExpense(props.expense.id, expense));
          // props.expenseEdit(id, updates);
          // this.setState((prevState)=>({updateCheck: !prevState.updateCheck}));
          props.history.push("/");
        }}
      />
      <button onClick={()=>{
        props.dispatch(removeExpense({id: props.match.params.id}))
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(EditExpensePage);

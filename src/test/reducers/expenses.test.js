import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import moment from "moment";

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expenses if id not found", () => {
  const action = { type: "REMOVE_EXPENSE", id: "-1" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const newExpense = {
    description: "new expense",
    note: "new note",
    amount: 100,
    createdAt: moment(0)
      .add(5, "days")
      .valueOf()
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: newExpense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, newExpense]);
});

test("Should edit an expense", () => {
  const description = "Updated Rent";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("Should not edit an expense if id not found", () => {
  const description = "Updated Rent";
  const action = {
    type: "EDIT_EXPENSE",
    id: "not_to_be_found",
    updates: { description }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("Should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount"
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe("date");
});

test("Should set text filter filter", () => {
  const text = "This is my filter";
  const action = { type: "SET_TEXT_FILTER", text };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set start date filter", () => {
  const date = moment(0).add(4, "days");
  const action = { type: "SET_START_DATE", date };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(date);
});

test("Should set end date filter", () => {
  const date = moment(0).add(4, "days");
  const action = { type: "SET_END_DATE", date };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(date);
});

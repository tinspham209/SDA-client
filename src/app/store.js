import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../pages/Dashboard/dashboardSlice";
import toolbarReducer from "../components/Dashboard/Toolbar/ToolbarSlice";

const rootReducer = {
	dashboard: dashboardReducer,
	toolbar: toolbarReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

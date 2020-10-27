import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "../pages/Dashboard/dashboardSlice";
import toolbarReducer from "../components/Dashboard/Toolbar/ToolbarSlice";
import contentReducer from "../components/Dashboard/Content/ContentSlice";

const rootReducer = {
	dashboard: dashboardReducer,
	toolbar: toolbarReducer,
	content: contentReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./slice/dashboardSlice";
import toolbarReducer from "./slice/ToolbarSlice";
import contentReducer from "./slice/ContentSlice";

const rootReducer = {
	dashboard: dashboardReducer,
	toolbar: toolbarReducer,
	content: contentReducer,
};

const store = configureStore({
	reducer: rootReducer,
});

export default store;

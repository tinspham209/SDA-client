import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "../ItemTypes";

const dashboard = createSlice({
	name: DASHBOARD,
	initialState: {
		navbarBtnOnClick: "",
		toolbar: {
			isOpen: {
				climate: false,
				atmosphere: false,
				population: false,
				industry: false,
				forest: false,
				operators: false,
				visualization: true,
			},
			isDragItem: "",
			item: {
				index: "",
				indexCollapse: "",
			},
		},
		mashupContent: {
			itemIsSelect: [],
		},
		info: {
			isOpen: {
				properties: false,
				widgetInfos: true,
				outputLog: true,
			},
			widget: "",
			output: [],
		},
		viz: {
			maps: {
				data: [],
			},
		},
	},
	reducers: {
		setNavbarBtnOnClick: (state, action) => {
			state.navbarBtnOnClick = action.payload;
		},
		setToolbarIsOpen: (state, action) => {
			state.toolbar.isOpen[action.payload] = !state.toolbar.isOpen[
				action.payload
			];
		},
		setIsDragItem: (state, action) => {
			state.toolbar.isDragItem = action.payload;
		},
		setItemIsSelect: (state, action) => {
			state.mashupContent.itemIsSelect = action.payload;
		},
		setInfoIsOpen: (state, action) => {
			state.info.isOpen[action.payload] = !state.info.isOpen[action.payload];
		},
		setInfoWidget: (state, action) => {
			state.info.widget = action.payload;
		},
		setItemIndex: (state, action) => {
			state.toolbar.item.index = action.payload;
		},
		setIndexCollapse: (state, action) => {
			state.toolbar.item.indexCollapse = action.payload;
		},
		setOutput: (state, action) => {
			if (action.payload === "clear") {
				state.info.output = [];
			} else {
				state.info.output.unshift(action.payload);
			}
		},
		setMapsData: (state, action) => {
			console.log("action.payload", action.payload);
		},
	},
});

const { reducer, actions } = dashboard;

export const {
	setNavbarBtnOnClick,
	setToolbarIsOpen,
	setIsDragItem,
	setItemIsSelect,
	setInfoIsOpen,
	setInfoWidget,
	setItemIndex,
	setIndexCollapse,
	setOutput,
} = actions;

export default reducer;

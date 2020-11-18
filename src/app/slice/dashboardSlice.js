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
		},
		mashupContent: {
			itemIsSelect: [],
		},
		info: {
			isOpen: {
				properties: true,
				widgetInfos: true,
				outputLog: true,
			},
			widget: "",
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
} = actions;

export default reducer;

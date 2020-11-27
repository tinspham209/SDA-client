import { createSlice } from "@reduxjs/toolkit";
import { DASHBOARD } from "../ItemTypes";

const dashboard = createSlice({
	name: DASHBOARD,
	initialState: {
		navbar: {
			newOnClick: false,
			helpOnClick: false,
			example1OnClick: false,
			example2OnClick: false,
			example3OnClick: false,
			spinner: false,
		},
		toolbar: {
			isOpen: {
				climate: true,
				atmosphere: false,
				population: false,
				industry: true,
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
			port: [],
			portCanLinked: false,
			node: [],
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
				title: "",
				data: [],
			},
			column: {
				categories: [],
				data: [],
			},
			line: {
				categories: [],
				data: [],
			},
			table: {
				data: [],
			},
		},
		modal: {
			isDevelop: false,
		},
	},
	reducers: {
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
			const data = action.payload;
			data.map((item) => state.viz.maps.data.push(item));
		},
		setTitleMaps: (state, action) => {
			state.viz.maps.title = action.payload;
		},
		setColumnCategories: (state, action) => {
			state.viz.column.categories = action.payload;
		},
		setColumnData: (state, action) => {
			const data = action.payload;
			state.viz.column.data = data;
		},
		setLineCategories: (state, action) => {
			state.viz.line.categories = action.payload;
		},
		setLineData: (state, action) => {
			const data = action.payload;
			state.viz.line.data = data;
		},
		setModal: (state, action) => {
			state.modal[action.payload] = !state.modal[action.payload];
		},
		setTableData: (state, action) => {
			state.viz.table.data = action.payload;
		},
		setPortIsLinked: (state, action) => {
			state.mashupContent.port = action.payload;
		},
		setPortCanLinked: (state, action) => {
			state.mashupContent.portCanLinked = action.payload;
		},
		setIdNewNode: (state, action) => {
			state.mashupContent.node.push(action.payload);
		},
		removeIdNode: (state, action) => {
			state.mashupContent.node = [];
		},
		setNavbarNewOnClick: (state, action) => {
			state.navbar.newOnClick = action.payload;
		},
		setSpinner: (state, action) => {
			state.navbar.spinner = action.payload;
		},
	},
});

const { reducer, actions } = dashboard;

export const {
	setToolbarIsOpen,
	setIsDragItem,
	setItemIsSelect,
	setInfoIsOpen,
	setInfoWidget,
	setItemIndex,
	setIndexCollapse,
	setOutput,
	setTitleMaps,
	setMapsData,
	setColumnCategories,
	setColumnData,
	setLineCategories,
	setLineData,
	setModal,
	setTableData,
	setPortIsLinked,
	setPortCanLinked,
	setIdNewNode,
	removeIdNode,
	setNavbarNewOnClick,
	setSpinner,
} = actions;

export default reducer;

import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	info: {
		marginLeft: "2px",
		width: "320px",
		border: "1px solid #000",
	},
	listItem: {
		borderBottom: "1px solid rgba(0,0,0,0.2)",
	},
	collapse: {
		paddingLeft: 10,
		paddingRight: 10,
	},
}));

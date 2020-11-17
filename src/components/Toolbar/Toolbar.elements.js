import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	toolbar: {
		height: "calc( 100vh - 60px - 2px)",
		width: "185px",
		overflow: "auto",
		backgroundColor: "rgb(242, 242, 242)",
		border: "1px solid #000",
	},
	collapse: {
		paddingLeft: 10,
		paddingRight: 10,
	},
}));

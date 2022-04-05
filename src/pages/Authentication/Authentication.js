import React from "react";
import Grid from "@mui/material/Grid";
import BasicCard from "../../components/common/BasicCard/BasicCard";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import IconButton from "@mui/material/IconButton";

import SearchBar from "../../components/common/SearchBar/SearchBar";
import RefreshIcon from "@mui/icons-material/Refresh";

const Authentication = () => {
	const getHeader = () => {
		const handleChange = (value) => {
			console.log(value);
		};

		return (
			<div>
				<SearchBar
					placeholder="Search by email address, phone number, ou user ID"
					onChange={(e) => handleChange(e.target.value)}
				/>

				{/* <CommonButton /> */}
				<IconButton>
					<RefreshIcon />
				</IconButton>
			</div>
		);
	};

	return (
		<Grid item xs={8} sx={{ marginLeft: "320px" }}>
			<BasicCard header={getHeader()} />
		</Grid>
	);
};

export default Authentication;

/*  LO PASÉ AL GLOBAL-STYLE



import CommonButton from "../../components/common/CommonButton/CommonButton";

const buttonStyles = {
	fontSize: "0.875rem",
	fontWeight: 600,
	textTransform: "capitalize",
	borderRadius: 2.5,
	"&.MuiButton-contained": {
		backgroundColor: "#009be5",
		"&:hover": {
			backgroundColor: "#006db3",
		},
	},
	"&.MuiButton-outlined": {
		color: "#fff",
		borderColor: "#fff",
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
};

const Authentication = () => {
	return (
		<Grid item xs={6}>
			Authentication page.&nbsp;
			<CommonButton sx={buttonStyles} variant="contained">
				Add user
			</CommonButton>
			<CommonButton sx={buttonStyles} variant="outlined">
				Add user
			</CommonButton>
			
		</Grid>
	);
};





*/

/* 
<CommonButton variant="contained" color="success" sx={buttonStyles}>
	Text
</CommonButton>
*/

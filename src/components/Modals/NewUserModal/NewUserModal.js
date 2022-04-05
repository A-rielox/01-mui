import React from "react";
import BasicModal from "../../common/BasicModal/BasicModal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const NewUserModal = ({ open, onClose }) => {
	const modalStyles = {
		inputFields: {
			display: "flex",
			flexDirection: "column",
			marginTop: "20px",
			marginBottom: "15px",
			".MuiInput-root": {
				marginBottom: "20px",
			},
		},
	};

	const getContent = () => {
		<Box sx={modalStyles.inputFields}>
			<TextField
				placeholder="User ID"
				name="userId"
				label="User ID"
				required
				// {...register("userId")}
				// error={errors.userId ? true : false}
				error
				// helperText={errors.userId?.message}
				helperText={"mensaje de error"}
				// value={values.userId}
				// onChange={(event) =>
				// 	handleChange({ ...values, userId: event.target.value })
				// }
			/>
		</Box>;
	};

	return (
		<BasicModal
			open={open}
			onClose={onClose}
			title="New user"
			subTitle='Fill out inputs and hit "submit" button.'
			content={getContent()}
			validate={() => {}}
		/>
	);
};

export default NewUserModal;

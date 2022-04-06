import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { modalStyles } from "./styles";
import CommonButton from "../CommonButton/CommonButton";
/* 

23.28
*/
const BasicModal = ({ open, onClose, title, subTitle, content, onSubmit }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<Box sx={modalStyles.wrapper}>
				<Typography variant="h6" component="h2">
					{/* New user */}
					{title}
				</Typography>
				<Typography sx={{ mt: 2 }}>
					{/* Fill out inputs and hit "submit" button. */}
					{subTitle}
				</Typography>

				{content}

				{/* los reemplazo con el content

				<Box sx={modalStyles.inputFields}>
					<Input placeholder="E-mail" />
					<Input placeholder="Phone number" />
					<Input placeholder="User id" />
				</Box>
				
				*/}
				<Box sx={modalStyles.buttons}>
					<CommonButton variant="contained" onClick={onSubmit}>
						Submit
					</CommonButton>

					<CommonButton onClick={onClose}>Cancel</CommonButton>
				</Box>
			</Box>
		</Modal>
	);
};

export default BasicModal;

/* 
export const modalStyles = {
    wrapper: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    },
    inputFields: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px',
        marginBottom: '15px',
        '.MuiInput-root': {
            marginBottom: '20px',
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'end',
    }
};

*/

/* NewUserModal


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
				// helperText={errors.userId?.message}
				// value={values.userId}
				// onChange={(event) =>
				// 	handleChange({ ...values, userId: event.target.value })
				// }
			/>
			<TextField
				placeholder="Email"
				name="email"
				label="Email"
				// required
				// {...register("email")}
				// error={errors.email ? true : false}
				// helperText={errors.email?.message}
				// value={values.email}
				// onChange={(event) =>
				// 	handleChange({ ...values, email: event.target.value })
				// }
			/>
			<TextField
				placeholder="Phone number"
				name="phoneNumber"
				label="Phone number"
				// required
				// {...register("phoneNumber")}
				// error={errors.phoneNumber ? true : false}
				// helperText={errors.phoneNumber?.message}
				// value={values.phoneNumber}
				// onChange={(event) =>
				// 	handleChange({ ...values, phoneNumber: event.target.value })
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
		></BasicModal>
	);
};

export default NewUserModal;

*/

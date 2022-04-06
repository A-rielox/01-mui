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
					{title}
				</Typography>

				<Typography sx={{ mt: 2 }}>{subTitle}</Typography>

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

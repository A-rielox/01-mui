import React from "react";

import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../BasicMenu/BasicMenu";

const NotificationBell = ({ iconColor /* , badgeContent */ }) => {
	// ----- para basic menu
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleOpen = (e) => {
		setAnchorEl(e.currentTarget);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	// ----- fin basic menu

	const notifications = [
		{
			id: 0,
			label: "First notification",
		},
		{
			id: 1,
			label: "Second notification",
		},
	];

	const newNotifications = `You have ${notifications.length} new notifications`;
	const noNotifications = "No new notifications";

	return (
		<>
			<Tooltip
				title={notifications.length ? newNotifications : noNotifications}
			>
				<IconButton
					color={iconColor}
					onClick={notifications.length ? handleOpen : null}
					anchorEl={anchorEl} // creo q no se necesita
				>
					<Badge badgeContent={notifications.length} color="error">
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Tooltip>

			<BasicMenu
				open={open}
				anchorEl={anchorEl} /* para q aparesca debajo de este elemento */
				handleClose={handleClose}
				menuItems={notifications}
			/>
		</>
	);
};

export default NotificationBell;

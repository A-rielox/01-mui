import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import SearchIcon from "@mui/icons-material/Search";

const BasicCard = ({ header, content }) => {
	return (
		<Card>
			{header}
			<CardContent>{content}</CardContent>
		</Card>
	);
};

export default BasicCard;

/* 

Card
Cards contain content and actions about a single subject.


Cards are surfaces that display content and actions on a single topic.

They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.

Basic card
Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.



====================================

<Card sx={{ maxWidth: 345 }}>
	<CardHeader
		avatar={
			<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
				R
			</Avatar>
		}
		action={
			<IconButton aria-label="settings">
				<MoreVertIcon />
			</IconButton>
		}
		title="Shrimp and Chorizo Paella"
		subheader="September 14, 2016"
	/>

	<CardMedia
		component="img"
		height="194"
		image="/static/images/cards/paella.jpg"
		alt="Paella dish"
	/>
   
	<CardContent>
		<Typography variant="body2" color="text.secondary">
			This impressive paella is a perfect party dish and a fun meal to cook
			together with your guests. Add 1 cup of frozen peas along with the
			mussels, if you like.
		</Typography>
	</CardContent>
</Card>;

*/

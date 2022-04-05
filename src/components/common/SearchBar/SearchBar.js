import React from "react";

import Input from "@mui/material/Input";

import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder, onChange }) => {
	return (
		<div>
			<SearchIcon />
			<Input placeholder={placeholder} onChange={onChange} />
		</div>
	);
};

export default SearchBar;

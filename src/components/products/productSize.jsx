import React from "react";
import FormControl from "@mui/material/FormControl";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, size, theme) {
  return {
    fontWeight:
      size.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const ProductSize = ({ sizeAvailable }) => {
  const theme = useTheme();
  const [size, setsizeName] = React.useState([sizeAvailable[0]]);

  const handleSizeChange = (event) => {
    const {
      target: { value },
    } = event;
    setsizeName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <FormControl sx={{ marginBottom: 2, width: 300 }}>
      <InputLabel id="demo-multiple-name-label">Size</InputLabel>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={size}
        onChange={handleSizeChange}
        input={<OutlinedInput label="Name" />}
        MenuProps={MenuProps}
        required
      >
        {sizeAvailable.map((item) => (
          <MenuItem
            key={item}
            value={item}
            style={getStyles(item, size, theme)}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductSize;

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import data from "../../data/allProducts.json";
import "../../styles/collection.css";
import { Link } from "react-router-dom";

const ProductsGrid = ({ category }) => {
  const [clickedItems, setClickedItems] = useState({});

  const handleClick = (id) => {
    setClickedItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  let filteredData = data;
  if (category) {
    filteredData = data.filter((item) => item.type === category);
  }

  return (
    <Box
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      gap={3}
      justifyContent="center"
      mt={2}
    >
      {filteredData.map((item) => {
        const isClicked = clickedItems[item.id];
        return (
          <Box className="card" key={item.id}>
            <Link to={`/productDetails/${item.id}`}>
              <Box className="image">
                <img src={item["images"][0].url} width="100%" height="240px" />
              </Box>
            </Link>
            <Typography className="title">{item.title}</Typography>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography className="price">{item.price}</Typography>
              <IconButton
                onClick={() => handleClick(item.id)}
                color={isClicked ? "error" : "default"}
              >
                {isClicked ? (
                  <Favorite fontSize="medium" />
                ) : (
                  <FavoriteBorder fontSize="medium" />
                )}
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductsGrid;

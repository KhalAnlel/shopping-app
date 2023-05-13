import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Filter from "./collection/filter";
import ProductsGrid from "./collection/productsGrid";
import SortBy from "./collection/sortBy";
import PerPage from "./collection/perPage";

export const Collection = () => {
  const { category } = useParams();
  return (
    <Box p={2}>
      <Box>
        <Typography fontWeight={700} fontSize={20}>
          ANIME {category.toLocaleUpperCase()}
        </Typography>
        <Typography mt={3}>
          Buy High Quality Supercool And Cute Designed Anime {category} For Men
          Or Women With Free Shipping To All Over The World On All Order.
        </Typography>
      </Box>
      <Box>
        <Stack
          direction="row"
          mt={4}
          alignItems="center"
          justifyContent="flex-end"
          gap={4}
        >
          <Filter />
          <PerPage />
          <SortBy />
        </Stack>
        <ProductsGrid />
      </Box>
    </Box>
  );
};

import React from "react";
import { Box, HStack, Text, Button } from "@chakra-ui/react";

export const Pagination = ({ page, setPage }) => {
  const handleClick = (val) => {
    setPage(page + val);
  };

  return (
    <Box>
      <HStack
        margin="auto"
        justifyContent="end"
        maxW={"90%"}
        marginTop="3"
        marginBottom={"3"}
      >
        <Button disabled={page === 1} onClick={() => handleClick(-1)}>
          Prev
        </Button>
        <Text>{page}</Text>
        <Button disabled={page === 6} onClick={() => handleClick(1)}>
          Next
        </Button>
      </HStack>
    </Box>
  );
};

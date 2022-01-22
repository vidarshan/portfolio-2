import { Button, Col, Group, Text } from "@mantine/core";
import React from "react";

const Header = () => {
  return (
    <Group
      position="apart"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        height: "90vh",
        minWidth: "100%",
      }}
    >
      <Text size="xl" weight={700}>
        Hello
      </Text>
      <Text size="xl" weight={700}>
        {`I'm Vidarshan`}
      </Text>
      <Text size="xl" weight={700}>
        A Software Engineer
      </Text>
    </Group>
  );
};

export default Header;

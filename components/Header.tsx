import { Col, Text } from "@mantine/core";
import React from "react";

const Header = () => {
  return (
    <Col
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      span={12}
    >
      <Col
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          height: "90vh",
        }}
        span={12}
      >
        <Text
          component="span"
          align="center"
          variant="gradient"
          sx={{ fontSize: "60px" }}
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          // size="xl"
          weight={700}
        >
          Hello
        </Text>
        <Text
          component="span"
          align="center"
          variant="gradient"
          sx={{ fontSize: "60px" }}
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          // size="xl"
          weight={700}
        >
          I'm Vidarshan
        </Text>
        <Text
          component="span"
          align="center"
          variant="gradient"
          sx={{ fontSize: "60px" }}
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          // size="xl"
          weight={700}
        >
          A Software Engineer
        </Text>
      </Col>
    </Col>
  );
};

export default Header;

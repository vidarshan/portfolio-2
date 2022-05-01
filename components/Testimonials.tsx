import { Anchor, Avatar, Card, Group } from "@mantine/core";
import React from "react";
import profileimg from "../images/myimage.webp";

const Testimonials = () => {
  return (
    <Card withBorder>
      <Group>
        <Avatar src={profileimg.src} size="lg" radius="xs" />
        <Anchor>John Doe</Anchor>
      </Group>
    </Card>
  );
};

export default Testimonials;

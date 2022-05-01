import {
  Anchor,
  Avatar,
  Blockquote,
  Card,
  Group,
  Text,
  Image,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import hasith from "../images/hasith.webp";

interface ITestimonialCard {
  id: number;
  name: string;
  designation: string;
  description: string;
  link: string;
  image: string;
}

const TestimonialCard: React.FC<PropsWithChildren<ITestimonialCard>> = ({
  id,
  name,
  designation,
  description,
  link,
  image,
}) => {
  return (
    <Card mt={20} key={id} padding={20} withBorder>
      <Group position="apart">
        <Group>
          <Avatar src={image} radius="xl" />
          <div>
            <Text size="sm" weight={600}>
              {name}
            </Text>
            <Text size="sm" weight={600}>
              {designation}
            </Text>
          </div>
        </Group>
      </Group>
      <Blockquote mt={10}>
        <Text align="justify" size="sm" weight={400}>
          {description}
        </Text>
      </Blockquote>
      <Group position="right">
        <Anchor href={link}>
          <BiRightArrowAlt />
        </Anchor>
      </Group>
    </Card>
  );
};

export default TestimonialCard;

import {
  Anchor,
  Avatar,
  Blockquote,
  Card,
  Group,
  Text,
  Image,
  ActionIcon,
  Spoiler,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import {
  BsArrow90DegDown,
  BsArrowBarRight,
  BsArrowRight,
} from "react-icons/bs";
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
    <Card mt={30} key={id} padding={20} withBorder>
      <Group position="apart">
        <Group>
          <Avatar src={image} radius="xl" />
          <div>
            <Text color="blue" size="sm" weight={600}>
              {name}
            </Text>
            <Text size="xs" weight={600}>
              {designation}
            </Text>
          </div>
        </Group>
      </Group>
      <Blockquote mt={20}>
        <Spoiler maxHeight={120} showLabel="Show more" hideLabel="Show less">
          <Text align="justify" size="sm" weight={600}>
            {description}
          </Text>
        </Spoiler>
      </Blockquote>
      <Group mt={20} position="right">
        <Anchor href={link}>
          <ActionIcon variant="hover">
            <BsArrowRight />
          </ActionIcon>
        </Anchor>
      </Group>
    </Card>
  );
};

export default TestimonialCard;

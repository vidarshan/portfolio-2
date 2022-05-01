import { Anchor, Avatar, Blockquote, Card, Group, Text } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import profileimg from "../images/myimage.webp";

interface ITestimonialCard {
  id: number;
  name: string;
  designation: string;
  description: string;
  link: string;
}

const TestimonialCard: React.FC<PropsWithChildren<ITestimonialCard>> = ({
  id,
  name,
  designation,
  description,
  link,
}) => {
  return (
    <Card key={id} padding={20} withBorder>
      <Group position="apart">
        <Group>
          <Avatar src={profileimg.src} />
          <div>
            <Text size="sm" weight={600}>
              {name}
            </Text>
            <Text size="sm" weight={600}>
              {designation}
            </Text>
          </div>
        </Group>
        <Anchor href={link}>
          <BiRightArrowAlt />
        </Anchor>
      </Group>
      <Blockquote mt={10} color="cyan">
        <Text align="justify" size="sm" weight={600}>
          {description}
        </Text>
      </Blockquote>

      {/* <Anchor size="sm" weight={700}>
          John Doe
        </Anchor> */}
    </Card>
  );
};

export default TestimonialCard;

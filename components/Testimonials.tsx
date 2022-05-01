import { Anchor, Avatar, Blockquote, Card, Group, Text } from "@mantine/core";
import React from "react";
import { BiRightArrowAlt, BiStar } from "react-icons/bi";
import profileimg from "../images/myimage.webp";

const Testimonials = () => {
  return (
    <Card padding={20} withBorder>
      <Group position="apart">
        <Group>
          <Avatar src={profileimg.src} />
          <div>
            <Text size="sm" weight={600}>
              Hasith Jayasekara
            </Text>
            <Text size="sm" weight={600}>
              Senior Software Engineer
            </Text>
          </div>
        </Group>
        <Anchor>
          <BiRightArrowAlt />
        </Anchor>
      </Group>
      <Blockquote mt={10} color="cyan">
        <Text align="justify" size="sm" weight={600}>
          Vidarshan is a highly motivated, creative and goal oriented software
          engineer with a driven mindset. He writes clean code that gets the job
          done with minimal supervision. In many different software projects I
          observed his willingness to experiment and learn new tools and
          techniques to adapt. He is an invaluable developer to any team looking
          for success.
        </Text>
      </Blockquote>

      {/* <Anchor size="sm" weight={700}>
          John Doe
        </Anchor> */}
    </Card>
  );
};

export default Testimonials;

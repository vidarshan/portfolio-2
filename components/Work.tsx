import React from "react";
import { Text, Timeline, Card, Badge, Group } from "@mantine/core";
import { BsCheckCircle, BsDash, BsDashCircle, BsDashLg } from "react-icons/bs";

const Work = () => {
  return (
    <Card className="content-spacing" withBorder radius='xs'>
      <Timeline
        color="gray"
        active={2}
        bulletSize={14}
        lineWidth={1}
        radius="xs"
      >
        <Timeline.Item
          // bullet={<BsDash />}
          align="right"
          title="Freelance Web Developer "
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Excalibur Systems, Sri Lanka
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Created web based applications for clients desiring solutions for
            their day-to-day problems that occur in their small/mid scaled
            businesses.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              Postgres
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              Typescript
            </Badge>
          </Group>
          <Text weight={500} className="row-bottom-top-spacing" size="xs">
            12-2020 &#8212; 04-2021
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<BsDash />}
          align="left"
          title="Trainee Software Engineer"
          lineVariant="dashed"
        >
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Worked as a frontend software engineer and implemented new
            functionalities to existing projects along with replacing old and
            outdated user interfaces to modern user-friendly user interfaces.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="orange" variant="dot" radius="xs">
              Semantic Ui
            </Badge>
            <Badge size="md" color="pink" variant="dot" radius="xs">
              SCSS
            </Badge>
          </Group>
          <Text weight={500} className="row-bottom-top-spacing" size="xs">
            04-2021 &#8212; 09-2021
          </Text>
        </Timeline.Item>

        <Timeline.Item bullet={<BsDash />} title="Associate Software Engineer">
          <Text
            className="row-bottom-top-spacing-half"
            weight={600}
            color="blue"
            size="sm"
          >
            Beta Launch, Sri Lanka
          </Text>
          <Text weight={700} color="dimmed" size="sm">
            Worked as a full-stack software engineer, implemented new
            functionalities along with improving existing functionalities in
            special purpose web applications. Gained knowledge on end-to-end
            testing frameworks for web applications.
          </Text>
          <Group className="row-bottom-top-spacing">
            <Badge size="md" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="md" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="md" color="gray" variant="dot" radius="xs">
              Cypress.io
            </Badge>
            <Badge size="md" color="blue" variant="dot" radius="xs">
              MySQL
            </Badge>
          </Group>
          <Text weight={500} className="row-bottom-top-spacing" size="xs">
            09-2021 &#8212; 03-2021
          </Text>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Work;

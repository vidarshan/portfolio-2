import React from "react";
import { Text, Timeline, Col, Card, Badge, Group } from "@mantine/core";
import { BsCheckCircleFill, BsDashCircleFill } from "react-icons/bs";

const Work = () => {
  return (
    <Card style={{ marginTop: "2rem" }}>
      <Timeline color="blue" active={2} bulletSize={24} lineWidth={3}>
        <Timeline.Item
          bullet={<BsDashCircleFill />}
          align="right"
          title="Freelance Web Developer"
        >
          <Text weight={500} color="dimmed" size="sm">
            Created web based applications for clients desiring solutions for
            their day-to-day problems that occur in their small/mid scaled
            businesses.
          </Text>
          <Group
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          >
            <Badge size="lg" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="xs">
              Postgres
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="xs">
              Typescript
            </Badge>
          </Group>
          <Text size="xs" style={{ marginTop: 4 }}>
            04-2021 &#8212;&#8212; 09-2021
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<BsDashCircleFill />}
          align="left"
          title="Trainee Software Engineer"
          lineVariant="dashed"
        >
          <Text weight={500} color="dimmed" size="sm">
            Worked as a frontend software engineer and implemented new
            functionalities to existing projects along with replacing old and
            outdated user interfaces to modern user-friendly user interfaces.
          </Text>
          <Group
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          >
            <Badge size="lg" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="lg" color="orange" variant="dot" radius="xs">
              Semantic Ui
            </Badge>
            <Badge size="lg" color="pink" variant="dot" radius="xs">
              SCSS
            </Badge>
          </Group>
          <Text size="xs" style={{ marginTop: 4 }}>
            04-2021 &#8212;&#8212; 09-2021
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<BsCheckCircleFill />}
          title="Associate Software Engineer"
        >
          <Text weight={500} color="dimmed" size="sm">
            Worked as a full-stack software engineer, implemented new
            functionalities along with improving existing functionalities in
            special purpose web applications. Gained knowledge on end-to-end
            testing frameworks for web applications.
          </Text>
          <Group
            sx={{
              marginTop: ".5rem",
              marginBottom: ".5rem",
            }}
          >
            <Badge size="lg" variant="dot" radius="xs">
              React JS
            </Badge>
            <Badge size="lg" color="green" variant="dot" radius="xs">
              Node JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="xs">
              Express JS
            </Badge>
            <Badge size="lg" color="gray" variant="dot" radius="xs">
              Cypress.io
            </Badge>
            <Badge size="lg" color="blue" variant="dot" radius="xs">
              MySQL
            </Badge>
          </Group>
          <Text size="xs" style={{ marginTop: 4 }}>
            09-2021 &#8212;&#8212; Present
          </Text>
        </Timeline.Item>
      </Timeline>
    </Card>
  );
};

export default Work;

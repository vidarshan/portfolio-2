import React from "react";
import { Text, Timeline } from "@mantine/core";
import { BsCheckCircleFill, BsDashCircleFill } from "react-icons/bs";

const Work = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <Timeline color="red" active={2} bulletSize={24} lineWidth={3}>
        <Timeline.Item
          bullet={<BsDashCircleFill />}
          align="right"
          title="Freelance Web Developer"
        >
          <Text weight={600} color="dimmed" size="md">
            Created web based applications for clients desiring solutions for
            their day-to-day problems that occur in their small/mid scaled
            businesses.
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            Worked with &#8212; React JS, Relational Databases, Node JS and
            Express JS
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            04-2021 &#8212; 09-2021
          </Text>
        </Timeline.Item>
        <Timeline.Item
          bullet={<BsDashCircleFill />}
          align="left"
          title="Trainee Software Engineer"
          lineVariant="dashed"
        >
          <Text color="dimmed" size="sm">
            Worked as a frontend software engineer and implemented new
            functionalities to existing projects along with replacing old and
            outdated user interfaces to modern user-friendly user interfaces.
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            Worked with &#8212; React JS, Semantic UI and SCSS
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            04-2021 &#8212; 09-2021
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<BsCheckCircleFill />}
          title="Associate Software Engineer"
        >
          <Text color="dimmed" size="sm">
            Worked as a full-stack software engineer, implemented new
            functionalities along with improving existing functionalities in
            special purpose web applications. Gained knowledge on end-to-end
            testing frameworks for web applications.
          </Text>
          <Text size="xs" style={{ marginTop: 4 }}>
            09-2021 - Present
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default Work;

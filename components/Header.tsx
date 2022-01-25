import { Group, Text, Image, Kbd } from "@mantine/core";
import technologist from "../images/technologist.png";
import wave from "../images/wave.png";
import React from "react";
import { BsCommand } from "react-icons/bs";
import { useOs } from "@mantine/hooks";

const Header = () => {
  const os = useOs();
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
      <Group>
        <Text className="header-text" size="xl" weight={700}>
          Hello
        </Text>
        <Image
          className="header-img"
          height={40}
          width={40}
          src={wave.src}
          alt="wave"
        />
      </Group>
      <Text className="header-text" size="xl" weight={700}>
        {`I'm Vidarshan.`}
      </Text>
      <Group>
        <Text className="header-text" size="xl" weight={700}>
          A Software Engineer.
        </Text>
        <Image
          className="header-img"
          height={40}
          width={40}
          src={technologist.src}
          alt="avatar"
        />
      </Group>
      {os === "macos" || os === "windows" || os === "linux" ? (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Kbd>{os === "macos" ? <BsCommand /> : "Ctrl"}</Kbd>
          <span style={{ margin: "0 5px" }}>+</span>
          <Kbd>j</Kbd>
          <Text className="word-spacing-small" weight={600} size="xs">
            {" "}
            to toggle theme
          </Text>
        </div>
      ) : null}
    </Group>
  );
};

export default Header;

import { Group, Text, Image, Kbd } from "@mantine/core";
import technologist from "../images/technologist.webp";
import wave from "../images/wave.webp";
import React from "react";
import { BsCommand } from "react-icons/bs";
import { useOs } from "@mantine/hooks";
import { motion } from "framer-motion";

const Header = () => {
  const os = useOs();

  const words = [
    <Group key={1}>
      <Text className="header-text" size="xl" weight={700}>
        Hello
      </Text>
      <Image height={40} width={40} src={wave.src} alt="wave" />
    </Group>,
    <Text
      className="header-text"
      size="xl"
      weight={700}
      key={2}
    >{`I'm Vidarshan.`}</Text>,
    <Group key={3}>
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
    </Group>,
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {words.map((index) => (
          <motion.div key={index.key} className="item" variants={item}>
            {index}
          </motion.div>
        ))}
      </motion.div>
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

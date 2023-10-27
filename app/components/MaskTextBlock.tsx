"use client";
import React from "react";
import styles from "./styles.module.css";
import MaskText from "./MaskText";

export default function MaskTextBlock() {
  const phrases = [
    "It is a long established fact",
    "that a reader will be distracted",
    "by the readable content of a page",
    "when looking at its layout.",
  ];
  return (
    <div className={"flex flex-col items-center  gap-32 "}>
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
      <MaskText phrases={phrases} />
    </div>
  );
}

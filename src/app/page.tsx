"use client";

import Profile from "@/components/profile";
import InteractionGradient from "@/components/interaction-gradient";
import { FixedGradient } from "@/components/fixed-gradient";

export default function Home() {
  return (
    <>
      <FixedGradient />
      <InteractionGradient />
      <Profile />
    </>
  );
}

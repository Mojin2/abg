"use client";
import BottomNav from "@/components/BottomNav";
import Header from "@/components/Header";
import MainCharacterSiblings from "@/components/MainCharacterSiblings";
import ContentLayout from "./contentLayout";

export default function Home() {
  return (
    <div>
      <Header title="DashBoard" detail="Custom your dashboard" />
      <ContentLayout>
        <div>
          <MainCharacterSiblings />
        </div>
      </ContentLayout>
    </div>
  );
}

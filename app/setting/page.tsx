import BottomNav from "@/components/BottomNav";
import ContentLayout from "../contentLayout";

export default function Setting() {
  return (
    <div>
      <ContentLayout>
        <div className="flex items-center justify-center w-full h-full bg-rose-500 text-white font-extrabold text-5xl">
          Setting
        </div>
      </ContentLayout>
      <BottomNav />
    </div>
  );
}

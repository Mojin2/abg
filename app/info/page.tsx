import BottomNav from "@/components/BottomNav";
import ContentLayout from "../contentLayout";

export default function Info() {
  return (
    <div>
      <ContentLayout>
        <div className="flex items-center justify-center w-full h-full bg-amber-500 text-white font-extrabold text-5xl">
          Info
        </div>
      </ContentLayout>
      <BottomNav />
    </div>
  );
}

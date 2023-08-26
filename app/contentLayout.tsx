export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16 md:pl-60 w-screen h-screen bg-slate-100 pb-2 ">
      {children}
    </div>
  );
}

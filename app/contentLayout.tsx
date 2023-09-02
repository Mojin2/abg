export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-screen h-screen bg-slate-100">{children}</div>;
}

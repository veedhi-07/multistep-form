type AppLayoutProps = {
  title: string;
  children: React.ReactNode;
};
const AppLayout = ({ title, children }: AppLayoutProps) => {
  return (
    <div>
      <div className="min-h-screen w-screen bg-linear-to-b from-rose-200 via-pink-100 to-purple-200 flex items-center justify-center p-6">
        <div className="flex flex-col  items-center gap-12 max-w-4xl w-full border border-black/20 rounded-3xl p-8 bg-transparent!">
          <h3 className="text-4xl font-bold text-black">{title}</h3>

          <div className="w-full md:w-100 flex flex-col gap-6 text-black">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppLayout;

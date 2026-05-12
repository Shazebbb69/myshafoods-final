export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-[250px] min-h-screen bg-[#E6B84A] text-black">
        <div className="p-6">
          <h2 className="text-lg font-semibold tracking-tight">Admin Panel</h2>

          <ul className="mt-5 space-y-1">
            <li className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-black/10 hover:translate-x-0.5">
              Dashboard
            </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-black/10 hover:translate-x-0.5">
              Products
            </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-black/10 hover:translate-x-0.5">
              Orders
            </li>
            <li className="rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ease-in-out hover:bg-black/10 hover:translate-x-0.5">
              Customers
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 bg-white px-6 py-8 transition-colors duration-200 ease-in-out">
        {children}
      </main>
    </div>
  );
}

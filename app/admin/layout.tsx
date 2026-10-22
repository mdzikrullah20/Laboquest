
import type { ReactNode } from "react";
import AdminSidebar from "../Components/admin/admin-sidebar";
import AdminHeader from "../Components/admin/admin-header";

export default function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="min-h-screen md:ml-64">
        <AdminHeader />

        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

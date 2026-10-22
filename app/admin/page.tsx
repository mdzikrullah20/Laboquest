
import {
  IndianRupee,
  ShoppingBag,
  Users,
  Package,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Clock,
  CheckCircle,
  Truck,
} from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "₹2,45,680",
    change: "+12.8%",
    positive: true,
    icon: IndianRupee,
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "Total Orders",
    value: "1,248",
    change: "+8.2%",
    positive: true,
    icon: ShoppingBag,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Total Customers",
    value: "856",
    change: "+5.4%",
    positive: true,
    icon: Users,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Total Products",
    value: "342",
    change: "-2.1%",
    positive: false,
    icon: Package,
    color: "bg-orange-50 text-orange-600",
  },
];

const orders = [
  {
    id: "#ORD-1025",
    customer: "Rahul Sharma",
    product: "Wireless Headphones",
    amount: "₹2,499",
    status: "Delivered",
  },
  {
    id: "#ORD-1024",
    customer: "Priya Singh",
    product: "Smart Watch",
    amount: "₹4,999",
    status: "Processing",
  },
  {
    id: "#ORD-1023",
    customer: "Amit Kumar",
    product: "Running Shoes",
    amount: "₹1,899",
    status: "Pending",
  },
  {
    id: "#ORD-1022",
    customer: "Neha Verma",
    product: "Travel Backpack",
    amount: "₹1,299",
    status: "Delivered",
  },
  {
    id: "#ORD-1021",
    customer: "Arjun Patel",
    product: "Bluetooth Speaker",
    amount: "₹2,199",
    status: "Shipped",
  },
];

const statusStyles: Record<string, string> = {
  Delivered: "bg-emerald-50 text-emerald-700",
  Processing: "bg-blue-50 text-blue-700",
  Pending: "bg-amber-50 text-amber-700",
  Shipped: "bg-violet-50 text-violet-700",
};

const activities = [
  {
    icon: CheckCircle,
    color: "bg-emerald-100 text-emerald-600",
    title: "Order delivered",
    description: "Order #ORD-1022 was delivered",
    time: "10 minutes ago",
  },
  {
    icon: ShoppingBag,
    color: "bg-blue-100 text-blue-600",
    title: "New order received",
    description: "Order #ORD-1025 was placed",
    time: "25 minutes ago",
  },
  {
    icon: Users,
    color: "bg-violet-100 text-violet-600",
    title: "New customer registered",
    description: "A new customer joined your store",
    time: "1 hour ago",
  },
  {
    icon: Truck,
    color: "bg-amber-100 text-amber-600",
    title: "Order shipped",
    description: "Order #ORD-1021 is on its way",
    time: "2 hours ago",
  },
];

const sales = [
  { day: "Mon", height: 42 },
  { day: "Tue", height: 66 },
  { day: "Wed", height: 52 },
  { day: "Thu", height: 82 },
  { day: "Fri", height: 60 },
  { day: "Sat", height: 95 },
  { day: "Sun", height: 73 },
];

export default function AdminDashboard() {
  return (
    <div className="mx-auto max-w-[1600px] space-y-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back! Here&apos;s what&apos;s happening with your store.
          </p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
        >
          + Download Report
        </button>
      </div>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const ChangeIcon = stat.positive
            ? ArrowUpRight
            : ArrowDownRight;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.color}`}
                >
                  <Icon size={22} />
                </div>

                <button
                  type="button"
                  aria-label={`More options for ${stat.title}`}
                  className="text-gray-400 hover:text-gray-700"
                >
                  <MoreHorizontal size={21} />
                </button>
              </div>

              <p className="mt-4 text-sm font-medium text-gray-500">
                {stat.title}
              </p>

              <div className="mt-1 flex flex-wrap items-end justify-between gap-2">
                <h2 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                    stat.positive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  <ChangeIcon size={15} />
                  {stat.change}
                </span>
              </div>

              <p className="mt-2 text-xs text-gray-400">
                Compared with last month
              </p>
            </div>
          );
        })}
      </section>

      {/* Sales chart and order summary */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6 xl:col-span-2">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="font-semibold text-gray-900">
                Sales Overview
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Your weekly sales performance
              </p>
            </div>

            <select
              aria-label="Sales period"
              defaultValue="week"
              className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-indigo-500"
            >
              <option value="week">This week</option>
              <option value="month">This month</option>
              <option value="year">This year</option>
            </select>
          </div>

          <div className="mt-8 flex h-56">
            <div className="flex flex-col justify-between pb-7 pr-3 text-xs text-gray-400">
              <span>₹10k</span>
              <span>₹7.5k</span>
              <span>₹5k</span>
              <span>₹2.5k</span>
              <span>₹0</span>
            </div>

            <div className="relative flex flex-1 items-end justify-around gap-2 border-b border-gray-200 pb-0">
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between pb-7">
                {[0, 1, 2, 3].map((line) => (
                  <div
                    key={line}
                    className="border-t border-dashed border-gray-100"
                  />
                ))}
                <div />
              </div>

              {sales.map((item) => (
                <div
                  key={item.day}
                  className="relative z-10 flex h-full flex-1 flex-col items-center justify-end gap-2"
                >
                  <div
                    title={`${item.day}: ${item.height}% of chart scale`}
                    style={{ height: `${item.height}%` }}
                    className="w-full max-w-10 rounded-t-md bg-indigo-500 transition hover:bg-indigo-700"
                  />

                  <span className="absolute -bottom-6 text-xs text-gray-400">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5 sm:p-6">
          <h2 className="font-semibold text-gray-900">
            Order Summary
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Current order status
          </p>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  Pending
                </span>
                <span className="font-semibold text-gray-900">24</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[25%] rounded-full bg-amber-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  Processing
                </span>
                <span className="font-semibold text-gray-900">38</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[40%] rounded-full bg-blue-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-500" />
                  Shipped
                </span>
                <span className="font-semibold text-gray-900">19</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[20%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Delivered
                </span>
                <span className="font-semibold text-gray-900">95</span>
              </div>
              <div className="h-2 rounded-full bg-gray-100">
                <div className="h-2 w-[85%] rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>

          <div className="mt-7 rounded-lg bg-gray-50 p-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Clock size={17} />
              Total active orders
            </div>
            <p className="mt-1 text-2xl font-bold text-gray-900">
              176
            </p>
          </div>
        </div>
      </section>

      {/* Recent orders and activity */}
      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white xl:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-100 p-5">
            <div>
              <h2 className="font-semibold text-gray-900">
                Recent Orders
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Latest customer purchases
              </p>
            </div>

            <a
              href="/admin/orders"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              View all
            </a>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-gray-50 text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="px-5 py-3 font-medium">Order</th>
                  <th className="px-5 py-3 font-medium">Customer</th>
                  <th className="px-5 py-3 font-medium">Product</th>
                  <th className="px-5 py-3 font-medium">Amount</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="transition hover:bg-gray-50"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-indigo-600">
                      {order.id}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                      {order.customer}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-gray-600">
                      {order.product}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                      {order.amount}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-5">
          <h2 className="font-semibold text-gray-900">
            Recent Activity
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Latest store updates
          </p>

          <div className="mt-6 space-y-6">
            {activities.map((activity) => {
              const Icon = activity.icon;

              return (
                <div key={activity.title} className="flex gap-3">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${activity.color}`}
                  >
                    <Icon size={17} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-800">
                      {activity.title}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

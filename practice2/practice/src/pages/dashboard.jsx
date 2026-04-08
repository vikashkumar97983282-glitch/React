function Dashboard() {
  const stats = [
    { title: "Users", value: "1,284" },
    { title: "Orders", value: "326" },
    { title: "Revenue", value: "$12,480" },
    { title: "Growth", value: "+18%" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-col gap-3 rounded-lg bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
            <p className="text-sm text-gray-500">Welcome back. Here is a quick overview of your app.</p>
          </div>
          <button className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
            New Report
          </button>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <div key={item.title} className="rounded-lg bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="mt-2 text-2xl font-semibold text-gray-800">{item.value}</h2>
            </div>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
            <div className="mt-4 space-y-4">
              <div className="rounded-md bg-gray-50 p-4">
                <p className="font-medium text-gray-700">New user registered</p>
                <p className="text-sm text-gray-500">A new account was created 10 minutes ago.</p>
              </div>
              <div className="rounded-md bg-gray-50 p-4">
                <p className="font-medium text-gray-700">Order completed</p>
                <p className="text-sm text-gray-500">Order #1024 was successfully processed.</p>
              </div>
              <div className="rounded-md bg-gray-50 p-4">
                <p className="font-medium text-gray-700">Profile updated</p>
                <p className="text-sm text-gray-500">User details were updated this afternoon.</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-800">Quick Info</h2>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="rounded-md bg-gray-50 p-3">Server status: Online</li>
              <li className="rounded-md bg-gray-50 p-3">Pending tasks: 8</li>
              <li className="rounded-md bg-gray-50 p-3">Messages: 14 unread</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;

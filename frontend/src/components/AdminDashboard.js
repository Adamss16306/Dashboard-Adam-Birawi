import React from "react";
import StatCard from "./StatCard";

function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "1,284", trend: "+2%", icon: "👥" },
    { title: "Orders", value: "342", trend: "+12%", icon: "📦" },
    { title: "Revenue", value: "$18.6K", trend: "+5%", icon: "💰" },
    { title: "Pending", value: "27", trend: "-3%", icon: "⏳" },
  ];

  const analytics = [
    { name: "User Growth", value: 78 },
    { name: "Order Completion", value: 64 },
    { name: "Support Response", value: 86 },
    { name: "System Health", value: 92 },
  ];

  const users = [
    {
      name: "Adam Birawi",
      email: "adam@email.com",
      role: "User",
      status: "Active",
    },
    {
      name: "Sarah Ahmad",
      email: "sarah@email.com",
      role: "Admin",
      status: "Active",
    },
    {
      name: "Omar Saleh",
      email: "omar@email.com",
      role: "User",
      status: "Pending",
    },
    {
      name: "Lana Khaled",
      email: "lana@email.com",
      role: "User",
      status: "Blocked",
    },
  ];

  const orders = [
    {
      id: "#1024",
      customer: "Adam Birawi",
      type: "Meal Plan",
      status: "Completed",
      amount: "$45",
    },
    {
      id: "#1025",
      customer: "Sarah Ahmad",
      type: "Workout Plan",
      status: "Pending",
      amount: "$30",
    },
    {
      id: "#1026",
      customer: "Omar Saleh",
      type: "Coach Request",
      status: "Processing",
      amount: "$60",
    },
    {
      id: "#1027",
      customer: "Lana Khaled",
      type: "Subscription",
      status: "Cancelled",
      amount: "$20",
    },
  ];

  const activities = [
    "New user registered: Adam Birawi",
    "Order #1025 is waiting for approval",
    "System report generated successfully",
    "Admin updated user permissions",
  ];

  return (
    <div>
      <h1 style={{ fontSize: "30px", marginBottom: "10px" }}>
        Admin Dashboard 🛠️
      </h1>

      <div style={styles.insight}>
        <small>💡 Admin Insight: Orders increased by 12% this week.</small>
      </div>

      <p style={{ color: "#ccc", marginBottom: "30px" }}>
        Manage users, requests, orders, and platform activity
      </p>

      <div style={styles.statsGrid}>
        {stats.map((item, i) => (
          <StatCard
            key={i}
            title={item.title}
            value={item.value}
            trend={item.trend}
            icon={item.icon}
          />
        ))}
      </div>

      <div style={styles.mainGrid}>
        <div style={styles.card}>
          <h3 style={{ marginTop: 0 }}>Admin Analytics</h3>

          <div style={styles.histogram}>
            <div style={styles.yAxis}>
              {[100, 80, 60, 40, 20, 0].map((num) => (
                <span key={num}>{num}</span>
              ))}
            </div>

            <div style={styles.chartArea}>
              {[20, 40, 60, 80, 100].map((line) => (
                <div
                  key={line}
                  style={{
                    ...styles.gridLine,
                    bottom: `${line}%`,
                  }}
                ></div>
              ))}

              {analytics.map((item, i) => (
                <div key={i} style={styles.barGroup}>
                  <span style={styles.barValue}>{item.value}%</span>

                  <div
                    style={{
                      ...styles.verticalBar,
                      height: `${item.value}%`,
                    }}
                  ></div>

                  <p style={styles.barLabel}>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.card}>
          <h3>Activity</h3>
          {activities.map((item, i) => (
            <div key={i} style={styles.activityItem}>
              <span style={{ color: "#00ff88" }}>●</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div style={{ ...styles.card, gridColumn: "1 / -1" }}>
          <AdminTable
            title="Recent Users"
            columns={["Name", "Email", "Role", "Status", "Action"]}
          >
            {users.map((user, i) => (
              <tr key={i}>
                <td style={styles.td}>{user.name}</td>
                <td style={styles.td}>{user.email}</td>
                <td style={styles.td}>{user.role}</td>
                <td style={styles.td}>
                  <StatusBadge status={user.status} />
                </td>
                <td style={styles.td}>
                  <button style={styles.btn}>View</button>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>

        <div style={{ ...styles.card, gridColumn: "1 / -1" }}>
          <AdminTable
            title="Recent Orders / Requests"
            columns={["ID", "Customer", "Type", "Status", "Amount", "Action"]}
          >
            {orders.map((order, i) => (
              <tr key={i}>
                <td style={styles.td}>{order.id}</td>
                <td style={styles.td}>{order.customer}</td>
                <td style={styles.td}>{order.type}</td>
                <td style={styles.td}>
                  <StatusBadge status={order.status} />
                </td>
                <td style={styles.td}>{order.amount}</td>
                <td style={styles.td}>
                  <button style={styles.btn}>Manage</button>
                </td>
              </tr>
            ))}
          </AdminTable>
        </div>
      </div>
    </div>
  );
}

function AdminTable({ title, columns, children }) {
  return (
    <div>
      <h3>{title}</h3>

      <div style={{ overflowX: "auto" }}>
        <table style={styles.table}>
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} style={styles.th}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const isGood = status === "Active" || status === "Completed";
  const isWarning = status === "Pending" || status === "Processing";

  return (
    <span
      style={{
        ...styles.badge,
        color: isGood ? "#00ff88" : isWarning ? "#ffba00" : "#ff4444",
        borderColor: isGood ? "#00ff88" : isWarning ? "#ffba00" : "#ff4444",
        background: isGood
          ? "rgba(0,255,136,0.1)"
          : isWarning
            ? "rgba(255,186,0,0.1)"
            : "rgba(255,68,68,0.1)",
      }}
    >
      {status}
    </span>
  );
}

const styles = {
  insight: {
    padding: "10px",
    background: "rgba(0, 255, 127, 0.1)",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  mainGrid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
  },
  card: {
    background: "rgba(20, 20, 20, 0.8)",
    padding: "20px",
    borderRadius: "20px",
    border: "1px solid rgba(0,255,127,0.3)",
  },
  barHeader: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },
  barBg: {
    background: "#222",
    borderRadius: "10px",
    overflow: "hidden",
  },
  barFill: {
    background: "linear-gradient(to right, #ff7a00, #00ff88)",
    height: "12px",
    borderRadius: "10px",
    transition: "width 1s ease-in-out",
  },
  activityItem: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
    background: "#111",
    border: "1px solid #333",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "10px",
    color: "#ccc",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "650px",
  },
  th: {
    textAlign: "left",
    color: "#888",
    fontSize: "13px",
    padding: "12px",
    borderBottom: "1px solid #333",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #222",
    fontSize: "14px",
    color: "#ddd",
  },
  badge: {
    padding: "5px 10px",
    border: "1px solid",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "bold",
  },
  btn: {
    background: "#00ff88",
    border: "none",
    borderRadius: "8px",
    padding: "7px 12px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  histogram: {
    display: "flex",
    gap: "12px",
    height: "360px",
    marginTop: "25px",
    paddingBottom: "45px",
  },
  yAxis: {
    width: "35px",
    height: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    color: "#aaa",
    fontSize: "13px",
  },
  chartArea: {
    position: "relative",
    flex: 1,
    height: "280px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-around",
    borderLeft: "1px solid #555",
    borderBottom: "1px solid #555",
    padding: "0 20px",
  },
  gridLine: {
    position: "absolute",
    left: 0,
    width: "100%",
    borderTop: "1px dashed rgba(255,255,255,0.12)",
  },
  barGroup: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  verticalBar: {
    width: "58px",
    background: "linear-gradient(to top, #ff7a00, #00ff88)",
    borderRadius: "8px 8px 0 0",
    boxShadow: "0 0 18px rgba(0,255,136,0.25)",
    transition: "height 0.8s ease-out",
  },
  barValue: {
    color: "#00ff88",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  barLabel: {
    position: "absolute",
    top: "295px",
    color: "#aaa",
    fontSize: "12px",
    textAlign: "center",
    width: "90px",
    lineHeight: "14px",
  },
};

export default AdminDashboard;

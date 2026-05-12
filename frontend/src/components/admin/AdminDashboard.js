import React from "react";
import StatCard from "../StatCard";
import AdminAnalytics from "./AdminAnalytics";
import AdminTable from "./AdminTable";
import StatusBadge from "./StatusBadge";
import styles from "./adminStyles";

function AdminDashboard() {
    const stats = [
        { title: "Total Users", value: "1,284", trend: "+8%", icon: "👥" },
        { title: "Orders", value: "342", trend: "+12%", icon: "📦" },
        { title: "Revenue", value: "$18.6K", trend: "+5%", icon: "💰" },
        { title: "Pending", value: "27", trend: "-3%", icon: "⏳" }
    ];

    const analytics = [
        { name: "User Growth", value: 78 },
        { name: "Order Completion", value: 64 },
        { name: "Support Response", value: 86 },
        { name: "System Health", value: 92 }
    ];

    const users = [
        { name: "Adam Birawi", email: "adam@email.com", role: "User", status: "Active" },
        { name: "Sarah Ahmad", email: "sarah@email.com", role: "Admin", status: "Active" },
        { name: "Omar Saleh", email: "omar@email.com", role: "User", status: "Pending" }
    ];

    const orders = [
        { id: "#1024", customer: "Adam Birawi", type: "Meal Plan", status: "Completed", amount: "$45" },
        { id: "#1025", customer: "Sarah Ahmad", type: "Workout Plan", status: "Pending", amount: "$30" },
        { id: "#1026", customer: "Omar Saleh", type: "Coach Request", status: "Processing", amount: "$60" }
    ];

    return (
        <div>
            <h1 style={styles.pageTitle}>Admin Dashboard 🛠️</h1>

            <div style={styles.insight}>
                <small>💡 Admin Insight: Orders increased by 12% this week.</small>
            </div>

            <p style={styles.subtitle}>Manage users, requests, orders, and platform activity</p>

            <div style={styles.statsGrid}>
                {stats.map((item, i) => (
                    <StatCard key={i} {...item} />
                ))}
            </div>

            <div style={styles.mainGrid}>
                <AdminAnalytics analytics={analytics} />

                <div style={styles.card}>
                    <h3>Activity</h3>
                    {[
                        "New user registered",
                        "Order #1025 is waiting for approval",
                        "System report generated",
                        "Admin updated permissions"
                    ].map((item, i) => (
                        <div key={i} style={styles.activityItem}>
                            <span style={{ color: "#00ff88" }}>●</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <AdminTable title="Recent Users" columns={["Name", "Email", "Role", "Status", "Action"]}>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{user.name}</td>
                            <td style={styles.td}>{user.email}</td>
                            <td style={styles.td}>{user.role}</td>
                            <td style={styles.td}><StatusBadge status={user.status} /></td>
                            <td style={styles.td}><button style={styles.btn}>View</button></td>
                        </tr>
                    ))}
                </AdminTable>

                <AdminTable title="Recent Orders / Requests" columns={["ID", "Customer", "Type", "Status", "Amount", "Action"]}>
                    {orders.map((order, i) => (
                        <tr key={i}>
                            <td style={styles.td}>{order.id}</td>
                            <td style={styles.td}>{order.customer}</td>
                            <td style={styles.td}>{order.type}</td>
                            <td style={styles.td}><StatusBadge status={order.status} /></td>
                            <td style={styles.td}>{order.amount}</td>
                            <td style={styles.td}><button style={styles.btn}>Manage</button></td>
                        </tr>
                    ))}
                </AdminTable>
            </div>
        </div>
    );
}

export default AdminDashboard;
import Dashboard from "./components/Dashboard";
import AdminDashboard from "./components/admin/AdminDashboard";
import "./App.css";

function App() {
    const path = window.location.pathname;

    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "30px",
                color: "white",
                fontFamily: "sans-serif",
                background: "linear-gradient(135deg, #0f3d0f, #000000 )"
            }}
        >
            {path === "/admin" ? <AdminDashboard /> : <Dashboard />}
        </div>
    );
}

export default App;
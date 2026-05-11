
import Dashboard from "./components/Dashboard";
import "./App.css"

function App() {
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
            <Dashboard />
        </div>
    );
}

export default App;

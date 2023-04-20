const { default: Sidebar } = require("@/components/Sidebar/sidebar");

const MainApp = () => {
    return (
        <div>
            <Sidebar />
        <h1>My App</h1>
        <p>My App is running</p>
        </div>
    );
}

export default MainApp
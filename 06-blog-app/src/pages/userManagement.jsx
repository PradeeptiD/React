//done
import "./userManagement.css";

const mockUsers = [
    { id: 1, name: "Alice", role: "user", email: "alice@example.com" },
    { id: 2, name: "Bob", role: "admin", email: "bob@example.com" },
    { id: 3, name: "Charlie", role: "user", email: "charlie@example.com" },
];

function UserManagement() {
    return (
        <div className="user-management">
        <h2>User Management</h2>
        <table className="user-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
            </tr>
            </thead>
            <tbody>
            {mockUsers.map((user) => (
                <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default UserManagement;

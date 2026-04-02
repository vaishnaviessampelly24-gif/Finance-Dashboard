function Sidebar({ role, setRole }) {
  return (
    <div className="w-64 bg-gray-800 text-white p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Finance</h1>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="text-black p-2 rounded w-full"
      >
        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>
      </select>
    </div>
  );
}

export default Sidebar;
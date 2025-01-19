export default function SearchBar({ searchTerm, setSearchTerm }) {
    return (
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        className="w-full p-2 border rounded mb-4"
      />
    );
  }

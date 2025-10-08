import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="bg-black text-white shadow p-4 flex justify-between items-center">
      <Link to='/home'><h1 className="text-xl font-bold" >GitHub Explorer</h1></Link>
      <nav className="space-x-4">
        <a href="/about" className="text-gray-400 hover:underline">Sobre</a>
        <a href="/contact" className="text-gray-400 hover:underline">Contato</a>
      </nav>
    </header>
  );
}

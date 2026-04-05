function Navbar() {
  return (
    <nav className="bg-pink-500 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">TheNTStore 🎁</h1>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar
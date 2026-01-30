export default function Navbar() {
return (
<header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">


{/* Empty left space (keeps nav perfectly centered) */}
<div className="w-1/3"></div>


{/* Center Links */}
<nav className="w-1/3 flex justify-center space-x-10 text-black font-medium">
<a href="#customers" className="hover:text-green-600 transition">Customers</a>
<a href="#blogs" className="hover:text-green-600 transition">Blogs</a>
<a href="#pricing" className="hover:text-green-600 transition">Pricing</a>
</nav>


{/* Right Side Buttons */}
<div className="w-1/3 flex items-center justify-end space-x-4">


<div className="hidden sm:flex items-center text-sm font-medium border border-green-600 text-green-600 px-3 py-2 rounded-xl">
1.2k+ Organizers
</div>


<button className="text-sm font-medium text-black hover:text-green-600 transition">
Login
</button>

<button className="text-sm font-semibold bg-green-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
Join Now
</button>


</div>


</div>
</header>
);
}
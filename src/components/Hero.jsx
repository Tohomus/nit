export default function Hero() {
return (
<section id="home" className="min-h-screen flex items-center justify-center text-center px-6">
<div>
<h2 className="text-5xl font-extrabold mb-6 text-black">
Modern Design in <span className="text-green-600">Green</span>
</h2>
<p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
A clean and professional layout using green, black, and white to create a fresh modern experience.
</p>
<button className="bg-green-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
Get Started
</button>
</div>
</section>
);
}
export default function About() {
return (
<section id="about" className="py-20 px-6 bg-gray-50">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<img
src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
alt="About"
className="rounded-2xl shadow-md"
/>
<div>
<h3 className="text-3xl font-bold mb-4 text-green-600">About Us</h3>
<p className="text-gray-700 leading-relaxed">
We build modern digital experiences with a minimal color palette that focuses on clarity and impact. Our designs are sleek, responsive, and visually engaging.
</p>
</div>
</div>
</section>
);
}
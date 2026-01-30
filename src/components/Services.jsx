export default function Services() {
return (
<section id="services" className="py-20 px-6">
<div className="max-w-6xl mx-auto text-center">
<h3 className="text-3xl font-bold text-green-600 mb-12">Our Services</h3>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">Web Design</h4>
<p className="text-gray-600">Clean and modern layouts built for performance.</p>
</div>
<div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">Development</h4>
<p className="text-gray-600">Responsive and scalable web applications.</p>
</div>
<div className="p-8 rounded-2xl shadow hover:shadow-lg transition">
<h4 className="text-xl font-semibold mb-2">Branding</h4>
<p className="text-gray-600">Strong visual identity using minimal color strategy.</p>
</div>
</div>
</div>
</section>
);
}


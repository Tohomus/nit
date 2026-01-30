export default function LogoMarquee() {
const logos = [
"fab fa-facebook-f",
"fab fa-twitter",
"fab fa-apple",
"fab fa-google",
"fab fa-amazon",
"fab fa-netflix",
"fab fa-microsoft",
"fab fa-android",
];


return (
<section className="py-10 bg-white overflow-hidden">
<div className="relative w-full">
<div className="flex w-max animate-marquee space-x-16 text-4xl text-green-600 opacity-80">
{logos.concat(logos).map((icon, index) => (
<i key={index} className={icon}></i>
))}
</div>
</div>
</section>
);
}
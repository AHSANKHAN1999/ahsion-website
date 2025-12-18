export default function PageHeader({ title, subtitle }) {
  return (
    <div className="bg-primary text-white py-16 md:py-24 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-blue-100 max-w-2xl mx-auto px-4">{subtitle}</p>}
    </div>
  );
}

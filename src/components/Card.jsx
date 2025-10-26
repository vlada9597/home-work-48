export default function Card({ title, description }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
      <h3 className="text-lg font-bold text-blue-600">{title}</h3>
      <p className="mt-2 text-gray-700">{description}</p>
    </div>
  );
}

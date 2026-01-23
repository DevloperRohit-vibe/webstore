export default function MapSection() {
  return (
    <section className="h-96 bg-gray-200">
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Our Location</h3>
          <p className="text-gray-600">San Francisco, California</p>
          <p className="text-sm text-gray-500 mt-4">
            (Interactive map would be embedded here using Google Maps or Mapbox)
          </p>
        </div>
      </div>
    </section>
  );
}
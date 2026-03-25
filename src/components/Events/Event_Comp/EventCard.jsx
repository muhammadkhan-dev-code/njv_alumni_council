import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function EventCard({ event }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition duration-300">
      <div className="h-48 overflow-hidden relative">
        <img
          src={event.image || "https://via.placeholder.com/400x200?text=Event+Image"}
          alt={event.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => { e.target.src = "https://via.placeholder.com/400x200?text=Event"; }}
        />
        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
          {event.type}
        </div>
      </div>
      <div className="p-6 flex flex-col h-[280px]">
        <h3 className="text-xl font-bold text-blue-950 mb-2 font-serif line-clamp-2">{event.title}</h3>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <CalendarIcon className="w-4 h-4 mr-2 text-yellow-500" />
          <span>{event.date} • {event.time}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPinIcon className="w-4 h-4 mr-2 text-yellow-500" />
          <span className="truncate">{event.location}</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-3 mb-auto">{event.description}</p>
        <button className="mt-4 w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 rounded-lg transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

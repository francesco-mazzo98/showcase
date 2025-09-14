import { useState } from "react";

export default function App() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    { id: 1, label: "Foto 1", description: "Tramonto sul mare" },
    { id: 2, label: "Foto 2", description: "Passeggiata in montagna" },
    { id: 3, label: "Foto 3", description: "Centro città di notte" },
    { id: 4, label: "Foto 4", description: "Un buon caffè al mattino" },
    { id: 5, label: "Foto 5", description: "Vacanza al lago" },
    { id: 6, label: "Foto 6", description: "Un gatto simpatico" },
    { id: 7, label: "Foto 7", description: "Amici al parco" },
    { id: 8, label: "Foto 8", description: "Panorama innevato" },
    { id: 9, label: "Foto 9", description: "Un pranzo in famiglia" },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      {/* Intestazione */}
      <header className="bg-blue-600 text-white p-4 text-xl font-bold shadow-md">
        Intestazione
      </header>

      {/* Contenuto principale */}
      <div className="flex flex-1">
        {/* Barra laterale sinistra */}
        <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300 flex flex-col items-center">
          {/* Foto profilo */}
          <img
            src="https://via.placeholder.com/150"
            alt="Foto profilo"
            className="w-32 h-32 rounded-full object-cover mb-4 shadow"
          />

          {/* Informazioni */}
          <h2 className="text-lg font-semibold mb-4 self-start">
            Informazioni
          </h2>
          <ul className="space-y-2 text-gray-700 self-start">
            <li>
              <strong>Nome:</strong> Mario Rossi
            </li>
            <li>
              <strong>Email:</strong> mario.rossi@example.com
            </li>
            <li>
              <strong>Telefono:</strong> +39 123 456 789
            </li>
            <li>
              <strong>Città:</strong> Roma
            </li>
          </ul>
        </aside>

        {/* Griglia delle foto */}
        <main className="flex-1 p-6">
          <h2 className="text-lg font-semibold mb-4">Galleria Fotografica</h2>
          <div className="grid grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="w-full aspect-square bg-gray-300 flex items-center justify-center rounded-lg shadow cursor-pointer hover:bg-gray-400"
                onClick={() => setSelectedPhoto(photo)}
              >
                {photo.label}
              </div>
            ))}
          </div>
        </main>

        {/* Modal Popup */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
              <h3 className="text-xl font-semibold mb-2">
                {selectedPhoto.label}
              </h3>
              <p className="text-gray-700 mb-4">{selectedPhoto.description}</p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Chiudi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

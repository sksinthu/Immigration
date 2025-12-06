import React from "react";

const countries = [
  {
    name: "Greece",
    cities: "Athens, Thessaloniki, Patras, Heraklion, Chania, Larissa",
    image:
      "https://images.unsplash.com/photo-1503152394-c571994fd383?w=800&q=80",
  },
  {
    name: "Belarus",
    cities: "Minsk, Brest, Gomel, Grodno, Vitebsk, Mogilev",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80"
  },
  {
    name: "Romania",
    cities: "Bucharest, Cluj‑Napoca, Timișoara, Iași, Constanța, Brașov",
    image: "https://images.unsplash.com/photo-1547448415-e9f5b28e570d?w=800&q=80"
  },
  {
    name: "Serbia",
    cities: "Belgrade, Novi Sad, Niš, Kragujevac, Subotica, Zrenjanin",
    image: "https://images.unsplash.com/photo-1613601740367-410ae03b2ec7"
  },
  {
    name: "Moldova",
    cities: "Chișinău, Tiraspol, Bălți, Bender, Cahul, Ungheni",
    image: "https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800&q=80"
  }
  // {
  //     name: "Australia",
  //     cities: "Sydney, Melbourne, Brisbane, Adelaide, Perth, Canberra",
  //     image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80"
  // },
  // {
  //     name: "Canada",
  //     cities: "Vancouver, Toronto, Montreal, Edmonton, Ottawa",
  //     image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&q=80"
  // },
  // {
  //     name: "China",
  //     cities: "Shanghai, Beijing, Guangzhou, Shenzhen, Wuhan",
  //     image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80"
  // },
  // {
  //     name: "Japan",
  //     cities: "Tokyo, Yokohama, Osaka, Miyoshi, Nagakute, Sapporo, Kyoto",
  //     image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80"
  // },
  // {
  //     name: "New Zealand",
  //     cities: "Auckland, Wellington, Christchurch, Dunedin, Hamilton",
  //     image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
  // },
  // {
  //     name: "United Kingdom",
  //     cities: "London, Birmingham, Liverpool, Manchester, Bristol",
  //     image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80"
  // },
  // {
  //     name: "United States",
  //     cities: "Los Angeles, New York, Miami, Chicago, Houston, Philadelphia",
  //     image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800&q=80"
  // },
  // {
  //     name: "Belgium",
  //     cities: "Antwerp, Brussels, Bruges, Ghent, Charleroi, Liège",
  //     image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80"
  // },
  // {
  //     name: "Cyprus",
  //     cities: "Nicosia, Limassol, Strovolos, Larnaca, Famagusta",
  //     image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&q=80"
  // },
  // {
  //     name: "Denmark",
  //     cities: "Copenhagen, Aarhus, Odense, Aalborg",
  //     image: "https://images.unsplash.com/photo-1508189860359-777d945909ef?w=800&q=80"
  // },
  // {
  //     name: "Finland",
  //     cities: "Helsinki, Turku, Oulu, Tampere, Espoo, Vaasa",
  //     image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80"
  // },
  // {
  //     name: "France",
  //     cities: "Paris, Marseille, Toulon, Lyon, Bordeaux, Loudes",
  //     image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80"
  // },
  // {
  //     name: "Germany",
  //     cities: "Berlin, Hamburg, Munich, Cologne, Frankfurt, Düsseldorf",
  //     image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
  // },
  // {
  //     name: "Hungary",
  //     cities: "Budapest, Pecs, Debrecen, Szeged, Miskolc, Eger, Sopron",
  //     image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80"
  // },
  // {
  //     name: "Italy",
  //     cities: "Rome, Milan, Naples, Venice, Florence, Turin",
  //     image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=800&q=80"
  // },
  // {
  //     name: "Luxembourg",
  //     cities: "Luxembourg City, Diekirch, Differdange, Dudelange",
  //     image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80"
  // },
  // {
  //     name: "Malta",
  //     cities: "Valletta, Birgu, Senglea, Sliema, Saint Paul's Bay, Saint Julian's",
  //     image: "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=800&q=80"
  // },
  // {
  //     name: "Poland",
  //     cities: "Warsaw, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin",
  //     image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80"
  // },
  // {
  //     name: "Portugal",
  //     cities: "Lisbon, Porto, Vila Nova de Gaia, Braga, Amadora, Queluz, Funchal",
  //     image: "https://images.unsplash.com/photo-1563789031959-4c02bcb41319?w=800&q=80"
  // },
  // {
  //     name: "Spain",
  //     cities: "Madrid, Barcelona, Seville, Granada, Valencia, Bilbao, Salamanca",
  //     image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80"
  // },
  // {
  //     name: "Slovenia",
  //     cities: "Ljubljana, Celje, Maribor, Koper, Piran, Kranj, Ptuj, Nova Gorica",
  //     image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80"
  // },
  // {
  //     name: "Sweden",
  //     cities: "Stockholm, Gothenburg, Malmö, Uppsala, Helsingborg",
  //     image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?w=800&q=80"
  // },
  // {
  //     name: "Switzerland",
  //     cities: "Zürich, Geneva, Basel, Lausanne, Bern, Winterthur",
  //     image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  // }
];

const Countries = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[var(--accent-blue)] font-bold tracking-wider uppercase mb-3 text-sm">
            Destinations
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[var(--primary)] mb-4">
            Countries We Support
          </h3>
          <p className="text-[var(--text-muted)] text-lg max-w-2xl mx-auto">
            Explore opportunities in the world's most welcoming nations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-gray-200"
            >
              {/* Background Image */}
              <img
                src={country.image}
                alt={country.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 z-10"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
                <h4 className="text-2xl font-bold mb-2">
                  {country.name} Visas
                </h4>
                <p className="text-sm text-gray-200 font-medium truncate opacity-90">
                  {country.cities}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div className="bg-black bg-opacity-40 p-8 rounded-lg text-center">
          <h1 className="text-white text-5xl font-playfair">Ping’s</h1>
          <p className="text-white text-lg mt-2">Authentic Hong Kong Cuisine in NYC Since 1998</p>
          <a href="#menu" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#6b0e24] transition">View Menu</a>
        </div>
      </section>

      {/* About */}
      <section className="py-16 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-playfair text-primary mb-4">Our Story</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Since 1998, Ping’s has offered guests an unforgettable experience of Hong Kong fare. 
          With an extensive menu of traditional dim sum and fresh seafood specialties, 
          it is a new adventure every time. Conveniently located in the heart of Chinatown, 
          Ping’s gives New Yorkers the chance to dine as they would in Hong Kong without ever having to leave town.
        </p>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-16 px-6 md:px-12 bg-gray-50">
        <h2 className="text-3xl font-playfair text-primary text-center mb-10">Menu Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { img: "/dish1.jpg", name: "Shrimp Dumplings", desc: "Steamed to perfection with fresh shrimp." },
            { img: "/dish2.jpg", name: "Crispy Roast Duck", desc: "Golden-brown, savory, tender, signature marinade." },
            { img: "/dish3.jpg", name: "Lobster with Ginger & Scallion", desc: "Fresh lobster stir-fried with aromatic ginger and scallions." }
          ].map((dish, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
              <img src={dish.img} alt={dish.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg">{dish.name}</h3>
                <p className="text-gray-600 mt-2">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-playfair text-primary mb-4">Visit Us</h2>
        <p className="text-lg">22 Mott St, New York, NY 10013</p>
        <p className="text-lg">Mon-Fri 11:00 AM – 9:30 PM | Sat-Sun 9:00 AM – 10:00 PM</p>
        <p className="mt-2">Call: <a href="tel:2126029988" className="text-primary">212-602-9988</a></p>
        <a 
          href="https://maps.apple.com/?address=22%20Mott%20St,%20New%20York,%20NY" 
          target="_blank" 
          className="inline-block mt-4 bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#6b0e24] transition"
        >
          Open in Maps
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Ping’s New York. All Rights Reserved.</p>
      </footer>
    </main>
  );
}

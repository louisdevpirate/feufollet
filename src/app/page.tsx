export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-responsive py-24">
        <h1 className="text-hero font-bold text-neutral-900 mb-8">
          Laura Follet
        </h1>
        <p className="text-xl text-neutral-600 mb-8 max-w-2xl">
          Découvrez mon univers artistique où tatouages, portraits et enseignement se rencontrent pour créer des expériences uniques et mémorables.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-4">Tatouage</h3>
            <p className="text-neutral-600">Art corporel unique avec style artistique moderne</p>
          </div>
          <div className="p-6 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-4">Portrait</h3>
            <p className="text-neutral-600">Capturer l'essence et les émotions de vos proches</p>
          </div>
          <div className="p-6 rounded-lg border border-neutral-200">
            <h3 className="text-xl font-semibold mb-4">Atelier</h3>
            <p className="text-neutral-600">Développez votre créativité en petit groupe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

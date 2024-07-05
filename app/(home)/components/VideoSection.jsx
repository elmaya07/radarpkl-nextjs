import Link from "next/link";

export default function VideoSection({ title, src = "/list-video" }) {
  return (
    <div className="container md:mx-auto">
      <div className=" flex justify-between">
        <h2 className="font-semibold">{title}</h2>
        <Link href={src}>
          <h2 className="font-semibold">Lihat Semua</h2>
        </Link>
      </div>
      <div className="container mx-auto p-6 bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <a>
              <img
                src="/Logo RadarPekalonganBiru.webp"
                alt="bebas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Judul</h3>
              </div>
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <a>
              <img
                src="/Logo RadarPekalonganBiru.webp"
                alt="bebas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Judul</h3>
              </div>
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <a>
              <img
                src="/Logo RadarPekalonganBiru.webp"
                alt="bebas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Judul</h3>
              </div>
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <a>
              <img
                src="/Logo RadarPekalonganBiru.webp"
                alt="bebas"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Judul</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

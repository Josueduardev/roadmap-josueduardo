export default function Maintenance() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-special-blue-50 via-white to-special-blue-100/50">
      {/* Decorative background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b86ff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-md w-full">
        {/* Icon container */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-special-blue-100 flex items-center justify-center shadow-lg shadow-special-blue-200/30 ring-2 ring-special-blue-200/50">
            <span className="text-4xl" aria-hidden>
              🚧
            </span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-special-blue-200/60 bg-white/80 backdrop-blur-sm shadow-xl shadow-special-blue-200/20 p-8">
          <h1 className="text-2xl font-semibold text-special-blue-900 tracking-tight mb-2">
            Sitio en mantenimiento
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            Este sitio está en mantenimiento. Vuelve pronto.
          </p>

          {/* Divider with dot */}
          <div className="flex items-center gap-3 my-6">
            <span className="flex-1 h-px bg-special-blue-200/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-special-blue-400" />
            <span className="flex-1 h-px bg-special-blue-200/60" />
          </div>

          <p className="text-sm text-muted-foreground">
            Gracias por tu paciencia.
          </p>
        </div>

        {/* Optional subtle badge */}
        <p className="mt-6 text-xs text-muted-foreground/80">
          Próximamente de vuelta
        </p>
      </div>
    </main>
  );
}

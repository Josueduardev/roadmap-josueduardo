export default function Maintenance() {
  return (
    <>
      <style jsx global>{`
        /* ===== Maintenance Page ===== */

        .maintenance {
          position: relative;
          min-height: 100vh;
          padding: 1rem;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background: linear-gradient(
            135deg,
            #eff6ff 0%,
            #ffffff 50%,
            rgba(219, 234, 254, 0.5) 100%
          );
          overflow: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", Arial,
            sans-serif;
        }

        /* Background pattern */
        .maintenance-bg {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234b86ff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }

        .maintenance-content {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 420px;
        }

        /* Icon */
        .maintenance-icon-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 1.5rem;
          border-radius: 1rem;
          background: #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.25);
        }

        .maintenance-icon {
          font-size: 2.5rem;
        }

        /* Card */
        .maintenance-card {
          padding: 2rem;
          border-radius: 1rem;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(191, 219, 254, 0.6);
          box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
        }

        .maintenance-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e3a8a;
          margin-bottom: 0.5rem;
        }

        .maintenance-text {
          font-size: 1rem;
          color: #4b5563;
          line-height: 1.6;
        }

        .maintenance-text.muted {
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }

        /* Divider */
        .maintenance-divider {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin: 1.5rem 0;
        }

        .maintenance-divider span {
          flex: 1;
          height: 1px;
          background: rgba(191, 219, 254, 0.6);
        }

        .maintenance-divider .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #60a5fa;
        }

        /* Footer */
        .maintenance-footer {
          margin-top: 1.5rem;
          font-size: 0.75rem;
          color: rgba(107, 114, 128, 0.8);
        }
      `}</style>

      <main className="maintenance">
        <div className="maintenance-bg" />

        <div className="maintenance-content">
          <div className="maintenance-icon-wrapper">
            <span className="maintenance-icon" aria-hidden>
              🚧
            </span>
          </div>

          <div className="maintenance-card">
            <h1 className="maintenance-title">Sitio en mantenimiento</h1>
            <p className="maintenance-text">
              Estamos realizando mejoras. Vuelve pronto.
            </p>

            <div className="maintenance-divider">
              <span />
              <span className="dot" />
              <span />
            </div>

            <p className="maintenance-text muted">Gracias por tu paciencia.</p>
          </div>

          <p className="maintenance-footer">Próximamente de vuelta</p>
        </div>
      </main>
    </>
  );
}

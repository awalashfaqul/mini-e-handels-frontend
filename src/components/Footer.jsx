export default function Footer(){
  return (
    <footer className="site-footer mt-8 py-8">
      <div className="container text-center">
        <div className="mb-3">
          <strong>Mini e-Commerce Store</strong> — Headless demo for CMS + Commerce + Experiments
        </div>
        <div className="text-sm text-slate-300">
          © {new Date().getFullYear()} Mini e-Commerce Store — built with React + Tailwind
        </div>
      </div>
    </footer>
  );
}

// src/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] py-6 mt-8">
      <div className="container mx-auto text-center text-[var(--color-secondary)]">
        <p>© 2025 Makeup Project - All rights reserved.</p>
        <p>
          Liên hệ:{" "}
          <a
            href="mailto:contact@makeupproject.com"
            className="hover:text-[var(--color-accent)]"
          >
            contact@makeupproject.com
          </a>
        </p>
      </div>
    </footer>
  );
}

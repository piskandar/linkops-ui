"use client";

import { useState } from "react";
import * as styles from "./page.css";

export default function Home() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    // Placeholder — functionality will be added later
    setShortenedUrl("lnk.ops/abc123");
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            Ship shorter links,
            <br />
            <span className={styles.titleAccent}>ship faster.</span>
          </h1>
          <p className={styles.subtitle}>
            A developer-first link shortener with built-in analytics, API access,
            and zero config. Paste a URL, get a link, track clicks.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="url"
                className={styles.input}
                placeholder="https://your-long-url.dev/api/v2/..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                aria-label="URL to shorten"
              />
              <button type="submit" className={styles.submitBtn}>
                Shorten
              </button>
            </div>
          </form>

          {shortenedUrl && (
            <div className={styles.result}>
              <div className={styles.resultLabel}>
                Generated — ready to deploy
              </div>
              <div className={styles.resultRow}>
                <span className={styles.resultUrl}>{shortenedUrl}</span>
                <button
                  className={`${styles.copyBtn} ${copied ? styles.copyBtnCopied : ""}`}
                  onClick={handleCopy}
                  type="button"
                  aria-label="Copy shortened URL"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="4 17 10 11 4 5" />
                <line x1="12" y1="19" x2="20" y2="19" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>API-First</h3>
            <p className={styles.featureDesc}>
              RESTful API with token auth. Create, read, update, and delete links programmatically.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                <path d="M22 12A10 10 0 0 0 12 2v10z" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>Real-Time Analytics</h3>
            <p className={styles.featureDesc}>
              Click counts, referrers, geo data, and device breakdowns. Query via API or dashboard.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 className={styles.featureTitle}>99.9% Uptime</h3>
            <p className={styles.featureDesc}>
              Edge-deployed on redundant infrastructure. Sub-50ms redirects. Status page included.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

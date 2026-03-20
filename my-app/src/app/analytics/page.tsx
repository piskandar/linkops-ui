"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/AuthProvider";
import * as styles from "./analytics.css";

const MOCK_LINKS = [
  {
    id: "1",
    shortUrl: "lnk.ops/abc123",
    originalUrl: "https://example.com/very-long-url-that-needs-to-be-shortened",
    clicks: 1247,
    createdAt: "2026-03-15",
  },
  {
    id: "2",
    shortUrl: "lnk.ops/xyz789",
    originalUrl: "https://example.com/another-long-url-for-marketing-campaign",
    clicks: 893,
    createdAt: "2026-03-12",
  },
  {
    id: "3",
    shortUrl: "lnk.ops/def456",
    originalUrl: "https://example.com/blog/how-to-increase-website-traffic",
    clicks: 456,
    createdAt: "2026-03-10",
  },
  {
    id: "4",
    shortUrl: "lnk.ops/ghi012",
    originalUrl: "https://example.com/products/seasonal-sale-2026",
    clicks: 2103,
    createdAt: "2026-03-08",
  },
  {
    id: "5",
    shortUrl: "lnk.ops/jkl345",
    originalUrl: "https://example.com/newsletter/march-2026",
    clicks: 67,
    createdAt: "2026-03-18",
  },
];

const MOCK_STATS = {
  totalClicks: 4766,
  totalLinks: 5,
  avgClicksPerLink: 953,
  topPerformer: "lnk.ops/ghi012",
};

export default function AnalyticsPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className={styles.page}>
        <div className={styles.loadingState}>
          <div className={styles.loadingDots}>
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
            <span className={styles.loadingDot} />
          </div>
          <p className={styles.loadingText}>Aggregating metrics...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className={styles.page}>
        <div className={styles.gateCard}>
          <div className={styles.gateIcon}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h2 className={styles.gateTitle}>Authentication required</h2>
          <p className={styles.gateSubtitle}>
            Log in to access your link analytics dashboard.
          </p>
          <button
            className={styles.gateBtn}
            onClick={() => router.push("/login")}
            type="button"
          >
            Log in
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Dashboard</h1>
          <p className={styles.subtitle}>
            Link performance metrics and click analytics.
          </p>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <span className={styles.statValue}>
              {MOCK_STATS.totalClicks.toLocaleString()}
            </span>
            <span className={styles.statLabel}>Total Clicks</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>{MOCK_STATS.totalLinks}</span>
            <span className={styles.statLabel}>Total Links</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValue}>
              {MOCK_STATS.avgClicksPerLink.toLocaleString()}
            </span>
            <span className={styles.statLabel}>Avg. Clicks / Link</span>
          </div>
          <div className={styles.statCard}>
            <span className={styles.statValueSmall}>
              {MOCK_STATS.topPerformer}
            </span>
            <span className={styles.statLabel}>Top Performer</span>
          </div>
        </div>

        <div className={styles.chartCard}>
          <h2 className={styles.chartTitle}>Clicks Over Time</h2>
          <div className={styles.chartPlaceholder}>
            <div className={styles.barChart}>
              {[35, 52, 48, 70, 65, 82, 78, 95, 88, 72, 60, 45].map(
                (value, i) => (
                  <div key={i} className={styles.barCol}>
                    <div
                      className={styles.bar}
                      style={{ height: `${value}%` }}
                    />
                    <span className={styles.barLabel}>
                      {["J","F","M","A","M","J","J","A","S","O","N","D"][i]}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <h2 className={styles.tableTitle}>All Links</h2>
            <span className={styles.tableBadge}>
              {MOCK_LINKS.length} links
            </span>
          </div>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHead}>Short URL</th>
                  <th className={styles.tableHead}>Original URL</th>
                  <th className={styles.tableHead}>Clicks</th>
                  <th className={styles.tableHead}>Created</th>
                  <th className={styles.tableHead}></th>
                </tr>
              </thead>
              <tbody>
                {MOCK_LINKS.map((link) => (
                  <tr
                    key={link.id}
                    className={`${styles.tableRow} ${selectedLink === link.id ? styles.rowSelected : ""}`}
                    onClick={() =>
                      setSelectedLink(
                        selectedLink === link.id ? null : link.id
                      )
                    }
                  >
                    <td className={styles.tableCell}>
                      <span className={styles.shortUrl}>{link.shortUrl}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.originalUrl}>
                        {link.originalUrl}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.clicks}>
                        {link.clicks.toLocaleString()}
                      </span>
                    </td>
                    <td className={styles.tableCell}>
                      <span className={styles.date}>{link.createdAt}</span>
                    </td>
                    <td className={styles.tableCell}>
                      <button
                        className={styles.detailBtn}
                        type="button"
                        aria-label={`View details for ${link.shortUrl}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

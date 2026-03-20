"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../components/AuthProvider";
import * as styles from "./settings.css";

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  lastUsed: string | null;
  status: "active" | "revoked";
}

function generateKeyId() {
  return Math.random().toString(36).slice(2, 10);
}

function generateFullKey() {
  const segments = Array.from({ length: 4 }, () =>
    Math.random().toString(36).slice(2, 10)
  );
  return `lops_${segments.join("")}`;
}

const INITIAL_KEYS: ApiKey[] = [
  {
    id: "1",
    name: "Production",
    prefix: "lops_a3f8...k9m2",
    createdAt: "2026-03-10",
    lastUsed: "2026-03-19",
    status: "active",
  },
  {
    id: "2",
    name: "CI / GitHub Actions",
    prefix: "lops_7x2b...p4e1",
    createdAt: "2026-03-14",
    lastUsed: "2026-03-18",
    status: "active",
  },
  {
    id: "3",
    name: "Local dev",
    prefix: "lops_m1n4...q8w3",
    createdAt: "2026-03-01",
    lastUsed: null,
    status: "revoked",
  },
];

export default function SettingsPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [keys, setKeys] = useState<ApiKey[]>(INITIAL_KEYS);
  const [showCreate, setShowCreate] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");
  const [revealedKey, setRevealedKey] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState(false);

  if (isLoading) return null;

  if (!user) {
    router.replace("/login");
    return null;
  }

  const handleCreate = () => {
    if (!newKeyName.trim()) return;

    const fullKey = generateFullKey();
    const newKey: ApiKey = {
      id: generateKeyId(),
      name: newKeyName.trim(),
      prefix: `${fullKey.slice(0, 8)}...${fullKey.slice(-4)}`,
      createdAt: new Date().toISOString().slice(0, 10),
      lastUsed: null,
      status: "active",
    };

    setKeys((prev) => [newKey, ...prev]);
    setRevealedKey(fullKey);
    setNewKeyName("");
    setCopiedKey(false);
  };

  const handleRevoke = (id: string) => {
    setKeys((prev) =>
      prev.map((k) => (k.id === id ? { ...k, status: "revoked" as const } : k))
    );
  };

  const handleDelete = (id: string) => {
    setKeys((prev) => prev.filter((k) => k.id !== id));
  };

  const handleCopyKey = () => {
    if (revealedKey) {
      navigator.clipboard.writeText(revealedKey);
      setCopiedKey(true);
      setTimeout(() => setCopiedKey(false), 2000);
    }
  };

  const activeKeys = keys.filter((k) => k.status === "active");
  const revokedKeys = keys.filter((k) => k.status === "revoked");

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Settings</h1>
          <p className={styles.subtitle}>
            Manage your account and developer configuration.
          </p>
        </header>

        {/* Developer Section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleGroup}>
              <h2 className={styles.sectionTitle}>
                <span className={styles.sectionIcon}>
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
                    <polyline points="4 17 10 11 4 5" />
                    <line x1="12" y1="19" x2="20" y2="19" />
                  </svg>
                </span>
                Developer
              </h2>
              <p className={styles.sectionDesc}>
                API keys for programmatic access. Include the key in the{" "}
                <code>Authorization</code> header as a Bearer token.
              </p>
            </div>
            <button
              className={styles.createBtn}
              onClick={() => {
                setShowCreate(true);
                setRevealedKey(null);
              }}
              type="button"
            >
              Create key
            </button>
          </div>

          {/* Revealed new key */}
          {revealedKey && (
            <div style={{ padding: "0 1.5rem" }}>
              <div className={styles.newKeyReveal} style={{ marginTop: "1rem" }}>
                <span className={styles.newKeyLabel}>
                  Your new API key
                </span>
                <span className={styles.newKeyValue}>{revealedKey}</span>
                <span className={styles.newKeyWarning}>
                  Copy this key now. You won&apos;t be able to see it again.
                </span>
                <button
                  className={styles.copyKeyBtn}
                  onClick={handleCopyKey}
                  type="button"
                >
                  {copiedKey ? "Copied" : "Copy to clipboard"}
                </button>
              </div>
            </div>
          )}

          {keys.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
                </svg>
              </div>
              <p className={styles.emptyTitle}>No API keys yet</p>
              <p className={styles.emptyDesc}>
                Create an API key to start making requests to the LinkOps API.
              </p>
            </div>
          ) : (
            <div className={styles.keyList}>
              {activeKeys.map((key) => (
                <div key={key.id} className={styles.keyRow}>
                  <div className={styles.keyInfo}>
                    <span className={styles.keyName}>{key.name}</span>
                    <span className={styles.keyValue}>{key.prefix}</span>
                    <div className={styles.keyMeta}>
                      <span
                        className={`${styles.keyBadge} ${styles.keyBadgeActive}`}
                      >
                        Active
                      </span>
                      <span>Created {key.createdAt}</span>
                      {key.lastUsed && <span>Last used {key.lastUsed}</span>}
                    </div>
                  </div>
                  <div className={styles.keyActions}>
                    <button
                      className={styles.revokeBtn}
                      onClick={() => handleRevoke(key.id)}
                      type="button"
                      title="Revoke key"
                      aria-label={`Revoke ${key.name} key`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              {revokedKeys.map((key) => (
                <div
                  key={key.id}
                  className={styles.keyRow}
                  style={{ opacity: 0.6 }}
                >
                  <div className={styles.keyInfo}>
                    <span className={styles.keyName}>{key.name}</span>
                    <span className={styles.keyValue}>{key.prefix}</span>
                    <div className={styles.keyMeta}>
                      <span
                        className={`${styles.keyBadge} ${styles.keyBadgeRevoked}`}
                      >
                        Revoked
                      </span>
                      <span>Created {key.createdAt}</span>
                    </div>
                  </div>
                  <div className={styles.keyActions}>
                    <button
                      className={styles.iconBtn}
                      onClick={() => handleDelete(key.id)}
                      type="button"
                      title="Delete key"
                      aria-label={`Delete ${key.name} key`}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Create Key Modal */}
        {showCreate && (
          <div
            className={styles.modalOverlay}
            onClick={(e) => {
              if (e.target === e.currentTarget) setShowCreate(false);
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Create API key"
          >
            <div className={styles.modal}>
              <h3 className={styles.modalTitle}>Create API key</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label} htmlFor="key-name">
                  Key name
                </label>
                <input
                  id="key-name"
                  type="text"
                  className={styles.input}
                  placeholder="e.g. Production, Staging, CI"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleCreate();
                  }}
                />
              </div>
              <div className={styles.modalActions}>
                <button
                  className={styles.cancelBtn}
                  onClick={() => {
                    setShowCreate(false);
                    setNewKeyName("");
                  }}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className={styles.createBtn}
                  onClick={() => {
                    handleCreate();
                    setShowCreate(false);
                  }}
                  disabled={!newKeyName.trim()}
                  type="button"
                >
                  Generate key
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeInUp = keyframes({
  from: { opacity: 0, transform: "translateY(16px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const page = style({
  flex: 1,
  padding: `${vars.space[8]} ${vars.space[6]}`,
  background: vars.semantic.surfaceRaised,
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space[4],
    },
  },
});

export const container = style({
  maxWidth: 800,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: vars.space[8],
});

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[2],
  animation: `${fadeInUp} 0.5s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const title = style({
  fontSize: vars.font.size3xl,
  fontWeight: 800,
  letterSpacing: "-1px",
  color: vars.semantic.foreground,
});

export const subtitle = style({
  fontSize: vars.font.sizeBase,
  color: vars.color.secondary500,
});

// --- Section ---

export const section = style({
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  overflow: "hidden",
  animation: `${fadeInUp} 0.5s 0.1s cubic-bezier(0.23, 1, 0.32, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const sectionHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[5]} ${vars.space[6]}`,
  borderBottom: `1px solid ${vars.semantic.border}`,
  "@media": {
    "(max-width: 480px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.space[3],
    },
  },
});

export const sectionTitleGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
});

export const sectionTitle = style({
  fontSize: vars.font.sizeLg,
  fontWeight: 700,
  color: vars.semantic.foreground,
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
});

export const sectionIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  background: vars.color.primary50,
  color: vars.color.primary500,
  borderRadius: vars.radius.sm,
  flexShrink: 0,
});

export const sectionDesc = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  lineHeight: 1.5,
});

export const createBtn = style({
  padding: `${vars.space[2]} ${vars.space[5]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  fontFamily: "inherit",
  color: "white",
  background: vars.color.primary500,
  border: "none",
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  whiteSpace: "nowrap",
  ":hover": {
    background: vars.color.primary600,
    transform: "translateY(-1px)",
    boxShadow: `0 4px 12px ${vars.color.primary200}`,
  },
  ":active": {
    transform: "translateY(0)",
  },
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.primary500}`,
      outlineOffset: "2px",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      selectors: {
        "&:hover": {
          transform: "none",
        },
      },
    },
  },
});

// --- API Key List ---

export const keyList = style({
  display: "flex",
  flexDirection: "column",
});

const keySlideIn = keyframes({
  from: { opacity: 0, transform: "translateX(-8px)" },
  to: { opacity: 1, transform: "translateX(0)" },
});

export const keyRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[4]} ${vars.space[6]}`,
  borderBottom: `1px solid ${vars.semantic.border}`,
  transition: `background ${vars.transition.fast}`,
  animation: `${keySlideIn} 0.3s cubic-bezier(0.23, 1, 0.32, 1) both`,
  ":hover": {
    background: vars.semantic.surfaceRaised,
  },
  selectors: {
    "&:last-child": {
      borderBottom: "none",
    },
  },
  "@media": {
    "(max-width: 640px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: vars.space[3],
    },
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const keyInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  minWidth: 0,
  flex: 1,
});

export const keyName = style({
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  color: vars.semantic.foreground,
});

export const keyValue = style({
  fontSize: vars.font.sizeSm,
  fontFamily: "var(--font-geist-mono), monospace",
  color: vars.color.secondary500,
  letterSpacing: "0.5px",
});

export const keyMeta = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[3],
  fontSize: vars.font.sizeXs,
  color: vars.color.secondary500,
});

export const keyBadge = style({
  padding: `${vars.space[1]} ${vars.space[2]}`,
  fontSize: vars.font.sizeXs,
  fontWeight: 600,
  borderRadius: vars.radius.sm,
  lineHeight: 1,
});

export const keyBadgeActive = style({
  background: vars.color.successLight,
  color: vars.color.success,
});

export const keyBadgeRevoked = style({
  background: `${vars.color.error}15`,
  color: vars.color.error,
});

export const keyActions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
  flexShrink: 0,
});

export const iconBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.secondary500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  fontFamily: "inherit",
  ":hover": {
    background: vars.semantic.surfaceRaised,
    borderColor: vars.color.secondary300,
    color: vars.semantic.foreground,
  },
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.primary500}`,
      outlineOffset: "2px",
    },
  },
});

export const revokeBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.secondary500,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  fontFamily: "inherit",
  ":hover": {
    background: `${vars.color.error}10`,
    borderColor: vars.color.error,
    color: vars.color.error,
  },
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.primary500}`,
      outlineOffset: "2px",
    },
  },
});

// --- Empty state ---

export const emptyState = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[3],
  padding: `${vars.space[10]} ${vars.space[6]}`,
});

export const emptyIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  background: vars.semantic.surfaceRaised,
  color: vars.color.secondary500,
  borderRadius: vars.radius.lg,
});

export const emptyTitle = style({
  fontSize: vars.font.sizeBase,
  fontWeight: 600,
  color: vars.semantic.foreground,
});

export const emptyDesc = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  maxWidth: 320,
  lineHeight: 1.5,
});

// --- Create Key Modal ---

export const modalOverlay = style({
  position: "fixed",
  inset: 0,
  zIndex: 200,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(4px)",
  padding: vars.space[4],
});

const modalIn = keyframes({
  from: { opacity: 0, transform: "scale(0.95) translateY(8px)" },
  to: { opacity: 1, transform: "scale(1) translateY(0)" },
});

export const modal = style({
  width: "100%",
  maxWidth: 460,
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.xl,
  padding: vars.space[6],
  display: "flex",
  flexDirection: "column",
  gap: vars.space[5],
  animation: `${modalIn} 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const modalTitle = style({
  fontSize: vars.font.sizeLg,
  fontWeight: 700,
  color: vars.semantic.foreground,
});

export const fieldGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[2],
});

export const label = style({
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  color: vars.semantic.foreground,
});

export const input = style({
  padding: `${vars.space[3]} ${vars.space[4]}`,
  fontSize: vars.font.sizeBase,
  fontFamily: "inherit",
  color: vars.semantic.foreground,
  background: vars.semantic.surfaceRaised,
  border: `2px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.lg,
  outline: "none",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  "::placeholder": {
    color: vars.color.secondary300,
  },
  selectors: {
    "&:focus": {
      borderColor: vars.color.primary500,
      boxShadow: `0 0 0 4px ${vars.color.primary50}`,
      background: vars.semantic.surface,
    },
  },
});

export const modalActions = style({
  display: "flex",
  justifyContent: "flex-end",
  gap: vars.space[3],
});

export const cancelBtn = style({
  padding: `${vars.space[2]} ${vars.space[5]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  fontFamily: "inherit",
  color: vars.color.secondary500,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": {
    color: vars.semantic.foreground,
    borderColor: vars.color.secondary300,
    background: vars.semantic.surfaceRaised,
  },
});

// --- New key reveal ---

export const newKeyReveal = style({
  padding: `${vars.space[4]} ${vars.space[5]}`,
  background: vars.color.successLight,
  border: `1px solid ${vars.color.success}`,
  borderRadius: vars.radius.lg,
  display: "flex",
  flexDirection: "column",
  gap: vars.space[2],
});

export const newKeyLabel = style({
  fontSize: vars.font.sizeXs,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  color: vars.color.success,
});

export const newKeyValue = style({
  fontSize: vars.font.sizeSm,
  fontFamily: "var(--font-geist-mono), monospace",
  fontWeight: 600,
  color: vars.semantic.foreground,
  wordBreak: "break-all",
  lineHeight: 1.6,
});

export const newKeyWarning = style({
  fontSize: vars.font.sizeXs,
  color: vars.color.warning,
  fontWeight: 500,
  lineHeight: 1.5,
});

export const copyKeyBtn = style({
  alignSelf: "flex-start",
  padding: `${vars.space[1]} ${vars.space[3]}`,
  fontSize: vars.font.sizeXs,
  fontWeight: 600,
  fontFamily: "inherit",
  color: vars.color.success,
  background: "transparent",
  border: `1px solid ${vars.color.success}`,
  borderRadius: vars.radius.sm,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": {
    background: vars.color.success,
    color: "white",
  },
});

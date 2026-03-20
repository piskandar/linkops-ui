import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// --- Auth gate ---

const gateFadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(20px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const gateCard = style({
  maxWidth: 400,
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[4],
  padding: vars.space[10],
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  boxShadow: vars.shadow.xl,
  animation: `${gateFadeIn} 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

const lockWiggle = keyframes({
  "0%, 100%": { transform: "rotate(0deg)" },
  "20%": { transform: "rotate(-8deg)" },
  "40%": { transform: "rotate(8deg)" },
  "60%": { transform: "rotate(-5deg)" },
  "80%": { transform: "rotate(5deg)" },
});

export const gateIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 64,
  height: 64,
  borderRadius: vars.radius.lg,
  background: vars.color.primary50,
  color: vars.color.primary500,
  animation: `${lockWiggle} 0.8s 0.3s ease both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const gateTitle = style({
  fontSize: vars.font.size2xl,
  fontWeight: 800,
  color: vars.semantic.foreground,
  letterSpacing: "-0.5px",
});

export const gateSubtitle = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  lineHeight: 1.6,
  maxWidth: 280,
});

const shimmer = keyframes({
  "0%": { left: "-100%" },
  "100%": { left: "100%" },
});

export const gateBtn = style({
  position: "relative",
  overflow: "hidden",
  marginTop: vars.space[2],
  padding: `${vars.space[3]} ${vars.space[8]}`,
  fontSize: vars.font.sizeBase,
  fontWeight: 700,
  fontFamily: "inherit",
  color: "white",
  background: vars.color.primary500,
  border: "none",
  borderRadius: vars.radius.full,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    background: vars.color.primary600,
    transform: "translateY(-2px) scale(1.03)",
    boxShadow: `0 8px 25px ${vars.color.primary200}`,
  },
  ":active": {
    transform: "translateY(0) scale(0.97)",
  },
  selectors: {
    "&::after": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "-100%",
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
      transition: "none",
    },
    "&:hover::after": {
      animation: `${shimmer} 0.6s ease`,
    },
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
        "&:hover::after": {
          animation: "none",
        },
      },
    },
  },
});

// --- Loading state ---

const bounce = keyframes({
  "0%, 80%, 100%": { transform: "scale(0.8)", opacity: 0.5 },
  "40%": { transform: "scale(1.3)", opacity: 1 },
});

export const loadingState = style({
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[4],
});

export const loadingDots = style({
  display: "inline-flex",
  gap: 6,
});

export const loadingDot = style({
  width: 10,
  height: 10,
  borderRadius: vars.radius.full,
  background: vars.color.primary500,
  animation: `${bounce} 1.4s infinite both`,
  selectors: {
    "&:nth-child(2)": { animationDelay: "0.16s" },
    "&:nth-child(3)": { animationDelay: "0.32s" },
  },
});

export const loadingText = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  fontStyle: "italic",
});

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
  maxWidth: 1100,
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

// --- Stats ---

export const statsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: vars.space[4],
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const statCard = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[1],
  padding: vars.space[6],
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  animation: `${fadeInUp} 0.5s cubic-bezier(0.23, 1, 0.32, 1) both`,
  ":hover": {
    boxShadow: `${vars.shadow.lg}, 0 0 0 1px ${vars.color.primary200}`,
    transform: "translateY(-3px)",
    borderColor: vars.color.primary200,
  },
  selectors: {
    "&:nth-child(1)": { animationDelay: "0.05s" },
    "&:nth-child(2)": { animationDelay: "0.1s" },
    "&:nth-child(3)": { animationDelay: "0.15s" },
    "&:nth-child(4)": { animationDelay: "0.2s" },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
      selectors: {
        "&:hover": {
          transform: "none",
        },
      },
    },
  },
});

export const statValue = style({
  fontSize: vars.font.size3xl,
  fontWeight: 800,
  color: vars.semantic.foreground,
  letterSpacing: "-1px",
});

export const statValueSmall = style({
  fontSize: vars.font.sizeBase,
  fontWeight: 700,
  fontFamily: "var(--font-geist-mono), monospace",
  color: vars.color.primary500,
});

export const statLabel = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  fontWeight: 500,
});

// --- Chart ---

export const chartCard = style({
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space[6],
  animation: `${fadeInUp} 0.5s 0.25s cubic-bezier(0.23, 1, 0.32, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const chartTitle = style({
  fontSize: vars.font.sizeLg,
  fontWeight: 700,
  color: vars.semantic.foreground,
  marginBottom: vars.space[6],
});

export const chartPlaceholder = style({
  height: 240,
  display: "flex",
  alignItems: "flex-end",
});

export const barChart = style({
  display: "flex",
  alignItems: "flex-end",
  gap: vars.space[3],
  width: "100%",
  height: "100%",
  "@media": {
    "(max-width: 480px)": {
      gap: vars.space[1],
    },
  },
});

export const barCol = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space[2],
  height: "100%",
  justifyContent: "flex-end",
});

const barGrow = keyframes({
  from: { transform: "scaleY(0)" },
  to: { transform: "scaleY(1)" },
});

export const bar = style({
  width: "100%",
  background: `linear-gradient(180deg, ${vars.color.primary500}, ${vars.color.primary700})`,
  borderRadius: `${vars.radius.sm} ${vars.radius.sm} 0 0`,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  minHeight: 4,
  transformOrigin: "bottom",
  animation: `${barGrow} 0.8s cubic-bezier(0.23, 1, 0.32, 1) both`,
  ":hover": {
    background: `linear-gradient(180deg, ${vars.color.primary600}, ${vars.color.primary500})`,
    transform: "scaleY(1.05)",
    boxShadow: `0 -4px 12px ${vars.color.primary50}`,
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
      selectors: {
        "&:hover": {
          transform: "none",
        },
      },
    },
  },
});

// Stagger bar animations via inline style, but we can use nth-child for the delay
globalStyle(`${barChart} ${barCol}:nth-child(1) ${bar}`, { animationDelay: "0.05s" });
globalStyle(`${barChart} ${barCol}:nth-child(2) ${bar}`, { animationDelay: "0.1s" });
globalStyle(`${barChart} ${barCol}:nth-child(3) ${bar}`, { animationDelay: "0.15s" });
globalStyle(`${barChart} ${barCol}:nth-child(4) ${bar}`, { animationDelay: "0.2s" });
globalStyle(`${barChart} ${barCol}:nth-child(5) ${bar}`, { animationDelay: "0.25s" });
globalStyle(`${barChart} ${barCol}:nth-child(6) ${bar}`, { animationDelay: "0.3s" });
globalStyle(`${barChart} ${barCol}:nth-child(7) ${bar}`, { animationDelay: "0.35s" });
globalStyle(`${barChart} ${barCol}:nth-child(8) ${bar}`, { animationDelay: "0.4s" });
globalStyle(`${barChart} ${barCol}:nth-child(9) ${bar}`, { animationDelay: "0.45s" });
globalStyle(`${barChart} ${barCol}:nth-child(10) ${bar}`, { animationDelay: "0.5s" });
globalStyle(`${barChart} ${barCol}:nth-child(11) ${bar}`, { animationDelay: "0.55s" });
globalStyle(`${barChart} ${barCol}:nth-child(12) ${bar}`, { animationDelay: "0.6s" });

export const barLabel = style({
  fontSize: vars.font.sizeXs,
  color: vars.color.secondary500,
  fontWeight: 500,
});

// --- Table ---

export const tableCard = style({
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  overflow: "hidden",
  animation: `${fadeInUp} 0.5s 0.35s cubic-bezier(0.23, 1, 0.32, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const tableHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: `${vars.space[5]} ${vars.space[6]}`,
  borderBottom: `1px solid ${vars.semantic.border}`,
});

export const tableTitle = style({
  fontSize: vars.font.sizeLg,
  fontWeight: 700,
  color: vars.semantic.foreground,
});

const badgePop = keyframes({
  "0%": { transform: "scale(0.8)", opacity: 0 },
  "60%": { transform: "scale(1.1)" },
  "100%": { transform: "scale(1)", opacity: 1 },
});

export const tableBadge = style({
  fontSize: vars.font.sizeXs,
  fontWeight: 600,
  padding: `${vars.space[1]} ${vars.space[3]}`,
  background: vars.color.primary50,
  color: vars.color.primary500,
  borderRadius: vars.radius.full,
  animation: `${badgePop} 0.4s 0.5s cubic-bezier(0.23, 1, 0.32, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const tableWrapper = style({
  overflowX: "auto",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: vars.font.sizeSm,
});

export const tableHead = style({
  textAlign: "left" as const,
  padding: `${vars.space[3]} ${vars.space[6]}`,
  fontWeight: 600,
  fontSize: vars.font.sizeXs,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  color: vars.color.secondary500,
  background: vars.semantic.surfaceRaised,
  borderBottom: `1px solid ${vars.semantic.border}`,
});

export const tableRow = style({
  cursor: "pointer",
  transition: `all 0.2s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    background: vars.semantic.surfaceRaised,
  },
});

export const rowSelected = style({
  background: vars.color.primary50,
  borderLeft: `3px solid ${vars.color.primary500}`,
});

export const tableCell = style({
  padding: `${vars.space[4]} ${vars.space[6]}`,
  borderBottom: `1px solid ${vars.semantic.border}`,
  color: vars.semantic.foreground,
});

export const shortUrl = style({
  fontFamily: "var(--font-geist-mono), monospace",
  fontWeight: 600,
  color: vars.color.primary500,
  transition: `color ${vars.transition.fast}`,
});

globalStyle(`${tableRow}:hover ${shortUrl}`, {
  color: vars.color.primary600,
});

export const originalUrl = style({
  color: vars.color.secondary500,
  maxWidth: 320,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  display: "block",
});

export const clicks = style({
  fontWeight: 700,
  fontFamily: "var(--font-geist-mono), monospace",
});

export const date = style({
  color: vars.color.secondary500,
});

export const detailBtn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.secondary500,
  cursor: "pointer",
  transition: `all 0.2s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    background: vars.color.primary50,
    borderColor: vars.color.primary200,
    color: vars.color.primary500,
    transform: "translateX(2px)",
  },
});

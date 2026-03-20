import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const page = style({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

// --- Hero ---

export const hero = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "70vh",
  padding: `${vars.space[16]} ${vars.space[6]}`,
  background: `radial-gradient(ellipse 80% 60% at 50% -20%, ${vars.color.primary50}, transparent), ${vars.semantic.background}`,
  "@media": {
    "(max-width: 768px)": {
      minHeight: "auto",
      padding: `${vars.space[12]} ${vars.space[4]}`,
    },
  },
});

const fadeInUp = keyframes({
  from: { opacity: 0, transform: "translateY(20px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const heroContent = style({
  width: "100%",
  maxWidth: 680,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[8],
  animation: `${fadeInUp} 0.8s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const title = style({
  fontSize: vars.font.size5xl,
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: "-1.5px",
  color: vars.semantic.foreground,
  "@media": {
    "(max-width: 768px)": {
      fontSize: vars.font.size3xl,
    },
  },
});

const gradientShift = keyframes({
  "0%": { backgroundPosition: "0% 50%" },
  "50%": { backgroundPosition: "100% 50%" },
  "100%": { backgroundPosition: "0% 50%" },
});

export const titleAccent = style({
  background: `linear-gradient(135deg, ${vars.color.primary500}, ${vars.color.primary700}, ${vars.color.primary500})`,
  backgroundSize: "200% 200%",
  animation: `${gradientShift} 6s ease infinite`,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
      backgroundSize: "100% 100%",
    },
  },
});

export const subtitle = style({
  fontSize: vars.font.sizeLg,
  color: vars.color.secondary500,
  maxWidth: 480,
  lineHeight: 1.7,
});

// --- Form ---

export const form = style({
  width: "100%",
  maxWidth: 560,
});

export const inputGroup = style({
  display: "flex",
  gap: 0,
  background: vars.semantic.surface,
  border: `2px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space[1],
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  boxShadow: vars.shadow.lg,
  selectors: {
    "&:focus-within": {
      borderColor: vars.color.primary500,
      boxShadow: `${vars.shadow.xl}, 0 0 0 4px ${vars.color.primary50}`,
    },
  },
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      borderRadius: vars.radius.lg,
    },
  },
});

export const input = style({
  flex: 1,
  padding: `${vars.space[4]} ${vars.space[5]}`,
  fontSize: vars.font.sizeSm,
  fontFamily: "var(--font-geist-mono), monospace",
  background: "transparent",
  border: "none",
  outline: "none",
  color: vars.semantic.foreground,
  minWidth: 0,
  "::placeholder": {
    color: vars.color.secondary300,
  },
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space[4],
    },
  },
});

const shimmer = keyframes({
  "0%": { left: "-100%" },
  "100%": { left: "100%" },
});

export const submitBtn = style({
  position: "relative",
  overflow: "hidden",
  padding: `${vars.space[3]} ${vars.space[8]}`,
  fontSize: vars.font.sizeBase,
  fontWeight: 600,
  fontFamily: "inherit",
  background: vars.color.primary500,
  color: "white",
  border: "none",
  borderRadius: vars.radius.lg,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  whiteSpace: "nowrap",
  ":hover": {
    background: vars.color.primary600,
    transform: "translateY(-2px) scale(1.02)",
    boxShadow: `0 8px 25px ${vars.color.primary200}`,
  },
  ":active": {
    transform: "translateY(0) scale(0.98)",
  },
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.primary500}`,
      outlineOffset: "2px",
    },
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
  },
  "@media": {
    "(max-width: 768px)": {
      padding: vars.space[4],
      borderRadius: vars.radius.md,
    },
    "(prefers-reduced-motion: reduce)": {
      transition: "background 150ms ease",
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

// --- Result ---

const popIn = keyframes({
  "0%": { opacity: 0, transform: "translateY(12px) scale(0.95)" },
  "60%": { opacity: 1, transform: "translateY(-4px) scale(1.01)" },
  "100%": { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const result = style({
  width: "100%",
  maxWidth: 560,
  background: vars.color.successLight,
  border: `1px solid ${vars.color.success}`,
  borderRadius: vars.radius.lg,
  padding: `${vars.space[4]} ${vars.space[5]}`,
  animation: `${popIn} 0.5s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const resultLabel = style({
  fontSize: vars.font.sizeXs,
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.5px",
  color: vars.color.success,
  marginBottom: vars.space[2],
});

export const resultRow = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space[4],
  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

export const resultUrl = style({
  fontFamily: "var(--font-geist-mono), monospace",
  fontSize: vars.font.sizeLg,
  fontWeight: 600,
  color: vars.semantic.foreground,
});

const successPulse = keyframes({
  "0%": { boxShadow: `0 0 0 0 ${vars.color.success}` },
  "70%": { boxShadow: "0 0 0 6px rgba(16, 185, 129, 0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" },
});

export const copyBtn = style({
  padding: `${vars.space[2]} ${vars.space[4]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  fontFamily: "inherit",
  background: vars.color.success,
  color: "white",
  border: "none",
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  whiteSpace: "nowrap",
  ":hover": {
    transform: "scale(1.05)",
    boxShadow: `0 4px 12px ${vars.color.successLight}`,
  },
  ":active": {
    transform: "scale(0.95)",
  },
});

export const copyBtnCopied = style({
  background: vars.color.secondary700,
  animation: `${successPulse} 0.6s ease`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

// --- Features ---

export const features = style({
  padding: `${vars.space[20]} ${vars.space[6]}`,
  background: vars.semantic.surfaceRaised,
  borderTop: `1px solid ${vars.semantic.border}`,
});

export const featuresInner = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: vars.space[8],
  maxWidth: 1000,
  margin: "0 auto",
  "@media": {
    "(max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

const featureFadeIn = keyframes({
  from: { opacity: 0, transform: "translateY(24px)" },
  to: { opacity: 1, transform: "translateY(0)" },
});

export const feature = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[4],
  padding: vars.space[8],
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  animation: `${featureFadeIn} 0.6s cubic-bezier(0.23, 1, 0.32, 1) both`,
  ":hover": {
    boxShadow: vars.shadow.lg,
    transform: "translateY(-4px)",
    borderColor: vars.color.primary200,
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
  selectors: {
    "&:nth-child(1)": { animationDelay: "0.1s" },
    "&:nth-child(2)": { animationDelay: "0.2s" },
    "&:nth-child(3)": { animationDelay: "0.3s" },
  },
});

const iconFloat = keyframes({
  "0%, 100%": { transform: "translateY(0)" },
  "50%": { transform: "translateY(-3px)" },
});

export const featureIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  background: vars.color.primary50,
  color: vars.color.primary500,
  borderRadius: vars.radius.lg,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
});

// When hovering the feature card, the icon floats
globalStyle(`${feature}:hover ${featureIcon}`, {
  animation: `${iconFloat} 1.5s ease-in-out infinite`,
  background: vars.color.primary100,
});

export const featureTitle = style({
  fontSize: vars.font.sizeLg,
  fontWeight: 700,
  color: vars.semantic.foreground,
});

export const featureDesc = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  lineHeight: 1.6,
});

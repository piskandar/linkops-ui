import { style, keyframes } from "@vanilla-extract/css";
import { vars } from "../theme.css";

const fadeInUp = keyframes({
  from: { opacity: 0, transform: "translateY(24px) scale(0.97)" },
  to: { opacity: 1, transform: "translateY(0) scale(1)" },
});

export const page = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${vars.space[12]} ${vars.space[4]}`,
  background: `radial-gradient(ellipse 60% 50% at 50% 0%, ${vars.color.primary50}, transparent), ${vars.semantic.background}`,
});

export const card = style({
  width: "100%",
  maxWidth: 420,
  background: vars.semantic.surface,
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.xl,
  padding: vars.space[8],
  boxShadow: vars.shadow.xl,
  animation: `${fadeInUp} 0.6s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
    "(max-width: 480px)": {
      padding: vars.space[6],
    },
  },
});

export const cardHeader = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  gap: vars.space[3],
  marginBottom: vars.space[8],
});

const iconBounce = keyframes({
  "0%": { transform: "scale(0) rotate(-10deg)" },
  "60%": { transform: "scale(1.15) rotate(3deg)" },
  "100%": { transform: "scale(1) rotate(0deg)" },
});

export const iconWrap = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 56,
  height: 56,
  borderRadius: vars.radius.lg,
  background: vars.color.primary50,
  color: vars.color.primary500,
  animation: `${iconBounce} 0.6s 0.2s cubic-bezier(0.23, 1, 0.32, 1) both`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const title = style({
  fontSize: vars.font.size2xl,
  fontWeight: 800,
  color: vars.semantic.foreground,
  letterSpacing: "-0.5px",
});

export const subtitle = style({
  fontSize: vars.font.sizeSm,
  color: vars.color.secondary500,
  lineHeight: 1.5,
});

// --- Form ---

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space[5],
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

const shake = keyframes({
  "0%, 100%": { transform: "translateX(0)" },
  "15%": { transform: "translateX(-6px)" },
  "30%": { transform: "translateX(5px)" },
  "45%": { transform: "translateX(-4px)" },
  "60%": { transform: "translateX(3px)" },
  "75%": { transform: "translateX(-2px)" },
});

export const error = style({
  padding: `${vars.space[3]} ${vars.space[4]}`,
  fontSize: vars.font.sizeSm,
  color: vars.color.error,
  background: `${vars.color.error}11`,
  border: `1px solid ${vars.color.error}33`,
  borderRadius: vars.radius.md,
  animation: `${shake} 0.5s ease`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
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
  padding: `${vars.space[4]}`,
  fontSize: vars.font.sizeBase,
  fontWeight: 700,
  fontFamily: "inherit",
  color: "white",
  background: vars.color.primary500,
  border: "none",
  borderRadius: vars.radius.lg,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  marginTop: vars.space[2],
  ":hover": {
    background: vars.color.primary600,
    transform: "translateY(-2px) scale(1.01)",
    boxShadow: `0 8px 25px ${vars.color.primary200}`,
  },
  ":active": {
    transform: "translateY(0) scale(0.98)",
  },
  ":disabled": {
    cursor: "not-allowed",
    opacity: 0.85,
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
    "&:disabled:hover": {
      transform: "none",
      boxShadow: "none",
    },
    "&:disabled:hover::after": {
      animation: "none",
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

// --- Loading dots ---

const bounce = keyframes({
  "0%, 80%, 100%": { transform: "scale(0.8)", opacity: 0.5 },
  "40%": { transform: "scale(1.3)", opacity: 1 },
});

export const loadingDots = style({
  display: "inline-flex",
  gap: 4,
  alignItems: "center",
  justifyContent: "center",
  height: 24,
});

export const dot = style({
  width: 8,
  height: 8,
  borderRadius: vars.radius.full,
  background: "white",
  animation: `${bounce} 1.4s infinite both`,
  selectors: {
    "&:nth-child(2)": { animationDelay: "0.16s" },
    "&:nth-child(3)": { animationDelay: "0.32s" },
  },
});

// --- Hint ---

export const hint = style({
  marginTop: vars.space[6],
  padding: `${vars.space[3]} ${vars.space[4]}`,
  fontSize: vars.font.sizeXs,
  color: vars.color.secondary500,
  textAlign: "center",
  background: vars.semantic.surfaceRaised,
  borderRadius: vars.radius.md,
  lineHeight: 1.5,
});

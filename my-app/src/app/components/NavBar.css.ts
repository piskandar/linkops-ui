import { style, keyframes, globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const nav = style({
  position: "sticky",
  top: 0,
  zIndex: 100,
  background: vars.semantic.surface,
  borderBottom: `1px solid ${vars.semantic.border}`,
  backdropFilter: "blur(12px)",
});

export const navInner = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1200,
  margin: "0 auto",
  padding: `${vars.space[4]} ${vars.space[6]}`,
});

const wiggle = keyframes({
  "0%, 100%": { transform: "rotate(0deg)" },
  "25%": { transform: "rotate(-3deg)" },
  "75%": { transform: "rotate(3deg)" },
});

export const logo = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
  fontSize: vars.font.sizeXl,
  fontWeight: 700,
  fontFamily: "var(--font-geist-mono), monospace",
  letterSpacing: "-0.5px",
  color: vars.semantic.foreground,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    transform: "scale(1.03)",
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

export const logoIcon = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  background: vars.color.primary500,
  color: "white",
  borderRadius: vars.radius.sm,
  fontSize: vars.font.sizeXs,
  fontWeight: 700,
  fontFamily: "var(--font-geist-mono), monospace",
  letterSpacing: "-1px",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
});

globalStyle(`${logo}:hover ${logoIcon}`, {
  animation: `${wiggle} 0.4s ease`,
  background: vars.color.primary600,
});

export const navRight = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[4],
});

export const navLinks = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[1],
});

export const navLink = style({
  position: "relative",
  padding: `${vars.space[2]} ${vars.space[4]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 500,
  color: vars.color.secondary500,
  borderRadius: vars.radius.md,
  transition: `all ${vars.transition.fast}`,
  ":hover": {
    color: vars.semantic.foreground,
    background: vars.semantic.surfaceRaised,
  },
});

export const navActions = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
});

export const loginBtn = style({
  padding: `${vars.space[2]} ${vars.space[5]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 600,
  color: "white",
  background: vars.color.primary500,
  borderRadius: vars.radius.full,
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    background: vars.color.primary600,
    transform: "translateY(-1px)",
    boxShadow: `0 4px 12px ${vars.color.primary200}`,
  },
  ":active": {
    transform: "translateY(0)",
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

export const userArea = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space[2],
});

const avatarPop = keyframes({
  "0%": { transform: "scale(0)" },
  "60%": { transform: "scale(1.15)" },
  "100%": { transform: "scale(1)" },
});

export const avatar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: vars.radius.full,
  background: `linear-gradient(135deg, ${vars.color.primary500}, ${vars.color.primary700})`,
  color: "white",
  fontSize: vars.font.sizeSm,
  fontWeight: 700,
  animation: `${avatarPop} 0.4s cubic-bezier(0.23, 1, 0.32, 1)`,
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animation: "none",
    },
  },
});

export const logoutBtn = style({
  padding: `${vars.space[2]} ${vars.space[4]}`,
  fontSize: vars.font.sizeSm,
  fontWeight: 500,
  fontFamily: "inherit",
  color: vars.color.secondary500,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  cursor: "pointer",
  transition: `all ${vars.transition.fast}`,
  ":hover": {
    color: vars.color.error,
    borderColor: vars.color.error,
    background: vars.semantic.surfaceRaised,
  },
});

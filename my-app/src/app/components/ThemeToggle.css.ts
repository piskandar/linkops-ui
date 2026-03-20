import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const toggle = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  background: "transparent",
  border: `1px solid ${vars.semantic.border}`,
  borderRadius: vars.radius.md,
  color: vars.color.secondary500,
  cursor: "pointer",
  transition: `all 0.3s cubic-bezier(0.23, 1, 0.32, 1)`,
  ":hover": {
    color: vars.semantic.foreground,
    background: vars.semantic.surfaceRaised,
    borderColor: vars.color.secondary300,
    transform: "rotate(15deg) scale(1.1)",
  },
  ":active": {
    transform: "rotate(0deg) scale(0.9)",
  },
  selectors: {
    "&:focus-visible": {
      outline: `2px solid ${vars.color.primary500}`,
      outlineOffset: "2px",
    },
  },
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      transition: "color 150ms ease, background 150ms ease",
      selectors: {
        "&:hover": {
          transform: "none",
        },
        "&:active": {
          transform: "none",
        },
      },
    },
  },
});

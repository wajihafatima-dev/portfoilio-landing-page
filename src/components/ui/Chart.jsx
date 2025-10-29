"use client";
import React from "react";
import  { createContext, useContext, useMemo } from "react";
import {
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import { Box, Typography, Stack } from "@mui/material";

const ChartContext = createContext(null);

export function useChart() {
  const context = useContext(ChartContext);
  if (!context) throw new Error("useChart must be used within <ChartContainer />");
  return context;
}

// Chart container with theme-aware custom colors
export function ChartContainer({ id, config, children, sx, ...props }) {
  const chartId = `chart-${id || Math.random().toString(36).substr(2, 9)}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <Box
        data-chart={chartId}
        sx={{
          display: "flex",
          justifyContent: "center",
          aspectRatio: "16/9",
          textAlign: "center",
          ...sx,
        }}
        {...props}
      >
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </Box>
    </ChartContext.Provider>
  );
}

// Custom tooltip
export function ChartTooltipContent({
  active,
  payload,
  hideLabel = false,
  labelFormatter,
}) {
  const { config } = useChart();

  // Call useMemo first, always
  const tooltipLabel = useMemo(() => {
    if (!payload?.length || hideLabel) return null;
    const item = payload[0];
    const key = item?.dataKey || "value";
    const label = config[key]?.label || key;
    return labelFormatter ? labelFormatter(label, payload) : label;
  }, [payload, hideLabel, config, labelFormatter]);

  // Then return null if not active or no payload
  if (!active || !payload?.length) return null;

  return (
    <Box
      sx={{
        border: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
        p: 1.5,
        borderRadius: 1,
        boxShadow: 3,
        minWidth: 120,
      }}
    >
      {tooltipLabel && (
        <Typography variant="subtitle2" gutterBottom>
          {tooltipLabel}
        </Typography>
      )}
      <Stack spacing={0.5}>
        {payload.map((item, idx) => (
          <Stack key={idx} direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: 0.5,
                bgcolor: item.color,
              }}
            />
            <Typography variant="body2">{item.value}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}


// Custom legend
export function ChartLegendContent({ payload, verticalAlign = "bottom" }) {
  const { config } = useChart();
  if (!payload?.length) return null;

  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      sx={{ pt: verticalAlign === "bottom" ? 1 : 0, pb: verticalAlign === "top" ? 1 : 0 }}
    >
      {payload.map((item, idx) => {
        const key = item.dataKey || "value";
        const label = config[key]?.label || key;
        return (
          <Stack key={idx} direction="row" spacing={0.5} alignItems="center">
            <Box sx={{ width: 12, height: 12, bgcolor: item.color, borderRadius: 0.5 }} />
            <Typography variant="body2">{label}</Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export const ChartTooltip = RechartsTooltip;
export const ChartLegend = RechartsLegend;

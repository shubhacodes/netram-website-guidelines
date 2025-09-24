"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "@/lib/utils";

const THEMES = {
  light: "[&_.recharts-cartesian-axis-tick_text]:fill-slate-700 [&_.recharts-cartesian-grid_line]:stroke-slate-200 [&_.recharts-polar-grid-angle-line]:stroke-slate-200 [&_.recharts-polar-grid-concentric-line]:stroke-slate-200",
  dark: "[&_.recharts-cartesian-axis-tick_text]:fill-slate-400 [&_.recharts-cartesian-grid_line]:stroke-slate-800 [&_.recharts-polar-grid-angle-line]:stroke-slate-800 [&_.recharts-polar-grid-concentric-line]:stroke-slate-800",
};

export const ChartConfig = {
  [k in string]: {
    label: React.ReactNode;
    icon: React.ComponentType;
  } & (
    | { color: string; theme: never }
    | { color: never; theme: Record<keyof typeof THEMES, string> }
  );
};

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color
  );

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme] ||
      itemConfig.color;
    return color ? `  --color-${key}: ${color};` : null;
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  );
};

const ChartTooltip = RechartsPrimitive.Tooltip;

function ChartTooltipContent({
  active,
  payload,
  label,
  config,
  ...props
}) {
  if (!active || !payload) {
    return null;
  }

  const { setActive } = props;

  const items = payload.map((item, index) => {
    const configItem = config[item.dataKey];
    const color =
      configItem?.theme?.light || configItem?.color || item.color;

    return (
      <div
        key={index}
        className="flex items-center gap-2 rounded-lg border bg-background p-2 text-sm shadow-sm"
        style={{
          "--color": color,
        }}
        data-slot="item"
      >
        {configItem?.icon && (
          <configItem.icon className="h-4 w-4" style={{ color: "var(--color)" }} />
        )}
        <span className="text-muted-foreground">{configItem?.label || item.dataKey}:</span>
        <span className="font-medium text-foreground">{item.value}</span>
      </div>
    );
  });

  return (
    <div
      className="rounded-lg border bg-background p-2 text-sm shadow-sm"
      data-slot="content"
    >
      <div className="grid gap-1">
        <div className="px-2 py-1.5 text-sm font-medium">{label}</div>
        <div className="grid gap-1">{items}</div>
      </div>
    </div>
  );
}

const ChartLegend = RechartsPrimitive.Legend;

function ChartLegendContent({
  payload,
  config,
  ...props
}) {
  const { setActive } = props;

  const items = payload.map((item, index) => {
    const configItem = config[item.dataKey];
    const color =
      configItem?.theme?.light || configItem?.color || item.color;

    return (
      <div
        key={index}
        className="flex items-center gap-2 rounded-lg border bg-background p-2 text-sm shadow-sm"
        style={{
          "--color": color,
        }}
        data-slot="item"
        onMouseEnter={() => setActive?.(item.dataKey)}
        onMouseLeave={() => setActive?.(null)}
      >
        {configItem?.icon && (
          <configItem.icon className="h-4 w-4" style={{ color: "var(--color)" }} />
        )}
        <span className="text-muted-foreground">{configItem?.label || item.dataKey}</span>
      </div>
    );
  });

  return (
    <div
      className="flex flex-wrap gap-2"
      data-slot="content"
    >
      {items}
    </div>
  );
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  useChart,
};

export interface ColorPalette {
  hex: string;
  rgb: string;
  hsl: string;
}

export type ColorFormat = "hex" | "rgb" | "hsl";

export interface ExtensionSettings {
  defaultFormat: ColorFormat;
  showTooltip: boolean;
  colorHistory: number;
}

export interface TestimonialType {
  content: string;
  author: string;
  role: string;
  avatar: string;
}

export interface FeatureType {
  title: string;
  description: string;
  icon: React.ReactNode;
}

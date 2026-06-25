import type { WorkSample } from "@/data/professionals";

export function isValidWorkSampleUrl(src: string, options: { allowRelative?: boolean } = {}) {
  const trimmed = src.trim();
  if (!trimmed) return false;

  if (options.allowRelative !== false && trimmed.startsWith("/")) {
    return !trimmed.startsWith("//");
  }

  try {
    const url = new URL(trimmed);
    return (url.protocol === "https:" || url.protocol === "http:") && Boolean(url.hostname);
  } catch {
    return false;
  }
}

export function getVisibleWorkSamples(samples?: WorkSample[], max = 6) {
  return (samples ?? [])
    .filter((sample) => (
      Boolean(sample.src.trim()) &&
      Boolean(sample.alt.trim()) &&
      isValidWorkSampleUrl(sample.src)
    ))
    .slice(0, max);
}

export function getGalleryWorkSamples(samples?: WorkSample[]) {
  const visibleSamples = getVisibleWorkSamples(samples);
  return visibleSamples.length >= 2 ? visibleSamples : [];
}

export function getPreviewWorkSample(samples?: WorkSample[]) {
  return getVisibleWorkSamples(samples, 1)[0];
}

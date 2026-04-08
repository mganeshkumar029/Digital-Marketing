const assetModules = import.meta.glob("../assets/*.{png,jpg,jpeg,svg,webp,gif,avif}", {
  eager: true,
  import: "default",
});

export function resolveAsset(path) {
  if (!path) return "";

  const normalizedPath = path
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .replace(/^client\/src\/assets\//, "")
    .replace(/^src\/assets\//, "")
    .replace(/^assets\//, "");

  return assetModules[`../assets/${normalizedPath}`] ?? path;
}

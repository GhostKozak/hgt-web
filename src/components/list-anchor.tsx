export default function ListAnchor({
  backgroundColor = "#fdf36d",
}: {
  backgroundColor?: string;
} = {}) {
  return (
    <div
      className={`cos h-4`}
      style={{
        aspectRatio: `cos(30deg)`,
        clipPath: "polygon(-50% 50%,50% 100%,150% 50%,50% 0)",
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
}

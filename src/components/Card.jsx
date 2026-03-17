export default function Card({ children }) {
  return (
    <div className="
      bg-white/90
      backdrop-blur
      rounded-2xl
      shadow-md
      p-6
      border border-white/40
      hover:shadow-xl
      transition
      h-full
    ">
      {children}
    </div>
  )
}
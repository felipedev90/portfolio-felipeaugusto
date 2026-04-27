export function Footer() {
  return (
    <footer className=" max-w-full mx-auto text-center border-t border-border-strong px-16 py-8">
      <div className="flex items-center justify-between max-w-360 mx-auto">
        <p className="text-sand-muted text-sm">Desenvolvido por Felipe Augusto 🍃</p>
        <p className="text-sand-muted text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

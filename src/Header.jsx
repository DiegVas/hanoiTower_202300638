import "./Styles/Header.css";

export default function Header({ openModal, reset, setMoveCount }) {
  return (
    <nav className="Header">
      <button
        onClick={() => {
          setMoveCount(0);
          reset();
        }}
      >
        Reiniciar
      </button>
      <button onClick={openModal}>Nivel</button>
      <button>Mostrar solucion</button>
    </nav>
  );
}

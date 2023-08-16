
const Pedido = (props) => {
 const {children} = props
  return (
    <div>
      <h2>Tu pedido es</h2>
      <p>{children}</p>
      <button onClick={props.onDelete}>Eliminar pedido</button>
    </div>
  );
};

export default Pedido;

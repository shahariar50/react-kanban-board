function withDroppable(Component) {
  return function WrapperComponent({ children, ...droppableProps }) {
    return <Component>{children}</Component>;
  };
}

export default withDroppable;

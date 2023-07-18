interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto px-2 md:px-5 ">{children}</div>;
};

export default Wrapper;

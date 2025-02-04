interface testProps {
  test: String;
}

export default function TestComponent({ test }: testProps) {
  return <div>Testing Div {test}</div>;
}

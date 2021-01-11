import MyReact from './custom-hook';

export function Counter() {
  const [count, setCount] = MyReact.useState(0);
  MyReact.useEffect(() => {
    console.log('effect', count);
  }, [count]);
  return {
    click: () => setCount(count + 1),
    noop: () => setCount(count),
    render: () => console.log('render', { count }),
  };
}

export default Counter;

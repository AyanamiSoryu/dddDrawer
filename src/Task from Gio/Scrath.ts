type Component<Props extends object = {}> = {
  mount: (target: HTMLElement) => void; // should mount into target and throw error if component or hist parent already mounted;
  update: (props: Props) => void; // should update dom;
};

type BasicComponentType = string;
type CustomComponentType<Props extends object = {}> = (props: Props) => string | number | boolean | HTMLElement;
type ComponentType<Props extends object = {}> = BasicComponentType | CustomComponentType<Props>;

type CreateComponent<Props extends object = {}> = (
  type: ComponentType,
  props: Props,
  children?: Component[]
) => Component;

const Calculator = (props: { a: number; b: number }) => {
  const { a, b } = props;
  return a + b;
};

const child1 = createComponent('div', { style: { width: '30px', height: '30px', background: 'blue' } });
const child2 = createComponent('div', { style: { width: '30px', height: '30px', background: 'yellow' } });
const child3 = createComponent(Calculator, { a: 1, b: 3 });

const root = createComponent('div', {}, [child3]);

root.mount(document.body);

setTimeout(() => {
  root.update(root.props, [child1, child2, child3]);
}, 1000);

setTimeout(() => {
  child1.update({ style: { background: 'pink' } });
}, 2000);

setTimeout(() => {
  child2.update({ style: { background: 'black' } });
}, 3000);

setTimeout(() => {
  child3.update({ a: 10, b: 10 });
}, 4000);

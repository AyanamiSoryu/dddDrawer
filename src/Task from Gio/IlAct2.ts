type ComponentType = string;
type ComponentChild = Component | string | boolean | number | null | undefined;
type ComponentChildren = Array<ComponentChild>;

interface IComponent<Props extends object = {}> {
  constructor(type: ComponentType, props: Props, children?: ComponentChildren[]): IComponent;
  node: HTMLElement;
  props: Props;
  // mount(target: HTMLElement): void; // should mount into target and throw error if component or hist parent already mounted;
  update(props: Props): void; // should update dom;
}
class Component<Props extends object = {}> {
  type: ComponentType;

  props: Props;

  children: ComponentChildren;

  node: HTMLElement;

  constructor(type: ComponentType, props: Props, children?: ComponentChildren) {
    this.type = type;
    this.props = props;
    this.children = children ?? [];
    this.node = typeof this.type === 'string' ? document.createElement(this.type) : throw new Error('huy');
  }

  const node = (): HTMLElement => {
    if(typeof this.type === 'string'){
      const newElement = document.createElement(this.type);
    }

    if (this.children.length > 0) {
      this.children.forEach((child) => {
        child.;
      });
    }
  };
}

const Calculator = (props: { a: number; b: number }) => {
  const { a, b } = props;
  return a + b;
};

const child1 = new Component('div', { style: { width: '30px', height: '30px', background: 'blue' } });
const child2 = new Component('div', { style: { width: '30px', height: '30px', background: 'yellow' } });
// const child3 = new Component(Calculator, { a: 1, b: 3 });

const root = new Component('div', {});


document.body.appendChild(root.node);

setTimeout(() => {
  root.update(root.props, [child1, child2]);
}, 1000);

setTimeout(() => {
  child1.update({ style: { background: 'pink' } });
}, 2000);

setTimeout(() => {
  child2.update({ style: { background: 'black' } });
}, 3000);

setTimeout(() => {
  // child3.update({ a: 10, b: 10 });
}, 4000);

new Component('div', {}, [
  'hello',
  ' ',
  new Component('b', {}, ['World']),
  '!',
  // new Component(Calculator, { a: 10, b: 15 })
]);

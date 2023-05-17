type Component<Props extends object = {}> = {
  mount: (target: HTMLElement) => void;
  // should mount into target and throw error if component or hist parent already mounted;
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

export const createComponent: CreateComponent = (type, props, children?): Component => {
  const newElement = document.createElement(`${type}`);
  const componentProps = Object.assign({}, ...props);
  const mount = (target): void => {
    if (componentProps.style) {
      const styles = Object.keys(componentProps.style).reduce((acc, key) => {
        return `${acc}${key}:``${componentProps.style.key};`;
      }, '');
      newElement.style.cssText = styles;
      if (target.type === newElement) {
        throw new Error('The same node has already mounted');
      }
      target.appendChild(newElement);
      if (!!children && children.length > 0) {
        children.forEach((child) => child.mount(`${target}${type}`));
      }
    }
  };

  const update = (): void => {
    Object.keys(componentProps.style).forEach((char) => {
      newElement.style[char] = `${componentProps.style[char]}`;
    });
  };

  return {
    mount: mount(),
    update: update(),
  }
};


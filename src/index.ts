export type HelloWorldProps = {
  name: string;
};

export const helloWorld = ({ name }: HelloWorldProps) => {
  return `Hello, ${name}. Nice`;
};

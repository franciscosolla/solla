export default function classNames(...classes: (string | undefined)[]) {
  return classes.reduce((result, className, index) => result + (className ? `${index ? ' ' : ''}${className}` : ''), '');
}
type SeparatorProps = {
  smallSpacing?: boolean;
  color?: string;
  width?: string;
};

const Separator = ({ smallSpacing, color, width = '' }: SeparatorProps) => {
  return (
    <hr
      className={`${width ? width : 'w-24'} my-8 ${
        smallSpacing ? 'md:my-20' : 'md:my-8'
      } h-1 ${color ? color : 'bg-gray-700 dark:bg-white'} mx-auto`}
    />
  );
};

export default Separator;

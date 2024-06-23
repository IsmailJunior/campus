import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';

const useMDXComponent = ( content: string ) =>
{
  const fn = new Function( content );
  return fn( { ...runtime } ).default;
};

const components = {
  Image,
}

interface MdxProps {
  content: string;
}

export function MDXContent({ content }: MdxProps) {
  const Component = useMDXComponent(content);
  return <Component components={components} />;
}
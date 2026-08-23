import { Center } from '@/components';

/** @type {import('next').Metadata} */
export const metadata = {
  title: '404',
  description: 'Page not found — abangobed',
};

export default function NotFound() {
  return (
    <Center className='h-screen'>
      <div className='select-none'>
        <h1 className='text-[max(9.5em,16vw)]'>Not Found</h1>
      </div>
    </Center>
  );
}

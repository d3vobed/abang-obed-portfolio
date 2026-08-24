/** @param {import('react').PropsWithChildren<unknown>} */
export function ThumbnailLabel({ children }) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h2 className='text-[clamp(1.6rem,4vw,3rem)] font-medium leading-none text-foreground'>
        {children}
      </h2>
      <p className='mt-3 max-w-md text-sm text-muted-foreground'>
        A mix of security, research and film. Hover to preview, click to jump
        to the detail.
      </p>
    </div>
  );
}

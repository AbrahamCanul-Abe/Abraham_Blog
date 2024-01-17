type IFooterCopyrightProps = {
  site_name: string;
};

const FooterCopyright = (props: IFooterCopyrightProps) => (
  <div className="border-t border-gray-600 pt-5">
    <div className="text-sm text-blue-800">
      © Copyright {new Date().getFullYear()} by {props.site_name}. Built with Astro
      by{' '}
      <a
        className="text-blue-400 hover:underline"
        href="https://twitter.com/Abraham23Acc"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abraham Canul Couoh
      </a>
      .
    </div>
  </div>
);

export { FooterCopyright };

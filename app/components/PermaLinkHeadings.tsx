import { LinkIcon } from "lucide-react";
import { Link } from "react-router";
import slugify from "slugify";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
};

const Heading = ({ level, children }: Props) => {
  const Tag = `h${level}` as const;
  const id = slugify(children?.toString() || "", { lower: true, remove: /[*+~.()'"!:@]/g });

  return (
    <Tag id={id} className="group scroll-mt-24 relative">
      <Link
        to={`#${id}`}
        id="permalink"
        className="opacity-0 group-hover:opacity-100 transition-opacity absolute -left-6 top-[8px] text-lg"
        aria-label="Anchor link to heading"
      >
        <LinkIcon size={16} />
      </Link>
      {children}
    </Tag>
  );
};

export const PermaLinkHeadings = {
  h1: (props: any) => <Heading level={1} {...props} />,
  h2: (props: any) => <Heading level={2} {...props} />,
  h3: (props: any) => <Heading level={3} {...props} />,
  h4: (props: any) => <Heading level={4} {...props} />,
  h5: (props: any) => <Heading level={5} {...props} />,
  h6: (props: any) => <Heading level={6} {...props} />,
};

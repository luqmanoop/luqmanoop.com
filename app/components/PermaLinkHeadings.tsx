import { LinkIcon } from "lucide-react";
import { Link } from "react-router";
import slugify from "slugify";

type Props = {
	level: 1 | 2 | 3 | 4 | 5 | 6;
	children: React.ReactNode;
};

const Heading = ({ level, children }: Props) => {
	const Tag = `h${level}` as const;
	const id = slugify(children?.toString() || "", {
		lower: true,
		remove: /[*+~.()'"!:@]/g,
	});

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

const PermaLinkHeadings = {
	h1: (props: Props) => <Heading {...props} level={1} />,
	h2: (props: Props) => <Heading {...props} level={2} />,
	h3: (props: Props) => <Heading {...props} level={3} />,
	h4: (props: Props) => <Heading {...props} level={4} />,
	h5: (props: Props) => <Heading {...props} level={5} />,
	h6: (props: Props) => <Heading {...props} level={6} />,
};

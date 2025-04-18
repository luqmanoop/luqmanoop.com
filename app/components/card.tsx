const Card = ({
  title,
  description,
  link,
  badge,
}: {
  title: string;
  description: string;
  link: string;
  badge: string[];
}) => {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 shadow">
      <div className="flex flex-col gap-2 items-start">
        <h3 className="font-semibold">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </a>
        </h3>
        <p className="text-sm">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {badge.map((badge) => (
            <span
              key={badge}
              className="text-xs bg-gray-200 dark:bg-slate-800 px-2 py-1 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

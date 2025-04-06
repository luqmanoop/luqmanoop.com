import { Card, CardContent } from "./ui/card";

const CreatingCard = ({
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
    <Card>
      <CardContent className="flex flex-col gap-2 items-start">
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
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {badge.map((badge) => (
            <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
              {badge}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatingCard;

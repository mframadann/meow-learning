import { FC } from "react";
import { CssIcon, HtmlIcon, JavascriptIcon } from "../Icons";

export enum IconTypeEnums {
  "javascript" = "javascript",
  "css" = "css",
  "html" = "html",
}

type LearningPathBadgeProps = {
  type: IconTypeEnums;
  title: string;
};

const LearningPathBadge: FC<LearningPathBadgeProps> = ({ title, type }) => {
  let icon;

  switch (IconTypeEnums[type]) {
    case "javascript":
      icon = <JavascriptIcon />;
      break;
    case "css":
      icon = <CssIcon />;
      break;

    default:
      icon = <HtmlIcon />;
      break;
  }
  return (
    <div className="flex flex-col gap-2.5 items-center text-center">
      <div className="p-2 w-full h-full rounded-full bg-learning-path-outline max-w-fit">
        <div className="w-24 h-24 border-2 rounded-full border-green-800 bg-white flex items-center justify-center">
          {icon}
        </div>
      </div>
      <span className="text-2xl font-medium text-white">{title}</span>
    </div>
  );
};

export default LearningPathBadge;

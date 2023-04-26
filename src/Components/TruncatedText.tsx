import React from "react";

interface TruncatedTextProps {
  text: string;
  maxLength: number;
  className?: string;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  text,
  maxLength,
  className,
}) => {
  const truncateText = (input: string, maxLength: number) => {
    if (input.length > maxLength) {
      return `${input.substring(0, maxLength)}...`;
    }
    return input;
  };

  return (
    <div className={` break-words ${className}`}>
      {truncateText(text, maxLength)}
    </div>
  );
};

export default TruncatedText;

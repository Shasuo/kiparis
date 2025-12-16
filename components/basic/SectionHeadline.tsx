interface SectionHeadlineProps {
  text: string;
}

export const SectionHeadline = ({ text }: SectionHeadlineProps) => {
  return <div className="text-2xl font-normal">{text}</div>;
};

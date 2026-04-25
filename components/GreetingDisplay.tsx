interface GreetingDisplayProps {
  message: string;
}

export default function GreetingDisplay({
  message,
}: GreetingDisplayProps): React.ReactElement {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-gray-800 md:text-6xl lg:text-7xl">
        {message}
      </h1>
    </div>
  );
}
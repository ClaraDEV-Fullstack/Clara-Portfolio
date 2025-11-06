interface BadgeProps {
    name: string;
    className?: string;
}

export default function Badge({ name, className = '' }: BadgeProps) {
    return (
        <span className={`inline-block bg-primary-100 text-primary-800 rounded-full px-4 py-1 text-sm font-semibold mr-2 mb-2 ${className}`}>
      {name}
    </span>
    );
}
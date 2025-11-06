
interface SectionTitleProps {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
            {subtitle && <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
            <div className="mt-4 w-20 h-1 bg-primary-500 mx-auto"></div>
        </div>
    );
}
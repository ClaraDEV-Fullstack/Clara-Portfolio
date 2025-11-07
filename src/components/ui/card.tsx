import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}>
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

export function CardTitle({ children, className = '' }: CardTitleProps) {
    return (
        <h3 className={`text-xl font-bold ${className}`}>
            {children}
        </h3>
    );
}

interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return (
        <div className={`px-6 py-4 ${className}`}>
            {children}
        </div>
    );
}

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
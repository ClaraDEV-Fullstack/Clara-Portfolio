/*import SectionTitle from "@/components/SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const awards = [
    {
        title: "Best Web Design Award",
        organization: "Design Excellence Awards",
        year: "2022",
        description: "Recognized for outstanding web design and user experience in the E-commerce category.",
        image: "/award1.jpg"
    },
    {
        title: "Innovation in Tech Award",
        organization: "Tech Innovation Summit",
        year: "2021",
        description: "Honored for developing an innovative solution that improved accessibility in web applications.",
        image: "/award2.jpg"
    },
    {
        title: "Young Designer of the Year",
        organization: "Creative Design Association",
        year: "2020",
        description: "Recognized as the most promising young designer in the industry for innovative work.",
        image: "/award3.jpg"
    }
];

const publications = [
    {
        title: "Improving User Experience in Web Applications through Responsive Design",
        journal: "Journal of Human-Computer Interaction",
        year: "2020",
        description: "Research paper exploring the impact of responsive design techniques on user experience metrics.",
        link: "#"
    },
    {
        title: "Modern Approaches to Frontend Development",
        book: "Contemporary Web Development",
        year: "2021",
        description: "Book chapter discussing current trends and best practices in frontend development.",
        link: "#"
    },
    {
        title: "The Intersection of Design and Development",
        journal: "Design & Technology Quarterly",
        year: "2022",
        description: "Article exploring how collaboration between designers and developers leads to better digital products.",
        link: "#"
    }
];

const speaking = [
    {
        title: "The Future of Responsive Design",
        event: "Web Design Conference",
        year: "2023",
        location: "San Francisco, CA",
        description: "Keynote presentation on emerging trends in responsive design and their impact on user experience."
    },
    {
        title: "Bridging the Gap Between Design and Development",
        event: "Tech & Design Summit",
        year: "2022",
        location: "New York, NY",
        description: "Panel discussion on strategies for improving collaboration between design and development teams."
    },
    {
        title: "Building Accessible Web Applications",
        event: "Accessibility in Tech Conference",
        year: "2021",
        location: "Austin, TX",
        description: "Workshop on implementing accessibility best practices in modern web applications."
    }
];

export default function AchievementsPage() {
    return (
        <div className="py-16">
            <SectionTitle title="Achievements" subtitle="Awards, publications, and speaking engagements" />

            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Awards & Recognition</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {awards.map((award, index) => (
                            <Card key={index} className="overflow-hidden h-full">
                                <div className="h-48 bg-gray-200 relative">
                                    <Image
                                        src={award.image}
                                        alt={award.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-lg text-primary-600">{award.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="pt-0">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-600">{award.organization}</span>
                                        <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">{award.year}</span>
                                    </div>
                                    <p className="text-gray-700">{award.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-8 text-center">Publications</h3>
                    <div className="space-y-6">
                        {publications.map((pub, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-bold mb-2 text-primary-600">{pub.title}</h4>
                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <span className="text-gray-600">{pub.journal || pub.book}</span>
                                        <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">{pub.year}</span>
                                    </div>
                                    <p className="text-gray-700 mb-4">{pub.description}</p>
                                    <a
                                        href={pub.link}
                                        className="text-primary-600 hover:text-primary-800 font-medium"
                                    >
                                        View Publication →
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold mb-8 text-center">Speaking Engagements</h3>
                    <div className="space-y-6">
                        {speaking.map((talk, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <h4 className="text-lg font-bold mb-2 text-primary-600">{talk.title}</h4>
                                    <div className="flex flex-wrap gap-4 mb-3">
                                        <span className="text-gray-600">{talk.event}</span>
                                        <span className="text-gray-600">{talk.location}</span>
                                        <span className="text-sm bg-primary-100 text-primary-800 px-2 py-1 rounded">{talk.year}</span>
                                    </div>
                                    <p className="text-gray-700">{talk.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}*/
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        number: "1",
        title: "Upload PDF",
        description: "Add your book file",
    },
    {
        number: "2",
        title: "AI Processing",
        description: "We analyze the content",
    },
    {
        number: "3",
        title: "Voice Chat",
        description: "Discuss with AI",
    },
];

export default function HeroSection() {
    return (
        <section className="mb-10 md:mb-16 mx-auto grid w-full max-w-[1240px] grid-cols-1 items-center gap-8 rounded-[10px] bg-[var(--bg-secondary)] px-8 py-10 sm:px-10 md:grid-cols-[1.08fr_1.22fr_0.9fr] md:gap-5 md:px-[34px] md:py-5">
            <div className="flex flex-col items-start">
                <h1 className="font-serif text-[32px] font-bold leading-tight tracking-[-0.02em] text-black sm:text-[36px]">
                    Your Library
                </h1>
                <p className="mt-3 max-w-[365px] text-[14px] leading-[19px] text-[var(--text-secondary)]">
                    Convert your books into interactive AI conversations.
                    <br />
                    Listen, learn, and discuss your favorite reads.
                </p>
                <Link
                    href="/books/new"
                    className="mt-5 inline-flex h-[38px] items-center gap-2 rounded-lg bg-white px-5 text-[14px] font-semibold text-[var(--text-primary)] shadow-sm transition-colors hover:bg-[#fffaf0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]"
                >
                    <span aria-hidden="true" className="text-[20px] font-normal leading-none">
                        +
                    </span>
                    Add new book
                </Link>
            </div>

            <div className="relative flex min-h-[230px] items-center justify-center md:min-h-[230px]">
                <Image
                    src="/assets/hero-illustration.png"
                    alt="Vintage books, an open book, a globe, and a reading lamp"
                    width={500}
                    height={338}
                    priority
                    className="h-auto w-full max-w-[500px] object-contain"
                />
            </div>

            <div className="rounded-lg bg-white px-[14px] py-[14px] shadow-sm">
                <ol className="space-y-[14px]">
                    {steps.map((step) => (
                        <li key={step.number} className="flex items-start gap-[10px]">
                            <span className="flex h-[25px] w-[25px] shrink-0 items-center justify-center rounded-full border border-[#273246] font-serif text-[12px] text-[var(--text-primary)]">
                                {step.number}
                            </span>
                            <div className="pt-[1px]">
                                <p className="text-[14px] font-semibold leading-[17px] text-[var(--text-primary)]">
                                    {step.title}
                                </p>
                                <p className="mt-1 text-[12px] leading-[15px] text-[var(--text-secondary)]">
                                    {step.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/ui/BookCard";
import { Books } from "@/lib/constants";

export default function Page() {
    return (
        <main className=" wrapper container ">
            <HeroSection />

            <section className="library-books-grid" aria-label="Your books">
                {Books.map((book) => (
                    <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} />
                ))}
            </section>
        </main>
    );
}

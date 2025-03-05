import { FeedList } from "../components/feed-list";

export default function Home() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">OmniFeed</h1>
            <FeedList />
        </main>
    );
}

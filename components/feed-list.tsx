import { Card } from "@/components/ui/card";
import { VideoStream } from "./video-stream";
import { Newspaper, Globe, Twitter, Video, ListVideo } from "lucide-react";

const feeds = [
    {
        title: "Tech News",
        source: "TechCrunch",
        icon: Newspaper,
        lastUpdate: "5 minutes ago",
        unread: 3,
    },
    {
        title: "World News",
        source: "Reuters",
        icon: Globe,
        lastUpdate: "10 minutes ago",
        unread: 7,
    },
    {
        title: "Social Updates",
        source: "Twitter",
        lastUpdate: "2 minutes ago",
        unread: 12,
    },
    {
        title: "Live News Stream",
        source: "News Channel",
        icon: Video,
        type: "video",
        streamUrl: "https://example.com/stream/index.m3u8",
        lastUpdate: "Live",
        unread: 0,
    },
];

export function FeedList() {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {feeds.map((feed, index) => (
                <Card
                    key={index}
                    className="p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                    {feed.type === "video" ? (
                        <VideoStream src={feed.streamUrl} title={feed.title} />
                    ) : (
                        <div className="flex items-center space-x-4">
                            <div className="p-2 bg-primary/10 rounded-full">
                                <ListVideo className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-semibold">{feed.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {feed.source}
                                </p>
                            </div>
                            {feed.unread > 0 && (
                                <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm">
                                    {feed.unread}
                                </div>
                            )}
                        </div>
                    )}
                    {feed.type !== "video" && (
                        <p className="text-xs text-muted-foreground mt-4">
                            Last updated: {feed.lastUpdate}
                        </p>
                    )}
                </Card>
            ))}
        </div>
    );
}
